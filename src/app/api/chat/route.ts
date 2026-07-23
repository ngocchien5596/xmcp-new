import { NextRequest } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const { messages, conversation_id: conversationId } = await req.json();

    const apiUrl = process.env.AI_API_URL || "http://127.0.0.1:8000/api/chat";
    const apiKey = process.env.AI_API_KEY || "";

    // -------------------------------------------------------------------------
    // XỬ LÝ CÂU HỎI NHANH (QUICK QUESTIONS) - PHẢN HỒI LẬP TỨC
    // -------------------------------------------------------------------------
    const QUICK_QUESTIONS_MAP: Record<string, string> = {
      "gioi thieu chung ve xi mang cam pha":
        "Nhà máy Xi măng Cẩm Phả do Tổng Công ty Cổ phần Xuất nhập khẩu và Xây dựng Việt Nam (Vinaconex) đầu tư. Đây là Nhà máy hiện đại và bậc nhất Việt Nam hiện nay (Áp dụng công nghệ sản xuất xi măng tiên tiến, hiện đại, thiết bị chính theo tiêu chuẩn Châu Âu), dây chuyền sản xuất được điều khiển tự động hóa cao từ công đoạn nhập nguyên liệu cho tới công đoạn xuất sản phẩm. Tháng 10/2013 Tập đoàn Công nghiệp Viễn thông Quân đội (Viettel) đã trở thành cổ đông chiến lược của Công ty Cổ phần Xi măng Cẩm Phả đánh dấu mốc quan trọng trong chiến lược phát triển của Viettel.\n\n" +
        "Nhà máy được xây dựng tại Km6, Quốc lộ 18A, Phường Quang Hanh, Tỉnh Quảng Ninh, công suất thiết kế 6.000 tấn clinker/ 1 ngày, tương đương 2,3 triệu tấn xi măng PCB40/năm.\n\n" +
        "Chi nhánh phía Nam (Trạm nghiền Xi măng Cẩm Phả) được xây dựng tại Khu Công nghiệp Mỹ Xuân, Phường Phú Mỹ, Thành Phố Hồ Chí Minh trên diện tích 20ha, với công suất 1.480.000 tấn xi măng/năm.",

      "cac dong san pham xi mang chinh la gi":
        "Danh mục các sản phẩm xi măng chính của Xi măng Cẩm Phả bao gồm:\n" +
        "- **Xi măng Econs 40:** Sử dụng đa dụng cho sàn, cột, dầm bê tông dân dụng.\n" +
        "- **Xi măng PCB30 & PCB40:** Dòng sản phẩm phổ thông có cường độ cao, dẻo và chống rạn nứt tốt.\n" +
        "- **Xi măng hỗn hợp bền sunfat PCB50:** Chuyên dụng chống ăn mòn trong môi trường xâm thực mặn/phèn.\n" +
        "- **Xi măng Poóc lăng hỗn hợp PCB40 & PC50 rời:** Cung cấp cho các trạm trộn bê tông cường độ cao.\n" +
        "- **Xi măng Xỉ lò cao:** Đáp ứng các tiêu chuẩn kỹ thuật đặc thù cho công trình thủy lợi và đê đập.",

      "xi mang ben sun phat dung o dau":
        "Xi măng bền sunfat (PCB50 bền sunfat) được khuyến nghị sử dụng tại:\n" +
        "- Các công trình xây dựng trong môi trường biển, ven biển hoặc ngập mặn.\n" +
        "- Các công trình đê đập thủy lợi, hệ thống thoát nước hoặc bể chứa nước nhiễm phèn/hóa chất ăn mòn.\n" +
        "- Các cấu trúc bê tông ngầm dưới lòng đất hoặc công trình chịu tác động xâm thực mạnh của sunfat.",

      "dia chi nha may va so dien thoai lien he":
        "Thông tin liên hệ của Công ty Cổ phần Xi măng Cẩm Phả:\n" +
        "- **Nhà máy chính:** Km 6, Quốc lộ 18A, Phường Quang Hanh, Tỉnh Quảng Ninh. ĐT: (0203) 3721995 / 3721996. Email: info@camphacement.vn / customer@camphacement.vn\n" +
        "- **Văn phòng đại diện Hà Nội:** Tầng 4, tòa nhà TCC Tower, số 19 Duy Tân, quận Cầu Giấy, thành phố Hà Nội.\n" +
        "- **Trạm nghiền phía Nam:** Khu Công nghiệp Mỹ Xuân, Phường Phú Mỹ, Thành Phố Hồ Chí Minh.\n" +
        "- **Văn phòng đại diện HCM: ** Tầng 6, tòa nhà Vinaconex, 47 Điện Biên Phủ, phường Tân Định, Thành phố Hồ Chí Minh."
    };

    const cleanQuery = (str: string) => str.toLowerCase().trim().replace(/[^\p{L}\p{N}\s]/gu, "");
    const removeAccents = (str: string) => {
      return str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "d")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "d");
    };

    const lastMessage = messages[messages.length - 1]?.content || "";
    const cleanKey = removeAccents(cleanQuery(lastMessage));
    const useLocalOrderStorage = process.env.ORDER_STORAGE_MODE === "next-local" && !process.env.VERCEL;
    const PRODUCT_LIST_ANSWER =
      "Các sản phẩm tiêu biểu của Xi măng Cẩm Phả gồm:\n" +
      "- Xi măng Econs 40: dùng để xây, tô/trát tường nhà ở, nhà xưởng; vữa dẻo, cường độ ổn định, hạn chế rạn nứt.\n" +
      "- Xi măng PCB30: phù hợp cho xây, tô/trát và các hạng mục dân dụng thông thường.\n" +
      "- Xi măng PCB40: dùng cho sàn, cột, dầm bê tông; tăng khả năng chống thấm, cường độ và độ linh động của vữa.\n" +
      "- Xi măng đa dụng: dùng cho sàn, cột, dầm bê tông, sản phẩm bê tông và xây tô.\n" +
      "- Xi măng xây trát cao cấp: dùng cho công đoạn trát hoàn thiện, tăng độ dẻo, giữ nước và bám dính tốt.\n" +
      "- Xi măng Xỉ lò cao: dùng cho bê tông cọc đất, xử lý gia cố nền móng yếu, phù hợp môi trường nhiễm mặn/nhiễm phèn.\n" +
      "- Xi măng hỗn hợp bền sunfat: phù hợp nền móng, cấu kiện ngầm, công trình vùng ngập mặn hoặc môi trường chứa sunfat.\n" +
      "- Xi măng poóc lăng hỗn hợp PCB50: phù hợp bê tông mác cao, bê tông khối lớn và công trình công nghiệp.\n" +
      "- Clinker CPC50: clanhke xi măng poóc lăng thương phẩm có hoạt tính cường độ mức 50 N/mm2.";
    const ECONS40_ANSWER =
      "Xi măng Econs 40 là sản phẩm xi măng dùng cho các hạng mục xây, tô/trát trong công trình dân dụng và nhà xưởng.\n" +
      "- Công dụng: dùng để xây, tô/trát tường nhà ở, nhà xưởng.\n" +
      "- Ưu điểm: vữa dẻo, siêu kết dính, cường độ cao ổn định, tăng cường chống xâm thực và hạn chế rạn nứt.\n" +
      "- Bao bì: có bao bì khu vực phía Nam.\n" +
      "- Giá bán: thay đổi theo thị trường; khách hàng nên liên hệ trực tiếp Công ty Cổ phần Xi măng Cẩm Phả để được báo giá chính xác.";
    const ORDERING_ANSWER =
      "Anh/chị muốn đặt hàng vui lòng cung cấp giúp tôi:\n\n" +
      "Sản phẩm cần mua - số lượng - địa điểm nhận - thời gian cần hàng - số điện thoại liên hệ.\n\n" +
      "Tôi sẽ ghi nhận và chuyển yêu cầu đến bộ phận kinh doanh để kiểm tra khả năng cung ứng và gửi báo giá chính thức.";
    const MODIFY_ORDER_ANSWER =
      "Tôi sẽ hỗ trợ anh/chị ghi nhận yêu cầu sửa đơn. Anh/chị vui lòng cung cấp mã đơn hoặc xác nhận đây có phải đơn vừa trao đổi trong cuộc trò chuyện này không?";
    const ADDITIONAL_ORDER_ANSWER =
      "Tôi sẽ giữ nguyên đơn hiện tại và hỗ trợ anh/chị tạo thêm một yêu cầu đặt hàng mới. Anh/chị vui lòng cung cấp thông tin cho đơn mới: sản phẩm cần mua - số lượng - địa điểm nhận - thời gian cần hàng - số điện thoại liên hệ.";
    const CLARIFY_ADD_OR_MODIFY_ANSWER =
      "Anh/chị muốn bổ sung vào đơn hiện tại hay tạo thêm một đơn hàng mới tách biệt?";
    const NEGATED_ORDER_ANSWER = "Tôi đã ghi nhận. Khi anh/chị cần đặt hàng, tôi luôn sẵn sàng hỗ trợ.";
    const isGreeting =
      /^(xin chao|chao|hello|hi|hey|alo|aloo|alo ạ|chao ban|xin chao ban)$/.test(cleanKey);
    const compactKey = cleanKey.replace(/\s/g, "");
    const isEcons40Question = compactKey.includes("econs40");
    const hasSpecificProduct =
      isEcons40Question ||
      ["pcb30", "pcb40", "pcb50", "pc50", "cpc50"].some((product) => compactKey.includes(product));
    const isProductListQuestion =
      cleanKey.includes("san pham") &&
      !hasSpecificProduct &&
      (
        cleanKey.includes("co") ||
        cleanKey.includes("tieu bieu") ||
        cleanKey.includes("chinh") ||
        cleanKey.includes("dong") ||
        cleanKey.includes("gom") ||
        cleanKey.includes("bao gom") ||
        cleanKey.includes("liet ke") ||
        cleanKey.includes("danh sach") ||
        cleanKey.includes("nhung gi") ||
        cleanKey.includes("nao")
      );
    const normalizeOrderKey = (value: string) => {
      let normalized = value
        .replace(/\bmuoons\b/g, "muon")
        .replace(/\bmuonns\b/g, "muon")
        .replace(/\bmuns\b/g, "muon")
        .replace(/\bmun\b/g, "muon")
        .replace(/\bdat on\b/g, "dat don")
        .replace(/\btao then\b/g, "tao them")
        .replace(/\bdc\b/g, "duoc")
        .replace(/\bko\b/g, "khong")
        .replace(/\bkg\b/g, "khong")
        .replace(/\bkh\b/g, "khong")
        .replace(/\border\b/g, "dat hang")
        .replace(/\bbook\b/g, "dat")
        .replace(/\badd\b/g, "them")
        .replace(/\bupdate\b/g, "sua")
        .replace(/\bmodify\b/g, "sua");
      normalized = normalized.replace(/\s+/g, " ").trim();
      return normalized;
    };
    const orderKey = normalizeOrderKey(cleanKey);
    const orderCompactKey = orderKey.replace(/\s/g, "");
    const classifyOrderIntent = () => {
      const hasAny = (phrases: string[]) => phrases.some((phrase) => orderKey.includes(phrase));
      const hasCompactAny = (phrases: string[]) => phrases.some((phrase) => orderCompactKey.includes(phrase));

      const negated = hasAny([
        "khong muon dat", "chua muon dat", "khong muon tao", "chua muon tao",
        "dung dat", "khoan dat", "chua can dat", "khong can dat",
        "khong muon sua", "khoan sua", "dung sua", "khong muon tao them",
      ]);
      if (negated) {
        if (hasAny(["tao them", "don moi", "tach rieng", "khong gop"])) return "additional";
        if (hasAny(["them vao don", "gop vao don", "cong vao don"])) return "modify";
        return "negated";
      }
      if (
        hasAny([
          "tao them mot don moi", "tao them don hang", "dat them mot don moi",
          "mot don nua", "don nua", "don hang nua", "tao don rieng", "tach rieng",
          "tach thanh don khac", "don khac", "giu nguyen don cu", "khong gop",
          "khong sua don cu", "tao don thu hai", "dat tiep mot don moi",
          "them mot don moi", "them mot don khac", "dat them don moi",
        ]) ||
        hasCompactAny(["taothemdonmoi", "motdonnua", "donhangnua", "taodonrieng", "tachrieng"])
      ) {
        return "additional";
      }
      if (
        hasAny([
          "sua don", "sua don hang", "chinh lai don", "cap nhat don",
          "thay doi don", "doi thong tin don", "sua don cu", "sua don vua dat",
          "don vua roi", "don hien tai", "don dang co", "nhap sai", "sua so luong",
          "thay doi so luong", "tang so luong", "giam so luong", "tang don",
          "giam don", "them vao don", "vao don cu", "vao don hien tai",
          "vao don vua dat", "cong vao don", "gop vao don", "doi san pham",
          "doi dia diem", "sua dia chi", "doi ngay", "lui ngay", "chuyen ngay",
          "sua so dien thoai", "them hang vao don",
        ])
      ) {
        return "modify";
      }
      if (hasAny(["dat them", "mua them", "lay them", "can them hang", "len them", "dat tiep", "them hang", "them pcb", "them xi mang"])) {
        return "clarify";
      }
      if (
        hasAny([
          "dat hang", "dat don", "muon dat don", "tao don", "tao don hang",
          "can dat hang", "can mua hang", "muon mua xi mang", "muon dat xi mang",
          "can lay hang", "muon lay hang", "lay hang", "cho em lay hang",
          "cho toi lay hang", "muon nhap hang", "dat mua", "len don", "chot don",
          "lam don", "cho toi dat hang", "cho em dat hang", "ho tro toi dat hang", "gui yeu cau mua hang",
        ]) ||
        hasCompactAny([
          "dathang", "datdon", "muondatdon", "taodon", "muonmua", "muondatmua",
          "muonlayhang", "canlayhang", "choemlayhang", "chotoilayhang",
        ])
      ) {
        return "create";
      }
      return "";
    };
    const orderIntent = classifyOrderIntent();
    const isOrderingQuestion =
      Boolean(orderIntent) ||
      [
        "dat hang",
        "dat don",
        "muon dat don",
        "dat duoc hang",
        "dat mua",
        "mua hang",
        "mua xi mang",
        "muon mua",
        "muon lay hang",
        "can lay hang",
        "cho em lay hang",
        "cho toi lay hang",
        "lay hang",
        "bao gia",
        "can bao gia",
        "xin gia",
        "hoi gia",
        "gia ban",
        "can lam gi de dat",
        "de dat duoc hang",
        "dat them",
        "dat them don",
        "them don",
        "don nua",
        "don hang nua",
        "muon dat them",
        "muon dat them don",
        "dat don moi",
        "don moi",
      ].some((keyword) =>
        cleanKey.includes(keyword)
      ) ||
      [
        "dathang",
        "datdon",
        "muondatdon",
        "datduochang",
        "datmua",
        "muahang",
        "baogia",
        "muonlayhang",
        "canlayhang",
        "choemlayhang",
        "chotoilayhang",
        "layhang",
        "datthem",
        "datthemdon",
        "themdon",
        "donnua",
        "donhangnua",
        "datdonmoi",
      ].some((keyword) => compactKey.includes(keyword));

    const hasOrderContext = () => {
      const recentText = messages
        .slice(-4)
        .map((message: { content?: string }) => message.content || "")
        .join(" ");
      const normalized = removeAccents(cleanQuery(recentText));
      const rawText = recentText.toLowerCase();
      return [
        "san pham can mua",
        "so luong",
        "dia diem nhan",
        "thoi gian can hang",
        "so dien thoai lien he",
        "bo phan kinh doanh",
        "bao gia chinh thuc",
        "bo sung giup toi",
        "chua cung cap",
        "dia diem",
        "thoi gian",
      ].some((marker) => normalized.includes(marker)) ||
        ["sản phẩm cần mua", "số lượng", "địa điểm nhận", "thời gian cần hàng", "số điện thoại", "bổ sung giúp tôi", "chưa cung cấp", "báo giá chính thức"].some((marker) =>
          rawText.includes(marker)
        );
    };

    const isNonOrderTopicQuery = () => {
      if (/[?？]/.test(lastMessage)) return true;
      return [
        "gioi thieu", "thong tin cong ty", "tong giam doc", "giam doc",
        "san pham tieu bieu", "cac san pham", "danh sach san pham",
        "chi tiet san pham", "econs", "pcb la gi", "pcb40 la gi", "pcb30 la gi",
        "tuyen dung", "tuyen nhan vien", "vi tri tuyen", "tin tuc",
        "chinh sach moi truong", "chinh sach chat luong", "thanh tuu",
        "khach hang", "nha phan phoi", "van phong", "dia chi cong ty",
        "lien he cong ty", "he thong phan phoi", "la gi", "nhu the nao",
        "co nhung", "gom nhung", "bao gom",
      ].some((marker) => cleanKey.includes(marker));
    };

    const isConfirmationOnly = () => {
      const value = cleanKey.replace(/[:.,!\-\s]+$/g, "").trim();
      return [
        "dung", "dung roi", "ok", "oke", "okay", "vang", "phai", "chinh xac",
        "xac nhan", "co", "uh", "um", "duoc", "dong y",
      ].includes(value);
    };

    const extractOrderRequest = () => {
      if (["modify", "clarify", "negated"].includes(orderIntent)) return null;
      if (isConfirmationOnly()) return null;
      if (!hasOrderContext() && !isOrderingQuestion) return null;
      if (hasOrderContext() && !orderIntent && isNonOrderTopicQuery()) return null;

      const phoneMatch = lastMessage.match(/(?:\+?84|0)(?:[\s.-]?\d){8,10}\b/);
      let phone = phoneMatch ? phoneMatch[0].replace(/\D/g, "") : "";
      const productPatterns: Array<[RegExp, string]> = [
        [/\becons\s*40\b/, "Xi măng Econs 40"],
        [/\bpcb\s*30\b/, "Xi măng PCB30"],
        [/\bpcb\s*40\b/, "Xi măng PCB40"],
        [/\bpcb\s*50\b/, "Xi măng PCB50"],
        [/\bcpc\s*50\b|\bclinker\b/, "Clinker CPC50"],
        [/xay trat|xay to/, "Xi măng xây trát cao cấp"],
        [/xi lo cao/, "Xi măng Xỉ lò cao"],
        [/sunfat/, "Xi măng hỗn hợp bền sunfat"],
      ];
      let product = productPatterns.find(([pattern]) => pattern.test(cleanKey))?.[1] || "";
      let quantity = lastMessage.match(/(\d+(?:[.,]\d+)?)\s*(tấn|tan|bao|kg|tạ|ta|xe|container|jumbo)/i)?.[0]?.trim() || "";
      let deliveryLocation =
        lastMessage.match(/(?:giao|nhận|nhan|tại|tai|ở|o|đến|den|về|ve)\s+([^,.;\n]+(?:[, ][^,.;\n]+){0,4})/i)?.[1]?.trim() || "";
      if (phoneMatch) {
        deliveryLocation = deliveryLocation.replace(phoneMatch[0], "").trim().replace(/^[,.\-\s]+|[,.\-\s]+$/g, "");
      }
      deliveryLocation = deliveryLocation
        .split(/\b(?:hôm nay|hom nay|ngày mai|ngay mai|tuần này|tuan nay|tuần sau|tuan sau|sdt|số điện thoại|so dien thoai)\b/i)[0]
        .replace(/^(?:tại|tai|ở|o|đến|den|về|ve)\s+/i, "")
        .trim()
        .replace(/^[,.\-\s]+|[,.\-\s]+$/g, "");
      const neededTime =
        lastMessage.match(/(hôm nay|hom nay|ngày mai|ngay mai|tuần này|tuan nay|tuần sau|tuan sau|\d{1,2}[/-]\d{1,2}(?:[/-]\d{2,4})?)/i)?.[0]?.trim() || "";
      const isShortLocationReply =
        hasOrderContext() &&
        !phone &&
        !product &&
        !quantity &&
        !neededTime &&
        !deliveryLocation &&
        lastMessage.trim().length > 0 &&
        lastMessage.trim().split(/\s+/).length <= 6 &&
        !/[?？]/.test(lastMessage) &&
        ![
          "gioi thieu", "san pham", "tong giam doc", "tuyen", "tin tuc", "chinh sach",
          "gia", "bao gia", "dat hang", "dat don", "mua", "lay hang", "sua don",
        ].some((marker) => cleanKey.includes(marker));
      if (isShortLocationReply) {
        deliveryLocation = lastMessage.trim().replace(/^[,.\-\s]+|[,.\-\s]+$/g, "");
      }
      if (!deliveryLocation && hasOrderContext() && neededTime) {
        deliveryLocation = lastMessage
          .replace(neededTime, "")
          .replace(/\b(?:tôi|minh|thông tin|thong tin|nhé|nhe|địa điểm nhận|dia diem nhan|địa điểm|dia diem|thời gian cần hàng|thoi gian can hang|thời gian|thoi gian|bổ sung|bo sung|cho đơn hàng|cho don hang|về đơn hàng|ve don hang|là|la)\b/gi, " ")
          .replace(/\s+/g, " ")
          .trim()
          .replace(/^[,:.\-\s]+|[,:.\-\s]+$/g, "");
        if (!deliveryLocation || [
          "toi", "minh", "nhe", "toi nhe", "minh nhe", "thong tin", "toi thong tin nhe",
        ].includes(removeAccents(cleanQuery(deliveryLocation)))) {
          deliveryLocation = "";
        }
      }
      const normalizedDeliveryLocation = removeAccents(cleanQuery(deliveryLocation));
      if (
        ["create", "additional"].includes(orderIntent) &&
        deliveryLocation &&
        !phone &&
        !product &&
        !quantity &&
        !neededTime &&
        ["don cu", "don khac", "don moi", "don vua roi"].some((marker) => normalizedDeliveryLocation.includes(marker))
      ) {
        return null;
      }
      const hasFreshOrderData = Boolean(phone || product || quantity || deliveryLocation || neededTime);
      if (!hasFreshOrderData) return null;
      if (hasOrderContext()) {
        const contextText = messages
          .slice(0, -1)
          .map((message: { content?: string }) => message.content || "")
          .join("\n");
        if (!product) {
          const contextProduct = contextText.match(/Sản phẩm:\s*([^\n]+)/i)?.[1]?.trim() || "";
          if (contextProduct && !contextProduct.toLowerCase().includes("chưa cung cấp")) product = contextProduct;
        }
        if (!quantity) {
          const contextQuantity = contextText.match(/Số lượng:\s*([^\n]+)/i)?.[1]?.trim() || "";
          if (contextQuantity && !contextQuantity.toLowerCase().includes("chưa cung cấp")) quantity = contextQuantity;
        }
        if (!phone) {
          const contextPhone = contextText.match(/(?:Số điện thoại|sdt|phone):?\s*((?:\+?84|0)(?:[\s.-]?\d){8,10})/i)?.[1] || "";
          if (contextPhone) phone = contextPhone.replace(/\D/g, "");
        }
      }
      const missingFields = Object.entries({
        product,
        quantity,
        delivery_location: deliveryLocation,
        needed_time: neededTime,
        phone,
      })
        .filter(([, value]) => !value)
        .map(([field]) => field);

      if (!phone && !product && !quantity && !deliveryLocation && !neededTime) return null;

      return {
        created_at: new Date().toISOString(),
        source: "next-api",
        conversation_id: typeof conversationId === "string" ? conversationId : "",
        product,
        quantity,
        delivery_location: deliveryLocation,
        needed_time: neededTime,
        phone,
        missing_fields: missingFields,
        raw_message: lastMessage.trim(),
      };
    };

    const saveOrderRequest = async (orderRequest: Record<string, unknown>) => {
      const filePath = path.resolve(process.cwd(), "..", "chatbot-server", "data", "order_requests.json");
      await fs.mkdir(path.dirname(filePath), { recursive: true });
      let currentData: Array<Record<string, unknown>> = [];
      try {
        const raw = await fs.readFile(filePath, "utf8");
        const parsed = JSON.parse(raw);
        currentData = Array.isArray(parsed) ? parsed : [];
      } catch {
        currentData = [];
      }
      let savedRequest = orderRequest;
      const fields = ["product", "quantity", "delivery_location", "needed_time", "phone"];
      const currentConversationId = typeof orderRequest.conversation_id === "string" ? orderRequest.conversation_id : "";
      for (let index = currentData.length - 1; index >= 0; index -= 1) {
        const existing = currentData[index];
        if (!Array.isArray(existing.missing_fields) || existing.missing_fields.length === 0) continue;
        if (currentConversationId && existing.conversation_id !== currentConversationId) continue;
        let updated = false;
        for (const field of fields) {
          if (!existing[field] && orderRequest[field]) {
            existing[field] = orderRequest[field];
            updated = true;
          }
        }
        if (updated) {
          existing.updated_at = new Date().toISOString();
          const rawMessages = Array.isArray(existing.raw_messages) ? existing.raw_messages : [existing.raw_message || ""];
          rawMessages.push(orderRequest.raw_message || "");
          existing.raw_messages = rawMessages;
          existing.missing_fields = fields.filter((field) => !existing[field]);
          savedRequest = existing;
          break;
        }
      }
      if (savedRequest === orderRequest) {
        currentData.push(orderRequest);
      }
      await fs.writeFile(filePath, JSON.stringify(currentData, null, 2), "utf8");
      return savedRequest;
    };

    const buildOrderSavedAnswer = (orderRequest: Record<string, unknown>) => {
      const missingLabels: Record<string, string> = {
        product: "sản phẩm",
        quantity: "số lượng",
        delivery_location: "địa điểm nhận",
        needed_time: "thời gian cần hàng",
        phone: "số điện thoại",
      };
      const missingFields = Array.isArray(orderRequest.missing_fields) ? orderRequest.missing_fields as string[] : [];
      const lines = [
        "Tôi đã ghi nhận yêu cầu đặt hàng của anh/chị:",
        `- Sản phẩm: ${orderRequest.product || "chưa cung cấp"}`,
        `- Số lượng: ${orderRequest.quantity || "chưa cung cấp"}`,
        `- Địa điểm nhận: ${orderRequest.delivery_location || "chưa cung cấp"}`,
        `- Thời gian cần hàng: ${orderRequest.needed_time || "chưa cung cấp"}`,
        `- Số điện thoại: ${orderRequest.phone || "chưa cung cấp"}`,
        "",
        "Tôi sẽ chuyển yêu cầu đến bộ phận kinh doanh để kiểm tra khả năng cung ứng và gửi báo giá chính thức.",
      ];
      if (missingFields.length > 0) {
        lines.push(`Anh/chị bổ sung giúp tôi: ${missingFields.map((field) => missingLabels[field] || field).join(", ")}.`);
      }
      return lines.join("\n");
    };

    const orderRequest = useLocalOrderStorage ? extractOrderRequest() : null;
    const savedOrderRequest = orderRequest ? await saveOrderRequest(orderRequest) : null;
    const savedOrderAnswer = savedOrderRequest ? buildOrderSavedAnswer(savedOrderRequest) : "";

    if (
      QUICK_QUESTIONS_MAP[cleanKey] ||
      isProductListQuestion ||
      isGreeting ||
      isEcons40Question ||
      (useLocalOrderStorage && (isOrderingQuestion || savedOrderAnswer))
    ) {
      const responseText =
        savedOrderAnswer
          ? savedOrderAnswer
          : isGreeting
          ? "Xin chào! Tôi là Trợ lý ảo của Công ty Cổ phần Xi măng Cẩm Phả. Tôi có thể hỗ trợ quý khách về sản phẩm, tuyển dụng, thông tin liên hệ hoặc thông tin công ty."
          : isEcons40Question
          ? ECONS40_ANSWER
          : isOrderingQuestion
          ? orderIntent === "modify"
            ? MODIFY_ORDER_ANSWER
            : orderIntent === "additional"
            ? ADDITIONAL_ORDER_ANSWER
            : orderIntent === "clarify"
            ? CLARIFY_ADD_OR_MODIFY_ANSWER
            : orderIntent === "negated"
            ? NEGATED_ORDER_ANSWER
            : ORDERING_ANSWER
          : isProductListQuestion
          ? PRODUCT_LIST_ANSWER
          : QUICK_QUESTIONS_MAP[cleanKey] ||
        QUICK_QUESTIONS_MAP["cac dong san pham xi mang chinh la gi"];
      // Tách chuỗi thành các chunk nhỏ (ví dụ 8 ký tự một) để tạo hiệu ứng gõ phím mượt mà
      const chunks: string[] = [];
      for (let i = 0; i < responseText.length; i += 24) {
        chunks.push(responseText.slice(i, i + 24));
      }

      const stream = new ReadableStream({
        async start(controller) {
          const encoder = new TextEncoder();
          try {
            for (const chunk of chunks) {
              const escaped = chunk.replace(/\n/g, "[NEWLINE]");
              controller.enqueue(encoder.encode(`data: ${escaped}\n\n`));
              // Trì hoãn 10ms giữa mỗi chunk
              await new Promise((resolve) => setTimeout(resolve, 5));
            }
          } catch (e) {
            console.error("Lỗi khi stream câu trả lời nhanh:", e);
          } finally {
            controller.close();
          }
        }
      });

      return new Response(stream, {
        headers: {
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
          "Connection": "keep-alive",
        },
      });
    }
    // -------------------------------------------------------------------------

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": apiKey,
      },
      body: JSON.stringify({
        conversation_id: conversationId,
        messages: messages.slice(-4).map((message: { role?: string; content?: string }) => ({
          role: message.role,
          content: typeof message.content === "string"
            ? message.content.slice(0, message.role === "assistant" ? 1000 : 2000)
            : "",
        })),
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return new Response(
        JSON.stringify({ error: `AI Server Error: ${errorText}` }),
        {
          status: response.status,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Chuyển tiếp luồng Stream từ FastAPI về cho Client Next.js
    const stream = new ReadableStream({
      async start(controller) {
        if (!response.body) {
          controller.close();
          return;
        }

        const reader = response.body.getReader();

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            controller.enqueue(value);
          }
        } catch (error) {
          console.error("Lỗi khi đọc luồng Stream:", error);
          controller.error(error);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
      },
    });
  } catch (error: unknown) {
    console.error("Lỗi API Proxy Next.js:", error);
    return new Response(
      JSON.stringify({
        error: "[LỖI KẾT NỐI] Không thể kết nối tới máy chủ dịch vụ AI"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
