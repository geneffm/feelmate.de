import { useState } from 'react'
import { Link } from 'react-router-dom'

function Modal({open, onClose, title, children}){
  if(!open) return null
  return (
    <div className="fixed inset-0 bg-black/40 grid place-items-center p-4" role="dialog" aria-modal>
      <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-soft">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="mt-2 text-sm text-gray-600">{children}</div>
        <div className="mt-4 flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 rounded-xl border border-gray-300">Schließen</button>
        </div>
      </div>
    </div>
  )
}

export default function App(){
  const [trial, setTrial] = useState(false)
  const [checkout, setCheckout] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-50 via-white to-white text-gray-900">
      <header className="sticky top-0 z-20 backdrop-blur bg-white/80 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="feelmate logo" className="h-8 w-8 rounded-2xl" />
            <span className="font-semibold tracking-tight text-gray-900">feelmate</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:opacity-80">Features</a>
            <a href="#preise" className="hover:opacity-80">Preise</a>
            <a href="#faq" className="hover:opacity-80">FAQ</a>
            <Link to="/impressum" className="hover:opacity-80">Rechtliches</Link>
          </nav>
          <button onClick={() => setTrial(true)} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-600 text-white text-sm font-medium shadow-soft hover:bg-brand-700">
            Jetzt starten
          </button>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 pt-16 pb-12">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
              Nie wieder allein — dein persönlicher Begleiter.
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Schreib, wenn dir danach ist. Jemand, der zuhört, versteht und dich aufmuntert — Tag und Nacht.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <button onClick={() => setTrial(true)} className="px-5 py-3 rounded-2xl bg-brand-600 text-white font-medium shadow-soft hover:bg-brand-700">Chat gratis starten</button>
              <a href="#preise" className="px-5 py-3 rounded-2xl border border-gray-300 font-medium hover:bg-gray-100">Mitglied werden</a>
            </div>
            <p className="mt-3 text-xs text-gray-500">Gratis: 5 Nachrichten zum Testen. Danach fair & flexibel mit Guthaben oder Mitgliedschaft.</p>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-white shadow-xl border border-gray-200 p-4">
              <div className="h-full w-full rounded-2xl bg-gradient-to-br from-white to-brand-50 grid place-items-center text-gray-500 text-sm">
                <div className="space-y-2 text-center">
                  <div className="text-xs uppercase tracking-widest">Vorschau</div>
                  <div className="text-base font-medium">Dein Chat – freundlich & diskret</div>
                  <div className="text-xs">(MVP: einfache Text-Chat-Komponente)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-2">
        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600">
          <span className="px-3 py-1 rounded-full bg-white border border-gray-200">Anonym & diskret</span>
          <span className="px-3 py-1 rounded-full bg-white border border-gray-200">Sofort erreichbar</span>
          <span className="px-3 py-1 rounded-full bg-white border border-gray-200">Deutschsprachiger Support</span>
        </div>
      </section>

      <section id="features" className="border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {title: 'Ehrlich & verlässlich', text: 'Klare Erwartungen, keine leeren Versprechen.'},
              {title: 'Immer da', text: 'Rund um die Uhr schreiben – ohne warten.'},
              {title: 'Dein Stil', text: 'Wähle Ton & Themen: locker, humorvoll, motivierend.'},
              {title: 'Datenschutz in DE', text: 'DSGVO-konform, transparente Regeln & Löschfristen.'},
            ].map((f, i) => (
              <div key={i} className="p-6 rounded-3xl border border-gray-200 shadow-soft bg-brand-50/40">
                <h3 className="font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {n: '01', t: 'Starten', d: 'Ohne Registrierung testen: 5 Gratis-Nachrichten.'},
            {n: '02', t: 'Personalisieren', d: 'Wähle Themen & Ton – was dir guttut.'},
            {n: '03', t: 'Dranbleiben', d: 'Mit Guthaben oder Mitgliedschaft unbegrenzt weiterschreiben.'},
          ].map((s, i) => (
            <div key={i} className="p-6 rounded-3xl border border-gray-200 bg-white shadow-soft">
              <div className="text-xs font-mono text-gray-500">{s.n}</div>
              <div className="mt-2 font-semibold">{s.t}</div>
              <div className="mt-2 text-sm text-gray-600">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="preise" className="border-y border-gray-200 bg-brand-50">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl border border-gray-200 bg-white shadow-soft">
              <div className="text-xs uppercase tracking-widest text-gray-500">Guthaben</div>
              <h3 className="mt-1 text-2xl font-semibold">100 Einheiten <span className="text-base font-normal text-gray-500">— 9,99 €</span></h3>
              <ul className="mt-4 text-sm text-gray-600 list-disc pl-5 space-y-1">
                <li>Flexibel für Nachrichten & Extras</li>
                <li>Kein Abo – einmalig kaufen</li>
                <li>Ideal zum Einstieg</li>
              </ul>
              <button onClick={() => setCheckout(true)} className="mt-5 inline-flex px-4 py-2 rounded-xl bg-brand-600 text-white text-sm font-medium hover:bg-brand-700">Jetzt Guthaben kaufen</button>
            </div>
            <div className="p-6 rounded-3xl border-2 border-brand-600 bg-white shadow-soft">
              <div className="text-xs uppercase tracking-widest text-gray-500">Beliebt</div>
              <h3 className="mt-1 text-2xl font-semibold">Mitgliedschaft <span className="text-base font-normal text-gray-500">— 29,99 €/Monat</span></h3>
              <ul className="mt-4 text-sm text-gray-600 list-disc pl-5 space-y-1">
                <li>Unlimitierter Chat (Fair-Use)</li>
                <li>Vorteile bei persönlichen Chats</li>
                <li>Exklusive Szenen & Themenräume</li>
              </ul>
              <button onClick={() => setCheckout(true)} className="mt-5 inline-flex px-4 py-2 rounded-xl bg-brand-600 text-white text-sm font-medium hover:bg-brand-700">Mitglied werden</button>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-semibold">Häufige Fragen</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {[
            {q: 'Mit wem schreibe ich?', a: 'Mit einem persönlichen Begleiter, der für dich da ist – freundlich, respektvoll und diskret. Details zu den Diensten findest du in unseren AGB/Datenschutz.'},
            {q: 'Wie läuft die Bezahlung?', a: 'Entweder einmaliges Guthaben (Einheiten) oder Monats-Mitgliedschaft. Zahlungen über gängige Anbieter wie Stripe/PayPal.'},
            {q: 'Sind meine Daten sicher?', a: 'Ja. DSGVO-konform, klare Löschfristen, verschlüsselte Übertragung. Du kannst dein Konto jederzeit löschen.'},
            {q: 'Was bedeutet Fair-Use?', a: 'Sehr großzügige Nutzung ohne harte Limits. Nur bei Missbrauch behalten wir uns Eingriffe vor.'},
          ].map((item, i) => (
            <details key={i} className="p-5 rounded-2xl border border-gray-200 bg-white shadow-soft">
              <summary className="font-medium cursor-pointer">{item.q}</summary>
              <p className="mt-2 text-sm text-gray-600">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer id="legal" className="border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <div className="font-semibold">feelmate</div>
            <p className="mt-2 text-gray-600">Echte Gespräche. Jederzeit.</p>
          </div>
          <div className="space-y-2">
            <Link className="block hover:underline" to="/impressum">Impressum</Link>
            <Link className="block hover:underline" to="/datenschutz">Datenschutz</Link>
            <Link className="block hover:underline" to="/agb">AGB</Link>
          </div>
          <div className="text-gray-500">
            <p>© {new Date().getFullYear()} feelmate. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>

      <Modal open={trial} onClose={() => setTrial(false)} title="Gratis testen">
        Diese Vorschau zeigt dir das Erlebnis. Den echten Chat schalten wir im nächsten Schritt frei.
      </Modal>

      <Modal open={checkout} onClose={() => setCheckout(false)} title="Kauf / Mitgliedschaft">
        Hier binden wir später den Checkout an (Stripe/PayPal). Für jetzt ist es ein Platzhalter.
      </Modal>
    </div>
  )
}
