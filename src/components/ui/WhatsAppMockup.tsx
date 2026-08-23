"use client";

import { motion } from "framer-motion";
import { CheckCheck, Phone, Video } from "lucide-react";

const MESSAGES = [
  { from: "them", text: "Oi! Vi o anúncio de vocês, ainda tem horário essa semana?", time: "09:14" },
  { from: "me", text: "Oi! Temos sim 😊 Prefere manhã ou tarde?", time: "09:15" },
  { from: "them", text: "Tarde é melhor pra mim", time: "09:16" },
  { from: "me", text: "Perfeito, tenho quinta às 14h. Confirma?", time: "09:17" },
  { from: "them", text: "Fechado! Obrigada 🙏", time: "09:18" },
] as const;

export default function WhatsAppMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`relative mx-auto w-full max-w-[300px] select-none ${className}`}>
      <div className="rounded-[36px] border-[6px] border-[#111] bg-[#0b141a] shadow-2xl overflow-hidden">
        {/* header */}
        <div className="bg-[#202c33] px-4 pt-4 pb-3 flex items-center gap-3">
          <div className="w-9 h-9 shrink-0 rounded-full bg-[var(--orange-500)] flex items-center justify-center text-[11px] font-semibold text-[#0a0a0a]">
            DLX
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-medium text-white truncate">DLX Digital</p>
            <p className="text-[11px] text-[#8696a0]">online</p>
          </div>
          <Video size={17} strokeWidth={1.75} className="text-[#8696a0]" />
          <Phone size={15} strokeWidth={1.75} className="text-[#8696a0]" />
        </div>

        {/* chat body */}
        <div
          className="flex flex-col gap-2 px-3 py-4"
          style={{
            background:
              "repeating-linear-gradient(45deg, #0b141a, #0b141a 12px, #0c1519 12px, #0c1519 24px)",
            minHeight: 360,
          }}
        >
          {MESSAGES.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{
                delay: i * 0.35,
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`max-w-[80%] rounded-xl px-3 py-2 text-[13px] leading-snug ${
                m.from === "me"
                  ? "self-end bg-[#005c4b] text-white rounded-br-[4px]"
                  : "self-start bg-[#202c33] text-white rounded-bl-[4px]"
              }`}
            >
              {m.text}
              <span className="mt-1 flex items-center justify-end gap-1 text-[10px] text-white/50">
                {m.time}
                {m.from === "me" && <CheckCheck size={13} className="text-[#53bdeb]" />}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
