# Plan tối giản cho luồng chatbot đặt hàng

## Mục tiêu

Rà soát và chỉnh luồng đặt hàng để chatbot không tự suy diễn đơn hàng, không lấy nhầm thông tin từ hội thoại cũ, và chỉ lưu dữ liệu khi người dùng thật sự cung cấp thông tin đặt hàng.

Giữ cách lưu đơn giản bằng file JSON hiện tại. Không triển khai thêm `chat_id`, `status`, `order_request_id`, database, hay file state riêng nếu chưa thật sự cần.

## Phạm vi giữ nguyên

File lưu đơn:

```text
chatbot-server/data/order_requests.json
```

Mỗi bản ghi vẫn là một object trong mảng JSON, dùng các trường đang có:

```json
{
  "created_at": "2026-07-23T10:00:00",
  "updated_at": "2026-07-23T10:05:00",
  "source": "next-api",
  "product": "Xi măng PCB40",
  "quantity": "30 tấn",
  "delivery_location": "Hạ Long",
  "needed_time": "25/7",
  "phone": "0975788609",
  "missing_fields": [],
  "raw_message": "xi măng pcb40, 0975788609, 30 tấn",
  "raw_messages": [
    "xi măng pcb40, 0975788609, 30 tấn",
    "Hạ Long, 25/7"
  ]
}
```

Các trường chính cần thu thập:

- `product`: sản phẩm cần mua
- `quantity`: số lượng
- `delivery_location`: địa điểm nhận hàng
- `needed_time`: thời gian cần hàng
- `phone`: số điện thoại liên hệ

Các trường phụ để vận hành đơn giản:

- `created_at`
- `updated_at`
- `source`
- `missing_fields`
- `raw_message`
- `raw_messages`

## Không triển khai

- Không thêm `chat_id`.
- Không thêm `order_request_id`.
- Không thêm `status`.
- Không tạo `chat_states.json`.
- Không đổi `order_requests.json` sang dạng object có metadata/schema version.
- Không tự động migrate toàn bộ dữ liệu cũ nếu file hiện tại vẫn đọc được.

## Vấn đề cần xử lý

### 1. Intent đặt hàng không được tạo đơn ngay

Các câu như:

- "tôi muốn đặt đơn"
- "em muốn lấy hàng"
- "tôi muốn mua xi măng"
- "tôi muốn đặt thêm đơn"
- "tôi muoons đặt thêm đơn"

Chỉ được trả về form yêu cầu thông tin:

```text
Anh/chị muốn đặt hàng vui lòng cung cấp giúp tôi:

Sản phẩm cần mua - số lượng - địa điểm nhận - thời gian cần hàng - số điện thoại liên hệ.

Tôi sẽ ghi nhận và chuyển yêu cầu đến bộ phận kinh doanh để kiểm tra khả năng cung ứng và gửi báo giá chính thức.
```

Không ghi object mới vào `order_requests.json` nếu người dùng chưa cung cấp thông tin cụ thể.

### 2. Không lấy lại thông tin đơn cũ cho đơn mới

Khi người dùng nói:

- "tôi muốn đặt thêm đơn"
- "tôi muốn đặt thêm đơn nữa"
- "cho tôi đặt đơn khác"

Chatbot phải hiểu đây là nhu cầu tạo đơn mới, nhưng chưa có dữ liệu đơn mới.

Không được tự lấy `product`, `quantity`, `phone`, `delivery_location`, `needed_time` từ bản ghi trước đó để tạo đơn mới.

### 3. Chỉ cập nhật đơn đang thiếu khi người dùng bổ sung thông tin

Ví dụ luồng đúng:

Người dùng:

```text
xi măng pcb40, 0975788609, 30 tấn
```

Lưu bản ghi còn thiếu:

```json
{
  "product": "Xi măng PCB40",
  "quantity": "30 tấn",
  "phone": "0975788609",
  "delivery_location": "",
  "needed_time": "",
  "missing_fields": ["delivery_location", "needed_time"]
}
```

Sau đó người dùng:

```text
Hạ Long, 25/7
```

Nếu bản ghi gần nhất còn thiếu `delivery_location` và `needed_time`, cập nhật chính bản ghi đó:

```json
{
  "product": "Xi măng PCB40",
  "quantity": "30 tấn",
  "phone": "0975788609",
  "delivery_location": "Hạ Long",
  "needed_time": "25/7",
  "missing_fields": []
}
```

Không chuyển câu "Hạ Long, 25/7" sang luồng hỏi tin tức/sự kiện.

### 4. Câu phủ định không được kích hoạt luồng đặt hàng

Các câu như:

- "tôi không muốn đặt hàng"
- "chưa đặt đâu"
- "không mua nữa"

Không trả form đặt hàng và không lưu JSON.

### 5. Câu sửa đơn phải hỏi rõ

Các câu như:

- "sửa đơn trước"
- "đổi số lượng"
- "đổi địa chỉ giao hàng"

Nếu chưa có đủ thông tin sửa gì thành gì, chatbot cần hỏi lại ngắn gọn. Không tự sửa bản ghi JSON nếu dữ liệu chưa rõ.

## Hướng chỉnh code sau khi duyệt

### Bước 1. Rà lại nơi ghi `order_requests.json`

Kiểm tra các nơi đang ghi file:

- `chatbot-server/main.py`
- `src/app/api/chat/route.ts`

Mục tiêu là tránh hai nơi cùng có logic suy luận khác nhau.

Ưu tiên sau khi duyệt:

- Backend Python là nơi quyết định intent và ghi JSON.
- Next route chỉ proxy request/response, không tự suy diễn và không tự ghi order JSON nếu backend đã xử lý.

### Bước 2. Chuẩn hóa helper đọc/ghi JSON

Giữ đơn giản, có thể đặt helper ngay trong `main.py` hoặc tách rất nhỏ nếu cần.

Helper cần làm:

- Đọc file UTF-8.
- Nếu file không tồn tại thì trả về `[]`.
- Nếu file lỗi JSON thì không crash server, trả lỗi rõ trong log.
- Ghi file bằng UTF-8 và `ensure_ascii=False`.
- Giữ format mảng JSON hiện tại.

### Bước 3. Chỉ append khi tin nhắn có dữ liệu cụ thể

Điều kiện tạo bản ghi mới:

- Intent là đặt hàng hoặc đặt thêm đơn.
- Tin nhắn hiện tại có ít nhất một trường cụ thể như sản phẩm, số lượng, số điện thoại, địa điểm, thời gian.
- Không phải câu chỉ thể hiện ý định chung.
- Không phải câu phủ định.

Ví dụ được lưu:

```text
xi măng pcb40, 30 tấn, 0975788609
```

Ví dụ không được lưu:

```text
tôi muốn đặt đơn
```

### Bước 4. Chỉ update bản ghi gần nhất khi phù hợp

Chỉ cập nhật bản ghi gần nhất khi:

- Bản ghi gần nhất còn `missing_fields`.
- Tin nhắn mới cung cấp đúng thông tin đang thiếu.
- Tin nhắn không phải intent tạo đơn mới độc lập.

Ví dụ được update:

```text
Hạ Long, 25/7
```

Ví dụ không được update:

```text
tôi muốn đặt thêm đơn
```

### Bước 5. Siết phản hồi đặt hàng

Khi người dùng chỉ mới thể hiện nhu cầu đặt hàng, phản hồi đúng form đã chốt:

```text
Anh/chị muốn đặt hàng vui lòng cung cấp giúp tôi:

Sản phẩm cần mua - số lượng - địa điểm nhận - thời gian cần hàng - số điện thoại liên hệ.

Tôi sẽ ghi nhận và chuyển yêu cầu đến bộ phận kinh doanh để kiểm tra khả năng cung ứng và gửi báo giá chính thức.
```

Không thêm câu hỏi cuối ngoài form này.

### Bước 6. Bổ sung test case tối thiểu

Test các nhóm chính:

- Intent đặt hàng chung không ghi JSON.
- Đặt thêm đơn không có thông tin không ghi JSON.
- Tin nhắn có sản phẩm, số lượng, điện thoại thì ghi JSON và báo thiếu địa điểm/thời gian.
- Tin nhắn bổ sung địa điểm/thời gian thì update bản ghi gần nhất.
- Câu phủ định không kích hoạt đặt hàng.
- Câu hỏi sản phẩm/tin tức/tuyển dụng không bị nhầm sang đặt hàng.

## Tiêu chí hoàn thành

- `order_requests.json` vẫn là mảng object đơn giản như hiện tại.
- Không xuất hiện thêm `chat_id`, `status`, `order_request_id`.
- Câu "tôi muốn đặt đơn" chỉ trả form, không ghi file.
- Câu "tôi muốn đặt thêm đơn" chỉ trả form/luồng đặt thêm, không tự copy đơn cũ.
- Câu "Hạ Long, 25/7" sau khi thiếu thông tin được hiểu là bổ sung đơn hàng.
- File JSON ghi tiếng Việt đúng UTF-8.
- Không còn hai luồng ghi JSON mâu thuẫn giữa Next và backend.
