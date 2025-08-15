import { useEffect, useRef, useState } from "react";

/* ---------------- Realismus-Helfer ---------------- */

// Name aus "ich bin/heiße ..." herausziehen
function extractName(t) {
  const m = t.toLowerCase().match(/(?:ich\s+(?:bin|hei[ßs]e)\s+)([a-zäöüß\-]+)/i);
  return m ? m[1].replace(/^[a-z]/, c => c.toUpperCase()) : null;
}

// Tageszeit (für Tonalität)
function daypart() {
  const h = new Date().getHours();
  if (h < 5) return "späte Nacht";
  if (h < 11) return "Morgen";
  if (h < 17) return "Nachmittag";
  if (h < 22) return "Abend";
  return "späte Nacht";
}

// kleine Typos & weiche Sprechweise
function soften(text) {
  let out = text;
  // ab und zu "…" am Satzende für weicheres Ausklingen
  if (Math.random() < 0.35) out = out.replace(/([.!?])?$/, " …");
  // seltene Füllwörter
  if (Math.random() < 0.25) out = out.replace(/^/, "Hm, ");
  return out;
}

// Antwortgenerator (kontextsensitiv, DACH-Ton)
function makeReply(userText, state) {
  const t = userText.toLowerCase();
  const p = [];

  if (state.name && Math.random() < 0.7) p.push(`Okay, ${state.name}, ich bin bei dir.`);
  if (t.includes("einsam") || t.includes("allein"))
    p.push("Dieses Einsamkeitsgefühl zieht – ich bleib hier bei dir.");
  if (t.includes("arbeit") || t.includes("stress"))
    p.push("Arbeit kann echt zehren … wo spürst du den Stress am meisten?");
  if (t.includes("schlaf") || t.includes("nacht"))
    p.push("Wenn’s im Kopf rattert, wird Schlaf schwierig – was dreht sich gerade?");
  if (t.includes("sport") || t.includes("gym") || t.includes("laufen"))
    p.push("Bewegung hilft oft, den Kopf zu sortieren – was macht dir daran Spaß?");

  const generic = [
    "Danke, dass du das teilst.",
    "Mag deine Ehrlichkeit – macht’s leicht, mit dir zu schreiben.",
    "Wenn du’s in einem Satz zusammenfasst: Was wünschst du dir gerade?",
    "Lass uns das ordnen: Was war heute trotz allem ein kleiner Lichtblick?",
  ];
  p.push(generic[Math.floor(Math.random() * generic.length)]);

  let out = p.join(" ");
  out = soften(out);
  return out;
}

/**
 * Live-Tippen mit:
 * - variabler Tippgeschwindigkeit je Zeichen
 * - Mikropausen nach Wort/Komma/Punkt
 * - echten Korrekturen (Backspace-Animation)
 */
async function streamWrite(setDraft, text) {
  // 0–1 Korrekturen planen (Wort vertippen → löschen → korrekt weitertippen)
  const doMistake = Math.random() < 0.55; // ~50% der Antworten
  let mistakeAt = -1, mistakeLen = 0, mistakeFix = "";

  if (doMistake) {
    // Stelle für Fehler wählen – nicht zu früh, nicht zu spät
    const words = text.split(" ");
    if (words.length > 4) {
      const idx = Math.floor(2 + Math.random() * Math.min(6, words.length - 2));
      const word = words[idx];
      if (word && word.length > 4) {
        const startInWord = 1 + Math.floor(Math.random() * Math.max(1, word.length - 3));
        const wrong = word.slice(0, startInWord) + word[startInWord] + word[startInWord - 1] + word.slice(startInWord + 1);
        words[idx] = wrong;
        const untilWrong = words.slice(0, idx + 1).join(" ");
        mistakeAt = untilWrong.length - (word.length - wrong.length); // grob
        mistakeLen = 2; // zwei vertauschte Buchstaben
        mistakeFix = word;
      }
    }
  }

  let draft = "";
  for (let i = 0; i < text.length; i++) {
    draft += text[i];
    setDraft(draft);

    // Grundtempo (ms/Zeichen) + Jitter
    const base = 26 + Math.random() * 28; // 26–54ms
    const jitter = (Math.random() - 0.5) * 16; // ±16ms
    let delay = Math.max(10, base + jitter);

    // Mikropausen
    const ch = text[i];
    if (ch === " ") {
      if (Math.random() < 0.18) delay += 80 + Math.random() * 140;
    } else if (/[,.!?]/.test(ch)) {
      delay += 160 + Math.random() * 220;
    }

    await new Promise(r => setTimeout(r, delay));

    // Fehler/Korrektur ausspielen
    if (doMistake && i === mistakeAt) {
      // kleine Denkpause
      await new Promise(r => setTimeout(r, 220 + Math.random() * 220));
      // Backspace-Animation
      const steps = 1 + Math.floor(1 + Math.random() * 2); // 1–3 Zeichen löschen
      for (let s = 0; s < steps; s++) {
        draft = draft.slice(0, -1);
        setDraft(draft);
        await new Promise(r => setTimeout(r, 40 + Math.random() * 70));
      }
      // optional "*ups"/"*meinte" andeuten
      if (Math.random() < 0.6) {
        const hint = " *meinte";
        for (let j = 0; j < hint.length; j++) {
          draft += hint[j];
          setDraft(draft);
          await new Promise(r => setTimeout(r, 18 + Math.random() * 26));
        }
      }
      // kurze Pause, dann korrekt weiter
      await new Promise(r => setTimeout(r, 180 + Math.random() * 260));
    }
  }
}

const OPENERS = [
  () => `Hey, gut dass du da bist. ${daypart()} und ich bin wach – wie geht’s dir gerade?`,
  () => `Ich hör dir zu. Was hat dich heute beschäftigt?`,
  () => `Erzähl mir was Kleines über dich, das kaum jemand weiß 🙂`,
];

/* ---------------- Komponente ---------------- */

export default function ChatDemo({ onPaywall }) {
  const [messages, setMessages] = useState([
    { role: "bot", text: OPENERS[Math.floor(Math.random() * OPENERS.length)]() }
  ]);
  const [input, setInput] = useState("");
  const [userCount, setUserCount] = useState(0);
  const [typing, setTyping] = useState(false);
  const [draft, setDraft] = useState(""); // Live-Stream
  const [state, setState] = useState({ name: null });

  const ref = useRef(null);
  useEffect(() => {
    ref.current?.scrollTo({ top: ref.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing, draft]);

  async function send() {
    const text = input.trim();
    if (!text) return;

    const maybe = extractName(text);
    if (maybe && !state.name) setState(s => ({ ...s, name: maybe }));

    const next = userCount + 1;
    setMessages(m => [...m, { role: "user", text }]);
    setInput("");
    setUserCount(next);

    // Paywall nach 5 User-Nachrichten
    if (next >= 5) {
      setTyping(true);
      await new Promise(r => setTimeout(r, 900 + Math.random() * 700)); // kurze tipp-Simulation
      setTyping(false);
      onPaywall?.();
      return;
    }

    // Start-Delay + "Denken"
    setTyping(true);
    const startDelay = 420 + Math.random() * 680;   // 0.42–1.1s
    const thinkDelay = 700 + Math.random() * 1200;  // 0.7–1.9s
    await new Promise(r => setTimeout(r, startDelay + thinkDelay));

    // Antwort erstellen
    const reply = makeReply(text, state);

    // Live tippen
    setDraft("");
    await streamWrite(setDraft, reply);

    // finalisieren
    setMessages(m => [...m, { role: "bot", text: reply }]);
    setTyping(false);
    setDraft("");
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-soft h-[420px] flex flex-col">
      <div ref={ref} className="flex-1 overflow-auto p-4 space-y-3">
        {messages.map((m, i) => (
          <div key={i} className={m.role === "bot" ? "text-gray-800" : "text-gray-700 text-right"}>
            <span className={
              m.role === "bot"
                ? "inline-block px-3 py-2 rounded-2xl bg-brand-50 border border-brand-100"
                : "inline-block px-3 py-2 rounded-2xl bg-gray-100 border border-gray-200"
            }>
              {m.text}
            </span>
          </div>
        ))}

        {/* Tipp-Indikator */}
        {typing && !draft && (
          <div className="text-gray-800">
            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl bg-brand-50 border border-brand-100">
              <span className="inline-flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-pulse" />
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-pulse [animation-delay:120ms]" />
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-pulse [animation-delay:240ms]" />
              </span>
              <span className="text-xs text-gray-500">tippt …</span>
            </span>
          </div>
        )}

        {/* Live-Streaming-Text */}
        {draft && (
          <div className="text-gray-800">
            <span className="inline-block px-3 py-2 rounded-2xl bg-brand-50 border border-brand-100">
              {draft}
            </span>
          </div>
        )}
      </div>

      <div className="border-t border-gray-200 p-3 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Schreib hier …"
          className="flex-1 px-3 py-2 rounded-xl border border-gray-300 focus:outline-none"
        />
        <button onClick={send} className="px-4 py-2 rounded-xl bg-brand-600 text-white hover:bg-brand-700">
          Senden
        </button>
      </div>
    </div>
  );
}
