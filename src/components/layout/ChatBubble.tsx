"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-hooks/purity */
/* eslint-disable react-hooks/immutability */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Trash2, Bot, User, RefreshCw, ChevronUp, ChevronDown } from "lucide-react";

const renderTextWithBold = (text: string) => {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) => {
    if (i % 2 === 1) {
      return <strong key={i} className="font-bold">{part}</strong>;
    }
    return part;
  });
};

const renderTable = (rows: string[][], key: number) => {
  if (rows.length === 0) return null;
  const headers = rows[0];
  const bodyRows = rows.slice(1);
  return (
    <div key={key} className="my-2 overflow-x-auto border border-slate-100 rounded-lg shadow-sm">
      <table className="min-w-full divide-y divide-slate-100 text-xs">
        <thead className="bg-slate-50">
          <tr>
            {headers.map((header, i) => (
              <th key={i} className="px-3 py-2 text-left font-semibold text-slate-600">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50 bg-white">
          {bodyRows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-slate-50/50 transition-colors">
              {row.map((cell, i) => (
                <td key={i} className="px-3 py-2 text-slate-700 whitespace-nowrap">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const parseMessageContent = (content: string) => {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let currentTable: string[][] = [];
  let inTable = false;

  for (let idx = 0; idx < lines.length; idx++) {
    const para = lines[idx];
    const cleanPara = para.trim();

    // Check if line is part of a markdown table
    if (cleanPara.startsWith("|") && cleanPara.endsWith("|")) {
      inTable = true;
      const cells = cleanPara
        .split("|")
        .slice(1, -1)
        .map(cell => cell.trim());

      const isSeparator = cells.every(cell => /^[-:]+$/.test(cell));
      if (!isSeparator) {
        // Tránh bị lặp lại dòng tiêu đề (duplicate headers) do mô hình LLM nhỏ hay lặp lại mẫu
        const isDuplicateHeader = currentTable.length > 0 &&
          cells.length === currentTable[0].length &&
          cells.every((val, idx) => val === currentTable[0][idx]);

        if (!isDuplicateHeader) {
          currentTable.push(cells);
        }
      }
      continue;
    } else {
      // Dòng trống: Bỏ qua không ngắt bảng
      if (cleanPara === "") {
        continue;
      }

      // Gặp văn bản thường: Đóng bảng cũ và vẽ ra
      if (inTable && currentTable.length > 0) {
        elements.push(renderTable(currentTable, idx));
        currentTable = [];
        inTable = false;
      }
    }

    if (!cleanPara) continue;

    const isBullet = cleanPara.startsWith("-") || cleanPara.startsWith("*") || cleanPara.startsWith("+");
    const isNumber = /^\d+\.\s/.test(cleanPara);

    if (isBullet) {
      const bulletText = cleanPara.substring(1).trim();
      elements.push(
        <div key={idx} className="flex items-start gap-2 mt-1.5 pl-2">
          <span className="text-[#ED1C24] font-bold flex-shrink-0">•</span>
          <span className="text-slate-700">{renderTextWithBold(bulletText)}</span>
        </div>
      );
    } else if (isNumber) {
      const match = cleanPara.match(/^(\d+)\.\s(.*)/);
      if (match) {
        elements.push(
          <div key={idx} className="flex items-start gap-2 mt-1.5 pl-2">
            <span className="text-[#ED1C24] font-bold flex-shrink-0">•</span>
            <span className="text-slate-700">{renderTextWithBold(match[2].trim())}</span>
          </div>
        );
      }
    } else {
      elements.push(
        <p key={idx} className={elements.length > 0 ? "mt-1.5" : ""}>
          {renderTextWithBold(para)}
        </p>
      );
    }
  }

  if (inTable && currentTable.length > 0) {
    elements.push(renderTable(currentTable, lines.length));
  }

  return elements;
};

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  isError?: boolean;
}

const QUICK_QUESTIONS = [
  "Giới thiệu chung về Xi măng Cẩm Phả?",
  "Các dòng sản phẩm xi măng chính là gì?",
  "Xi măng bền Sun phát dùng ở đâu?",
  "Địa chỉ nhà máy và số điện thoại liên hệ?"
];

export function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [conversationId, setConversationId] = useState("");
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isSuggestionsExpanded, setIsSuggestionsExpanded] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Chỉ chạy trên Client (tránh lỗi Hydration Next.js)
  useEffect(() => {
    setIsMounted(true);
    const savedConversationId = localStorage.getItem("campha_chat_conversation_id");
    if (savedConversationId) {
      setConversationId(savedConversationId);
    } else {
      const nextConversationId = crypto.randomUUID();
      localStorage.setItem("campha_chat_conversation_id", nextConversationId);
      setConversationId(nextConversationId);
    }
    const saved = localStorage.getItem("campha_chat_history");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setMessages(parsed);
        // Kiểm tra nếu có lịch sử chat (tin nhắn từ user)
        const hasHistory = parsed.some((msg: Message) => msg.role === "user");
        setIsSuggestionsExpanded(!hasHistory);
      } catch (e) {
        console.error("Lỗi đọc lịch sử chat từ localStorage:", e);
      }
    } else {
      // Tin nhắn chào mừng mặc định
      setMessages([
        {
          id: "welcome",
          role: "assistant",
          content: "Xin chào! Tôi là Trợ lý ảo của Công ty Cổ phần Xi măng Cẩm Phả. Tôi có thể giúp gì cho bạn hôm nay?"
        }
      ]);
      setIsSuggestionsExpanded(true);
    }
  }, []);

  // Lưu lịch sử chat khi có thay đổi
  useEffect(() => {
    if (isMounted && messages.length > 0) {
      localStorage.setItem("campha_chat_history", JSON.stringify(messages));
    }
  }, [messages, isMounted]);

  // Tự động cuộn xuống dưới khi có tin nhắn mới hoặc thay đổi trạng thái gợi ý
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      if (isSuggestionsExpanded) {
        const timer = setTimeout(() => {
          messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [messages, isOpen, isSuggestionsExpanded]);

  if (!isMounted) return null;

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: textToSend.trim()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setIsSuggestionsExpanded(false);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          conversation_id: conversationId,
          messages: [...messages, userMessage].map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        })
      });

      if (!response.ok) {
        throw new Error("Không thể kết nối đến máy chủ AI.");
      }

      if (!response.body) return;

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      // Khởi tạo tin nhắn trống của AI để hứng luồng Stream
      const assistantMessageId = (Date.now() + 1).toString();
      let assistantContent = "";

      setMessages(prev => [
        ...prev,
        {
          id: assistantMessageId,
          role: "assistant",
          content: ""
        }
      ]);

      let isErrorEvent = false;

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          // Flush the decoder
          const finalChunk = decoder.decode();
          if (finalChunk) {
            const lines = finalChunk.split("\n");
            for (const line of lines) {
              const cleanLine = line.replace(/\r$/, "");
              if (cleanLine.startsWith("data: ")) {
                assistantContent += cleanLine.slice(6).replace(/\[NEWLINE\]/g, "\n");
              }
            }
          }
          break;
        }

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n");

        for (const line of lines) {
          const cleanLine = line.replace(/\r$/, "");
          if (cleanLine.startsWith("event: error")) {
            isErrorEvent = true;
          } else if (cleanLine.startsWith("data: ")) {
            const data = cleanLine.slice(6).replace(/\[NEWLINE\]/g, "\n");
            if (isErrorEvent) {
              // Nếu là sự kiện lỗi từ FastAPI
              setMessages(prev => {
                const updated = [...prev];
                const lastIdx = updated.length - 1;
                updated[lastIdx] = {
                  id: assistantMessageId,
                  role: "assistant",
                  content: data,
                  isError: true
                };
                return updated;
              });
              isErrorEvent = false;
            } else {
              // Cập nhật từng từ nhận được
              assistantContent += data;
              setMessages(prev => {
                const updated = [...prev];
                const lastIdx = updated.length - 1;
                updated[lastIdx] = {
                  id: assistantMessageId,
                  role: "assistant",
                  content: assistantContent
                };
                return updated;
              });
            }
          }
        }
      }
    } catch (error: any) {
      console.error("Lỗi khi gửi tin nhắn:", error);
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "assistant",
          content: "❌Vui lòng thử lại.",
          isError: true
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearHistory = () => {
    if (window.confirm("Bạn có chắc chắn muốn xóa lịch sử cuộc trò chuyện này không?")) {
      const nextConversationId = crypto.randomUUID();
      localStorage.removeItem("campha_chat_history");
      localStorage.setItem("campha_chat_conversation_id", nextConversationId);
      setConversationId(nextConversationId);
      setMessages([
        {
          id: "welcome",
          role: "assistant",
          content: "Tôi là Trợ lý ảo của Công ty Cổ phần Xi măng Cẩm Phả. Tôi có thể giúp gì cho bạn hôm nay?"
        }
      ]);
      setIsSuggestionsExpanded(true);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">

      {/* 1. Khung cửa sổ chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-[90vw] sm:w-[380px] h-[500px] bg-white border border-[#ED1C24]/10 shadow-2xl rounded-xl flex flex-col overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="bg-[#ED1C24] text-white px-4 py-3 flex items-center justify-between shadow-md">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-9 h-9 rounded-lg overflow-hidden flex items-center justify-center bg-white/10">
                    <img src="/chatbot_icon.png" alt="Cẩm Phả AI Assistant" className="w-full h-full object-cover" />
                  </div>
                  {/* Trạng thái hoạt động nhấp nháy */}
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border border-white rounded-full animate-pulse" />
                </div>
                <div>
                  <h3 className="font-bold text-sm leading-tight font-display tracking-wide uppercase">Cẩm Phả AI Assistant</h3>
                  <p className="text-[10px] text-white/80">Hỗ trợ khách hàng tự động</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleClearHistory}
                  title="Xóa lịch sử chat"
                  className="p-1.5 hover:bg-white/15 rounded-md transition-all duration-200 text-white/95 hover:text-white"
                >
                  <Trash2 size={16} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Đóng chat"
                  className="p-1.5 hover:bg-white/15 rounded-md transition-all duration-200 text-white/95 hover:text-white"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Vùng hiển thị tin nhắn */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 hide-scrollbar">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2.5 max-w-[85%] ${msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                    }`}
                >
                  {/* Avatar */}
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden border ${msg.role === "user"
                    ? "bg-slate-200 border-slate-300"
                    : "border-[#ED1C24]/10"
                    }`}>
                    {msg.role === "user" ? (
                      <User size={16} className="text-slate-600" />
                    ) : (
                      <img src="/chatbot_icon.png" alt="Cẩm Phả AI" className="w-full h-full object-cover" />
                    )}
                  </div>

                  {/* Nội dung bong bóng */}
                  <div className={`p-3 rounded-xl text-sm leading-relaxed ${msg.role === "user"
                    ? "bg-[#ED1C24] text-white rounded-tr-none shadow-sm"
                    : msg.isError
                      ? "bg-red-50 text-red-700 border border-red-200 rounded-tl-none"
                      : "bg-white text-slate-800 border border-slate-100 rounded-tl-none shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
                    }`}>
                    {/* Render xuống dòng, xử lý gạch đầu dòng và bảng biểu tự động */}
                    {parseMessageContent(msg.content)}
                  </div>
                </motion.div>
              ))}

              {/* Báo hiệu AI đang gõ */}
              {isLoading && messages.length > 0 && messages[messages.length - 1].role === "user" && (
                <div className="flex gap-2.5 max-w-[85%] mr-auto items-center">
                  <div className="w-8 h-8 rounded-lg border border-[#ED1C24]/10 flex items-center justify-center overflow-hidden">
                    <img src="/chatbot_icon.png" alt="Cẩm Phả AI" className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-white border border-slate-100 p-3.5 rounded-xl rounded-tl-none flex items-center gap-1.5 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                  </div>
                </div>
              )}

              {/* Các câu hỏi nhanh (Gợi ý) */}
              {!isLoading && (
                <div className="pt-2 border-t border-slate-100/50 mt-2">
                  <button
                    type="button"
                    onClick={() => setIsSuggestionsExpanded(!isSuggestionsExpanded)}
                    className="flex items-center justify-between w-full text-left focus:outline-none select-none group py-1"
                  >
                    <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider group-hover:text-slate-500 transition-colors">
                      Hỏi nhanh trợ lý ảo:
                    </span>
                    <span className="text-slate-400 group-hover:text-slate-500 transition-colors">
                      {isSuggestionsExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </span>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isSuggestionsExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-1 gap-1.5 pt-1.5 pb-1">
                          {QUICK_QUESTIONS.map((question, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => handleSendMessage(question)}
                              className="text-left w-full text-xs text-slate-600 bg-white hover:bg-red-50/30 border border-slate-200/80 hover:border-[#ED1C24]/30 px-3 py-2 rounded-lg transition-all duration-200 shadow-sm"
                            >
                              {question}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Khung nhập tin nhắn */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(input);
              }}
              className="p-3 border-t border-slate-100 bg-white flex gap-2 items-center"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Nhập câu hỏi của bạn..."
                disabled={isLoading}
                className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#ED1C24]/40 focus:ring-1 focus:ring-[#ED1C24]/20 disabled:bg-slate-50 disabled:text-slate-400"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="p-2 bg-[#ED1C24] hover:bg-[#c8161d] text-white rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center flex-shrink-0"
              >
                {isLoading ? (
                  <RefreshCw size={16} className="animate-spin" />
                ) : (
                  <Send size={16} />
                )}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Nút bong bóng nổi chính */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:shadow-black/15 transition-all duration-200 relative group cursor-pointer overflow-hidden border border-gray-100 bg-white"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="text-viettel-dark"
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="w-full h-full relative"
            >
              <img src="/chatbot_icon.png" alt="Chat" className="w-full h-full object-cover" />
              {/* Chấm đỏ nhấp nháy thông báo sẵn sàng */}
              <span className="absolute top-1 right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full animate-ping" />
              <span className="absolute top-1 right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
