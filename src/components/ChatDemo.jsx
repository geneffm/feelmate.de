import { useEffect, useRef, useState } from "react";

// Name erkennen ("ich bin/heiße ...")
function extractName(t) {
  const m = t.toLowerCase().match(/(ich (bin|heiße|heisse)\s+([a-zäöüß\-]+))/i);
  return m ? m[3].replace(/^[a-z]/, c => c.toUpperCase()) : null;
}

// leichte Tippfehler & zögernde Pausen
function humanize(text) {
  const typos = [
    { from: "ich", to: "cih" },
    { from: "und", to: "udn" },
    { from: "das", to: "dsa" },
  ];
  let out = text;
  if (Math.random() < 0.25) {
    const pick = typos[Math.floor(Math.random() * typos.length)];
    out = out.replace(new RegExp(`\\b${pick.from}\\b`, "i"), pick.to);
  }
  if (Math.random() < 0.35) out = out.replace(/([,.!?])?$/, " …");
  return out;
}

function TypingDots() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI(x => (x + 1) % 3), 450);
    return () => clearInterval(id);
  }, []);
  return (
    <span aria-live="polite" className="inline-flex gap-1">
      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 opacity-70" />
      <span className={`w-1.5 h-1.5 rounded-full bg-gray-400 ${i>=1?'opacity-70':'opacity-30'}`} />
      <span className={`w-1.5 h-1.5 rounded-full bg-gray-400 ${i>=2?'opacity-70':'opacity-30'}`} />
    </span>
  );
}

const OPENERS = [
  "Hey, gut dass du da bist. Wie geht’s dir gerade?",
  "Ich bin noch wach und hör dir zu – was war heute los bei dir?",
  "Erzähl mir was Kleines, das kaum jemand weiß 🙂",
];

function makeReply(userText, state) {
  const base = [
    "Versteh ich. Danke, dass du offen bist.",
    "Klingt nach einem vollen Tag – magst du mir mehr erzählen?",
    "Ich bin ganz Ohr. Was wünschst du dir gerade?",
    "Lass uns das sortieren: Was war der beste Moment heute?",
    "Mag deine Ehrlichkeit. Das macht’s leicht, mit dir zu schreiben.",
  ];
  const name = state.name;
  if (name && Math.random() < 0.6) base.unshift(`Okay, ${name}, ich bin bei dir.`);

  const t = userText.toLowerCase();
  if (t.includes("einsam") || t.includes("allein")) base.unshift("Dieses Einsamkeitsgefühl ist hart – ich bleib hier bei dir.");
  if (t.includes("arbeit") || t.includes("stress")) base.unshift("Arbeit kann so ziehen … wo genau merkst du den Stress am meisten?");
  if (t.includes("schlafen") || t.includes("nacht")) base.unshift("Schlaf ist schwierig, wenn viel im Kopf ist – was dreht sich gerade?");

  const pick = base[Math.floor(Math.random() * base.length)];
  return humanize(pick);
}

export default function ChatDemo({ onPaywall }) {
  const [messages, setMessages] = useState([{ role: "bot", text: OPENERS[Math.floor(Math.random() * OPENERS.length)] }]);
  const [input, setInput] = useState("");
  const [userCount, setUserCount] = useState(0);
  const [typing, setTyping] = useState(false);
  const [state, setState] = useState({ name: null });

  const ref = useRef(null);
  useEffect(() => { ref.current?.scrollTo({ top: ref.current.scrollHeight, behavior: "smooth" }); }, [messages, typing]);

  function send() {
    const text = input.trim();
    if (!text) return;

    const maybeName = extractName(text);
    if (maybeName && !state.name) setState(s => ({ ...s, name: maybeName }));

    const nextUserCount = userCount + 1;
    setMessages(m => [...m, { role: "user", text }]);
    setInput("");
    setUserCount(nextUserCount);

    // Paywall nach 5 User-Nachrichten
    if (nextUserCount >= 5) {
      setTyping(true);
      const payDelay = 1000 + Math.random() * 500;
      setTimeout(() => { setTyping(false); onPaywall?.(); }, payDelay);
      return;
    }

    // realistische Latenz + Tippzeit
    const startDelay = 600 + Math.random() * 900;
    const thinkDelay = 800 + Math.random() * 1200;
    setTyping(true);
    setTimeout(() => {
      const reply = makeReply(text, state);
      const typeTime = Math.min(2800, 600 + reply.length * 25);
      setTimeout(() => { setTyping(false); setMessages(m => [...m, { role: "bot", text: reply }]); }, typeTime);
    }, startDelay + thinkDelay);
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-soft h-[420px] flex flex-col">
      <div ref={ref} className="flex-1 overflow-auto p-4 space-y-3">
        {messages.map((m, i) => (
          <div key={i} className={m.role === "bot" ? "text-gray-800" : "text-gray-700 text-right"}>
            <span className={m.role === "bot"
              ? "inline-block px-3 py-2 rounded-2xl bg-brand-50 border border-brand-100"
              : "inline-block px-3 py-2 rounded-2xl bg-gray-100 border border-gray-200"}>
              {m.text}
            </span>
          </div>
        ))}
        {typing && (
          <div className="text-gray-800">
            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl bg-brand-50 border border-brand-100">
              <TypingDots /> <span className="text-xs text-gray-500">tippt …</span>
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

    </div>
  )
}
