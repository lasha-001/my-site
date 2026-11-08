"use client";
import { useState } from "react";

const PHONE = "+995000000000";

const T = {
  ka: {
    menu: ["ელექტროობა", "Smart Home", "მაღაზია"],
    tag: "ელექტროობა • ავტომატიზაცია • ჭკვიანი სახლი",
    h1: "შენი სახლი. შენი კონტროლი.",
    p: "ელექტროგაყვანილობა, ელექტროფარები და ჭკვიანი სახლის სისტემები — დაგეგმვიდან მონტაჟამდე.",
    cta: "მოითხოვე კონსულტაცია",
    cards: [
      ["⚡", "ელექტრომონტაჟი", "გაყვანილობა, ფარები, დაპროექტება"],
      ["🏠", "ჭკვიანი სახლი", "ავტომატიზაცია, სენსორები, დისტანციური კონტროლი"],
      ["🛍️", "მაღაზია / პროდუქტები", "შეკვეთით ჩამოსატანი ან ადგილზე არსებული ჭკვიანი მოწყობილობები"],
    ],
  },
  en: {
    menu: ["Electrical", "Smart Home", "Shop"],
    tag: "Electrical • Automation • Smart Home",
    h1: "Your home. Your control.",
    p: "Electrical wiring, distribution boards and smart home systems — from planning to installation.",
    cta: "Request a consultation",
    cards: [
      ["⚡", "Electrical installation", "Wiring, panels, project design"],
      ["🏠", "Smart Home", "Automation, sensors, remote control"],
      ["🛍️", "Shop / Products", "Smart devices in stock or ordered on request"],
    ],
  },
  ru: {
    menu: ["Электрика", "Умный дом", "Магазин"],
    tag: "Электрика • Автоматизация • Умный дом",
    h1: "Ваш дом. Ваш контроль.",
    p: "Электропроводка, электрощиты и системы умного дома — от проектирования до монтажа.",
    cta: "Заказать консультацию",
    cards: [
      ["⚡", "Электромонтаж", "Проводка, щиты, проектирование"],
      ["🏠", "Умный дом", "Автоматизация, датчики, удалённое управление"],
      ["🛍️", "Магазин / Товары", "Устройства в наличии или под заказ"],
    ],
  },
};

type Lang = keyof typeof T;

export default function Home() {
  const [lang, setLang] = useState<Lang>("ka");
  const [open, setOpen] = useState(false);
  const t = T[lang];

  return (
    <main className="min-h-screen bg-[#0f1a2b] text-white">
      <header className="sticky top-0 z-10 bg-[#0f1a2b]/95 backdrop-blur border-b border-white/10">
        <div className="mx-auto max-w-5xl flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2 text-xl font-bold">
            <span className="text-yellow-400">⚡</span> AI HOME
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-1 text-xs">
              {(["ka", "en", "ru"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-1 rounded ${
                    lang === l ? "bg-yellow-400 text-black" : "bg-white/10"
                  }`}
                >
                  {l === "ka" ? "GE" : l.toUpperCase()}
                </button>
              ))}
            </div>
            <button onClick={() => setOpen(!open)} className="text-2xl" aria-label="menu">
              ☰
            </button>
          </div>
        </div>
        {open && (
          <nav className="mx-auto max-w-5xl px-4 pb-3 flex flex-col gap-2">
            {t.menu.map((m, i) => (
              <a key={i} href={`#c${i}`} onClick={() => setOpen(false)} className="py-1 text-white/80">
                {m}
              </a>
            ))}
          </nav>
        )}
      </header>

      <section className="mx-auto max-w-5xl px-4 pt-8 pb-10">
        <p className="text-sm text-white/60">{t.tag}</p>
        <h1 className="mt-4 text-4xl sm:text-6xl font-bold leading-tight">{t.h1}</h1>
        <p className="mt-4 text-lg text-white/70 max-w-xl">{t.p}</p>
        <a
          href={`tel:${PHONE}`}
          className="mt-6 block sm:inline-block text-center rounded-xl bg-yellow-400 px-6 py-4 font-semibold text-black"
        >
          {t.cta}
        </a>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16 grid gap-4 sm:grid-cols-3">
        {t.cards.map((c, i) => (
          <div key={i} id={`c${i}`} className="rounded-2xl bg-white/5 p-5 border border-white/10">
            <div className="text-3xl">{c[0]}</div>
            <h2 className="mt-3 text-xl font-semibold">{c[1]}</h2>
            <p className="mt-2 text-white/70">{c[2]}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
