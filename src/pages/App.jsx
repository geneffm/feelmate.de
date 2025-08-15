import React, { useState } from "react";

export default function App() {
  const [openTrial, setOpenTrial] = useState(false);
  const [openCheckout, setOpenCheckout] = useState(false);

  return (
    <main className="font-sans text-gray-900">
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/hero.jpg"
            alt="Junge Frau lächelt und schreibt am Handy"
            className="w-full h-full object-cover object-center opacity-90"
            onError={(e)=>{e.currentTarget.src='/images/hero-placeholder.svg'}}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16 grid gap-8 md:grid-cols-2 items-end">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Jemand, der dir wirklich zuhört – jederzeit.
            </h1>
            <p className="mt-4 text-lg text-gray-800">
              Keine Matches, kein Smalltalk-Zwang. Schreib einfach los – diskret,
              wertschätzend und auf deiner Wellenlänge.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={() => setOpenTrial(true)}
                className="px-5 py-3 rounded-2xl bg-brand-600 text-white font-medium shadow-soft hover:bg-brand-700"
              >
                Kostenlos starten
              </button>
              <a
                href="#so"
                className="px-5 py-3 rounded-2xl border border-gray-300 font-medium hover:bg-gray-100"
              >
                So funktioniert’s
              </a>
            </div>
            <p className="mt-3 text-xs text-gray-600">
              Transparent & fair. Keine Treffen. Details siehe AGB & Datenschutz.
            </p>
          </div>
        </div>
      </section>

      {/* KURZE ERKLÄRUNG */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-semibold">Worum geht’s bei feelmate?</h2>
          <p className="mt-3 text-gray-700">
            feelmate ist ein begleitender Chat-Service für deinen Alltag. Du bekommst
            ein festes Gegenüber mit Profil und Stil – zum Entladen, Sortieren und
            Einfach-mal-nicht-allein-sein. Teile des Dienstes sind automatisiert;
            der Stil bleibt menschlich, respektvoll und unaufdringlich.
          </p>
        </div>
      </section>

      {/* GALERIE */}
      <section id="bilder" className="max-w-6xl mx-auto px-6 pb-2">
        <div className="grid md:grid-cols-3 gap-4">
          <img src="/images/cafe.jpg" alt="Frau im Café mit Handy"
               onError={(e)=>{e.currentTarget.src='/images/placeholder.svg'}}
               className="rounded-2xl object-cover w-full h-64 md:h-56" />
          <img src="/images/laptop.jpg" alt="Frau am Laptop im Co-Working"
               onError={(e)=>{e.currentTarget.src='/images/placeholder.svg'}}
               className="rounded-2xl object-cover w-full h-64 md:h-56" />
          <img src="/images/wine.jpg" alt="Reifere Frau zuhause – warmes Licht"
               onError={(e)=>{e.currentTarget.src='/images/placeholder.svg'}}
               className="rounded-2xl object-cover w-full h-64 md:h-56" />
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Symbolische Szenen – der Stil auf feelmate ist warm, diskret und respektvoll.
        </p>
      </section>

      {/* VORTEILE */}
      <section id="warum" className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl border border-gray-200 shadow-soft bg-white">
            <h3 className="font-semibold">Kein Warten, kein Ghosting</h3>
            <p className="mt-2 text-sm text-gray-700">
              Antworten, wenn du sie brauchst – auch spät abends. Ohne Spielchen.
            </p>
          </div>
          <div className="p-6 rounded-3xl border border-gray-200 shadow-soft bg-white">
            <h3 className="font-semibold">Natürlich & respektvoll</h3>
            <p className="mt-2 text-sm text-gray-700">
              Ein fester Chat-Stil, der zu dir passt: locker, humorvoll oder ruhig.
            </p>
          </div>
          <div className="p-6 rounded-3xl border border-gray-200 shadow-soft bg-white">
            <h3 className="font-semibold">Einfach & fair</h3>
            <p className="mt-2 text-sm text-gray-700">
              Transparente Preise. 5 Nachrichten zum Start – ohne Abozwang.
            </p>
          </div>
        </div>
      </section>

      {/* SO FUNKTIONIERT’S */}
      <section id="so" className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { n: "01", t: "Losschreiben", d: "Kostenlos testen – ein paar Nachrichten, um ein Gefühl zu bekommen." },
            { n: "02", t: "Anpassen", d: "Ton & Themen wählen. Dein Gegenüber bleibt konsistent und merkt sich Wichtiges." },
            { n: "03", t: "Dranbleiben", d: "Mit Guthaben oder Mitgliedschaft entspannt weiterschreiben – fair & flexibel." }
          ].map((s, i) => (
            <div key={i} className="p-6 rounded-3xl border border-gray-200 bg-white shadow-soft">
              <div className="text-xs font-mono text-gray-500">{s.n}</div>
              <div className="mt-2 font-semibold">{s.t}</div>
              <div className="mt-2 text-sm text-gray-600">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* EXTRA-BILD */}
      <section className="max-w-6xl mx-auto px-6 pb-8">
        <img src="/images/sofa.jpg" alt="Frau entspannt auf dem Sofa mit Smartphone"
             onError={(e)=>{e.currentTarget.src='/images/placeholder-wide.svg'}}
             className="rounded-2xl object-cover w-full h-64 md:h-72" />
      </section>

      {/* PREISE */}
      <section id="preise" className="border-y border-gray-200 bg-brand-50">
        <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl border border-gray-200 bg-white shadow-soft">
            <div className="text-xs uppercase tracking-widest text-gray-500">Guthaben</div>
            <h3 className="mt-1 text-2xl font-semibold">
              100 Einheiten <span className="text-base font-normal text-gray-500">— 9,99 €</span>
            </h3>
            <ul className="mt-4 text-sm text-gray-600 list-disc pl-5 space-y-1">
              <li>Flexibel für Nachrichten & kleine Extras</li>
              <li>Kein Abo – einmalig kaufen</li>
              <li>Ideal zum Einstieg</li>
            </ul>
            <button
              onClick={() => setOpenCheckout(true)}
              className="mt-5 inline-flex px-4 py-2 rounded-xl bg-brand-600 text-white text-sm font-medium hover:bg-brand-700"
            >
              Guthaben kaufen
            </button>
          </div>

          <div className="p-6 rounded-3xl border-2 border-brand-600 bg-white shadow-soft">
            <div className="text-xs uppercase tracking-widest text-gray-500">Mitgliedschaft</div>
            <h3 className="mt-1 text-2xl font-semibold">
              Monatlich <span className="text-base font-normal text-gray-500">— 29,99 €</span>
            </h3>
            <ul className="mt-4 text-sm text-gray-600 list-disc pl-5 space-y-1">
              <li>Unlimitierter Chat (Fair-Use)</li>
              <li>Priorisierte Antworten</li>
              <li>Seriöse Community-Standards</li>
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

      {/* REVIEWS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold">Erfahrungen anderer</h2>
        <p className="text-sm text-gray-600 mt-1">Auszüge aus echten Nutzerstimmen – Namen geändert.</p>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {[
            { name: "Markus, 41 · Stuttgart", text: "Ich war skeptisch. Aber es tut gut, abends nicht ins Leere zu schreiben. Ruhig, freundlich, ohne Druck." },
            { name: "Anna, 29 · Hamburg", text: "Ich mag den Ton: wertschätzend, nicht kitschig. Und ja – es hilft, den Kopf zu sortieren." },
            { name: "Thomas, 37 · München", text: "Wenn’s im Job brennt, schreib ich kurz rein. Kurze, klare Antworten – genau richtig." },
            { name: "Sabine, 35 · Köln", text: "Fühlt sich an wie jemand, der wirklich zuhört. Diskret, unkompliziert, fair." },
          ].map((r, i) => (
            <div key={i} className="p-6 rounded-3xl border border-gray-200 bg-white shadow-soft flex gap-4">
              <div>
                <div className="font-medium">{r.name}</div>
                <p className="mt-1 text-sm text-gray-700">“{r.text}”</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={() => setOpenTrial(true)}
            className="px-5 py-3 rounded-2xl bg-brand-600 text-white font-medium shadow-soft hover:bg-brand-700"
          >
            Kostenlos testen
          </button>
          <a
            href="#preise"
            className="px-5 py-3 rounded-2xl border border-gray-300 font-medium hover:bg-gray-100"
          >
            Zu den Preisen
          </a>
        </div>
      </section>

      {/* FOOTER / RECHT */}
      <footer className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-600">
          <div>
            Transparenz: feelmate ist ein virtueller Begleit-Service.
            Persönliche Treffen sind nicht Bestandteil des Angebots.
            Teile der Kommunikation können automatisiert sein. Details in den{" "}
            <a className="underline" href="/agb">AGB</a> und der{" "}
            <a className="underline" href="/datenschutz">Datenschutzerklärung</a>.
          </div>
          <div className="mt-3">
            <a className="underline" href="/impressum">Impressum</a>
          </div>
        </div>
      </footer>

      {/* TRIAL MODAL */}
      {openTrial && (
        <div className="fixed inset-0 bg-black/40 grid place-items-center p-4" role="dialog" aria-modal>
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-soft">
            <h3 className="text-lg font-semibold">Kostenlos starten</h3>
            <p className="mt-2 text-sm text-gray-600">
              Teste feelmate mit ein paar Nachrichten. Danach kannst du in Ruhe entscheiden.
            </p>
            <div className="mt-4 flex justify-end gap-2">
              <button onClick={() => setOpenTrial(false)} className="px-4 py-2 rounded-xl border border-gray-300">Schließen</button>
              <a href="#preise" className="px-4 py-2 rounded-xl bg-brand-600 text-white">Zu den Preisen</a>
            </div>
          </div>
        </div>
      )}

      {/* CHECKOUT MODAL (Platzhalter) */}
      {openCheckout && (
        <div className="fixed inset-0 bg-black/40 grid place-items-center p-4" role="dialog" aria-modal>
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-soft">
            <h3 className="text-lg font-semibold">Kauf / Mitgliedschaft</h3>
            <p className="mt-2 text-sm text-gray-600">
              Wähle Guthaben oder Mitgliedschaft. Der eigentliche Checkout wird im nächsten Schritt eingebunden.
            </p>
            <div className="mt-4 flex justify-end gap-2">
              <button onClick={() => setOpenCheckout(false)} className="px-4 py-2 rounded-xl border border-gray-300">Schließen</button>
              <a href="#preise" className="px-4 py-2 rounded-xl bg-brand-600 text-white">Zu den Preisen</a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
