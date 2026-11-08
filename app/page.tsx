"use client";
import { useState } from "react";

const PHONE = "+995000000000";

const T = {
  ka: {
    menu: ["ელექტრომონტაჟი", "ჭკვიანი სახლი", "მაღაზია / პროდუქტები"],
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
    menu: ["Electrical", "Smart Home", "Shop / Products"],
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
    menu: ["Электромонтаж", "Умный дом", "Магазин / Товары"],
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
const FLAGS: Record<Lang, string> = { ka: "🇬🇪 GE", en: "🇬🇧 EN", ru: "🇷🇺 RU" };

export default function Home() {
  const [lang, setLang] = useState<Lang>("ka");
  const [open, setOpen] = useState(false);
  const t = T[lang];

  return (
    <main>
      <header className="header">
        <div className="wrap">
          <div className="bar">
            <div className="logo">⚡ AI HOME</div>
            <div className="right">
              <div className="lang">
                {(["ka", "en", "ru"] as Lang[]).map((l) => (
                  <button key={l} className={lang === l ? "on" : ""} onClick={() => setLang(l)}>
                    {FLAGS[l]}
                  </button>
                ))}
              </div>
              <button className="burger" onClick={() => setOpen(!open)} aria-label="menu">☰</button>
            </div>
          </div>
          {open && (
            <nav className="nav">
              {t.menu.map((m, i) => (
                <a key={i} href={`#c${i}`} onClick={() => setOpen(false)}>{m}</a>
              ))}
            </nav>
          )}
        </div>
      </header>

      <div className="wrap">
        <p className="tag">{t.tag}</p>
        <img className="hero" src="/hero.jpg" alt="AI HOME" />
        <h1>{t.h1}</h1>
        <p className="lead">{t.p}</p>

        <div style={{ marginTop: 8 }}>
          {t.cards.map((c, i) => (
            <div key={i} id={`c${i}`} className="card">
              <div className="icon">{c[0]}</div>
              <div>
                <h2>{c[1]}</h2>
                <p>{c[2]}</p>
              </div>
            </div>
          ))}
        </div>

        <a className="cta" href={`tel:${PHONE}`}>→ {t.cta}</a>
      </div>
    </main>
  );
}
