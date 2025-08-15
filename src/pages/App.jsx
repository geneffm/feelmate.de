import React, { useState } from "react";
import ChatDemo from "../components/ChatDemo";

export default function App() {
  const [openTrial, setOpenTrial] = useState(false);
  const [openCheckout, setOpenCheckout] = useState(false);

  return (
    <main className="font-sans text-gray-900">
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          {/* Tastevolles Hero-Bild */}
          <img
            src="https://picsum.photos/seed/warm-portrait-2/1600/900"
            alt="Stilvolle Frau lächelt"
            className="w-full h-full object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-12 grid gap-8 md:grid-cols-2 items-end">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Schluss mit Schweigen — jemand ist nur für dich da.
            </h1>
            <p className="mt-4 text-lg text-gray-800">
              Echte Aufmerksamkeit. Keine komplizierten Regeln, keine peinlichen
              Matches. Schreib einfach — Tag und Nacht.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={() => setOpenTrial(true)}
                className="px-5 py-3 rounded-2xl bg-brand-600 text-white font-medium shadow-soft hover:bg-brand-700"
              >
                5 Nachrichten gratis
              </button>
              <a
                href="#preise"
                className="px-5 py-3 rounded-2xl border border-gray-300 font-medium hover:bg-gray-100"
              >
                Mitglied werden
              </a>
            </div>
            <p className="mt-3 text-xs text-gray-600">
              Diskret & unkompliziert. Du entscheidest, wie viel du teilen
              willst.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white shadow-soft p-4">
            <ChatDemo onPaywall={() => setOpenCheckout(true)} />
          </div>
        </div>
      </section>

      {/* BILDER-COLLAGE (abwechslungsreich, stilvoll) */}
      <section id="bilder" className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-4">
          <img
            src="https://picsum.photos/seed/cafe-portrait/800/600"
            alt="Café – nahbar & freundlich"
            className="rounded-2xl object-cover w-full h-64 md:h-56"
          />
          <img
            src="https://picsum.photos/seed/evening-milf/800/600"
            alt="Abendsonne – elegant & feminin"
            className="rounded-2xl object-cover w-full h-64 md:h-56"
          />
          <img
            src="https://picsum.photos/seed/indoor-soft/800/600"
            alt="Indoor – warm & gemütlich"
            className="rounded-2xl object-cover w-full h-64 md:h-56"
          />
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Hinweis: Symbolbilder – finale Fotos folgen. Stil: warm, respektvoll,
          stilvoll.
        </p>
      </section>

      {/* WARUM (Pain Points) */}
      <section id="warum" className="max-w-6xl mx-auto px-6 pb-4">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl border border-gray-200 shadow-soft bg-white">
            <h3 className="font-semibold">Du bist nicht unsichtbar</h3>
            <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-1">
              <li>Jemand, der sich wirklich für dich interessiert</li>
              <li>Keine Ablehnung, kein Ghosting</li>
            </ul>
          </div>
          <div className="p-6 rounded-3xl border border-gray-200 shadow-soft bg-white">
            <h3 className="font-semibold">Sofort, wenn’s dir wichtig ist</h3>
            <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-1">
              <li>Ohne Wartezeiten – auch spät nachts</li>
              <li>Dein fester Begleiter mit Namen & Profil</li>
            </ul>
          </div>
          <div className="p-6 rounded-3xl border border-gray-200 shadow-soft bg-white">
            <h3 className="font-semibold">Einfach & fair</h3>
            <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-1">
              <li>5 kostenlose Nachrichten zum Start</li>
              <li>Guthaben oder Mitgliedschaft – ohne Fallen</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SO FUNKTIONIERT’S */}
      <section id="so" className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              n: "01",
              t: "Starten",
              d: "Ohne Registrierung testen: 5 Gratis-Nachrichten.",
            },
            {
              n: "02",
              t: "Anpassen",
              d: "Wähle Ton & Themen – locker, humorvoll, motivierend.",
            },
            {
              n: "03",
              t: "Dranbleiben",
              d: "Mit Guthaben oder Mitgliedschaft unbegrenzt weiterschreiben.",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl border border-gray-200 bg-white shadow-soft"
            >
              <div className="text-xs font-mono text-gray-500">{s.n}</div>
              <div className="mt-2 font-semibold">{s.t}</div>
              <div className="mt-2 text-sm text-gray-600">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS (inline, kein extra Import nötig) */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold">Was Nutzer sagen</h2>
          <p className="text-sm text-gray-600 mt-1">
            Beispielstimmen – echte Erfahrungsberichte folgen.
          </p>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Markus, 42",
                text:
                  "Endlich jemand, der wirklich antwortet – ohne Spielchen. Schreib fast jeden Abend kurz rein.",
                rating: 5,
              },
              {
                name: "Thomas, 37",
                text:
                  "Ich fühl mich seit Wochen weniger allein. Es tut gut, wenn dich jemand ernst nimmt.",
                rating: 5,
              },
              {
                name: "Alex, 51",
                text:
                  "Unkompliziert und diskret. Genau richtig nach einem langen Arbeitstag.",
                rating: 4,
              },
            ].map((r, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl border border-gray-200 bg-white shadow-soft"
              >
                <div className="flex items-center gap-2">
                  <div
                    aria-label={`${r.rating} von 5 Sternen`}
                    className="text-yellow-500"
                  >
                    {"★".repeat(r.rating)}
                    {"☆".repeat(5 - r.rating)}
                  </div>
                  <div className="text-xs text-gray-500">{r.rating}/5</div>
                </div>
                <p className="mt-3 text-sm text-gray-700">“{r.text}”</p>
                <div className="mt-2 text-xs text-gray-500">{r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREISE */}
      <section id="preise" className="border-y border-gray-200 bg-brand-50">
        <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl border border-gray-200 bg-white shadow-soft">
            <div className="text-xs uppercase tracking-widest text-gray-500">
              Guthaben
            </div>
            <h3 className="mt-1 text-2xl font-semibold">
              100 Einheiten{" "}
              <span className="text-base font-normal text-gray-500">— 9,99 €</span>
            </h3>
            <ul className="mt-4 text-sm text-gray-600 list-disc pl-5 space-y-1">
              <li>Flexibel für Nachrichten & Extras</li>
              <li>Kein Abo – einmalig kaufen</li>
              <li>Ideal zum Einstieg</li>
            </ul>
            <button
              onClick={() => setOpenCheckout(true)}
              className="mt-5 inline-flex px-4 py-2 rounded-xl bg-brand-600 text-white text-sm font-medium hover:bg-brand-700"
            >
              Jetzt Guthaben kaufen
            </button>
          </div>

          <div className="p-6 rounded-3xl border-2 border-brand-600 bg-white shadow-soft">
            <div className="text-xs uppercase tracking-widest text-gray-500">
              Beliebt
            </div>
            <h3 className="mt-1 text-2xl font-semibold">
              Mitgliedschaft{" "}
              <span className="text-base font-normal text-gray-500">
                — 29,99 €/Monat
              </span>
            </h3>
            <ul className="mt-4 text-sm text-gray-600 list-disc pl-5 space-y-1">
              <li>Unlimitierter Chat (Fair-Use)</li>
              <li>Priorisierte Antworten</li>
              <li>Exklusive Themenräume</li>
            </ul>
            <button
              onClick={() => setOpenCheckout(true)}
              className="mt-5 inline-flex px-4 py-2 rounded-xl bg-brand-600 text-white text-sm font-medium hover:bg-brand-700"
            >
              Mitglied werden
            </button>
          </div>
        </div>
      </section>

      {/* MODALS */}
      {openTrial && (
        <div
          className="fixed inset-0 bg-black/40 grid place-items-center p-4"
          role="dialog"
          aria-modal
        >
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-soft">
            <h3 className="text-lg font-semibold">Gratis testen</h3>
            <p className="mt-2 text-sm text-gray-600">
              Erlebe 5 Nachrichten kostenlos. Danach kannst du entscheiden, wie
              du weitermachen willst.
            </p>
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setOpenTrial(false)}
                className="px-4 py-2 rounded-xl border border-gray-300"
              >
                Schließen
              </button>
              <a
                href="#preise"
                className="px-4 py-2 rounded-xl bg-brand-600 text-white"
              >
                Zu den Preisen
              </a>
            </div>
          </div>
        </div>
      )}

      {openCheckout && (
        <div
          className="fixed inset-0 bg-black/40 grid place-items-center p-4"
          role="dialog"
          aria-modal
        >
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-soft">
            <h3 className="text-lg font-semibold">Kauf
