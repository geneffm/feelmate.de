import { useState } from 'react'
import { Link } from 'react-router-dom'
import ChatDemo from '../components/ChatDemo.jsx'

function CTA({children,onClick,href}){
  if(href){ return <a href={href} className="px-5 py-3 rounded-2xl bg-brand-600 text-white font-medium shadow-soft hover:bg-brand-700">{children}</a> }
  return <button onClick={onClick} className="px-5 py-3 rounded-2xl bg-brand-600 text-white font-medium shadow-soft hover:bg-brand-700">{children}</button>
}

function Modal({open,onClose,title,children,actions}){
  if(!open) return null
  return (
    <div className="fixed inset-0 bg-black/40 grid place-items-center p-4" role="dialog" aria-modal>
      <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-soft">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="mt-2 text-sm text-gray-600">{children}</div>
        <div className="mt-4 flex justify-end gap-2">{actions}</div>
      </div>
    </div>
  )
}

export default function App(){
  const [trial,setTrial]=useState(false)
  const [checkout,setCheckout]=useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-50 via-white to-white text-gray-900">
      {/* Nav */}
      <header className="sticky top-0 z-20 backdrop-blur bg-white/80 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" className="h-8 w-8 rounded-2xl" alt="feelmate" />
            <span className="font-semibold tracking-tight">feelmate</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#warum" className="hover:opacity-80">Warum</a>
            <a href="#bilder" className="hover:opacity-80">Bilder</a>
            <a href="#so" className="hover:opacity-80">So funktioniert’s</a>
            <a href="#preise" className="hover:opacity-80">Preise</a>
            <a href="#faq" className="hover:opacity-80">FAQ</a>
            <Link to="/impressum" className="hover:opacity-80">Rechtliches</Link>
          </nav>
          <CTA onClick={()=>setTrial(true)}>Jetzt starten</CTA>
        </div>
      </header>

      {/* Hero with warm image */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <img src="https://picsum.photos/seed/warm-portrait/1600/900" alt="Warm portrait" className="w-full h-full object-cover object-center opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 pt-20 pb-12 grid md:grid-cols-2 gap-8 items-end">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">Schluss mit Schweigen — jemand ist nur für dich da.</h1>
            <p className="mt-4 text-lg text-gray-800">Echte Aufmerksamkeit. Keine komplizierten Regeln, keine peinlichen Matches. Schreib einfach — Tag und Nacht.</p>
            <div className="mt-6 flex items-center gap-3">
              <CTA onClick={()=>setTrial(true)}>5 Nachrichten gratis</CTA>
              <a href="#preise" className="px-5 py-3 rounded-2xl border border-gray-300 font-medium hover:bg-gray-100">Mitglied werden</a>
            </div>
            <p className="mt-3 text-xs text-gray-600">Diskret & unkompliziert. Du entscheidest, wie viel du teilen willst.</p>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-white shadow-soft p-4">
            <ChatDemo onPaywall={()=>setCheckout(true)} />
          </div>
        </div>
      </section>

      {/* Image collage section */}
      <section id="bilder" className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-4">
          <img src="https://picsum.photos/seed/warm-cafe/800/600" alt="Café Szene" className="rounded-2xl object-cover w-full h-64 md:h-56" />
          <img src="https://picsum.photos/seed/warm-sofa/800/600" alt="Sofa Szene" className="rounded-2xl object-cover w-full h-64 md:h-56" />
          <img src="https://picsum.photos/seed/warm-evening/800/600" alt="Abendlicht" className="rounded-2xl object-cover w-full h-64 md:h-56" />
        </div>
      </section>

      {/* Pain points */}
      <section id="warum" className="max-w-6xl mx-auto px-4 pb-4">
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

      {/* How it works */}
      <section id="so" className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {n:'01',t:'Starten',d:'Ohne Registrierung testen: 5 Gratis-Nachrichten.'},
            {n:'02',t:'Anpassen',d:'Wähle Ton & Themen – locker, humorvoll, motivierend.'},
            {n:'03',t:'Dranbleiben',d:'Mit Guthaben oder Mitgliedschaft unbegrenzt weiterschreiben.'}
          ].map((s,i)=>(
            <div key={i} className="p-6 rounded-3xl border border-gray-200 bg-white shadow-soft">
              <div className="text-xs font-mono text-gray-500">{s.n}</div>
              <div className="mt-2 font-semibold">{s.t}</div>
              <div className="mt-2 text-sm text-gray-600">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
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
              <CTA onClick={()=>setCheckout(true)}>Jetzt Guthaben kaufen</CTA>
            </div>
            <div className="p-6 rounded-3xl border-2 border-brand-600 bg-white shadow-soft">
              <div className="text-xs uppercase tracking-widest text-gray-500">Beliebt</div>
              <h3 className="mt-1 text-2xl font-semibold">Mitgliedschaft <span className="text-base font-normal text-gray-500">— 29,99 €/Monat</span></h3>
              <ul className="mt-4 text-sm text-gray-600 list-disc pl-5 space-y-1">
                <li>Unlimitierter Chat (Fair-Use)</li>
                <li>Priorisierte Antworten</li>
                <li>Exklusive Themenräume</li>
              </ul>
              <CTA onClick={()=>setCheckout(true)}>Mitglied werden</CTA>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-semibold">Häufige Fragen</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <details className="p-5 rounded-2xl border border-gray-200 bg-white shadow-soft">
            <summary className="font-medium cursor-pointer">Mit wem schreibe ich?</summary>
            <p className="mt-2 text-sm text-gray-600">Mit einem persönlichen Begleiter, der nur für dich da ist – freundlich, respektvoll und diskret. Details findest du in unseren AGB/Datenschutz.</p>
          </details>
          <details className="p-5 rounded-2xl border border-gray-200 bg-white shadow-soft">
            <summary className="font-medium cursor-pointer">Gibt es echte Treffen?</summary>
            <p className="mt-2 text-sm text-gray-600">Unser Service ist <strong>rein virtuell</strong>. Persönliche Treffen sind nicht Teil des Angebots.</p>
          </details>
          <details className="p-5 rounded-2xl border border-gray-200 bg-white shadow-soft">
            <summary className="font-medium cursor-pointer">Wie läuft die Bezahlung?</summary>
            <p className="mt-2 text-sm text-gray-600">Du kannst einmaliges Guthaben kaufen oder eine Mitgliedschaft abschließen. Zahlungen über etablierte Anbieter.</p>
          </details>
          <details className="p-5 rounded-2xl border border-gray-200 bg-white shadow-soft">
            <summary className="font-medium cursor-pointer">Sind meine Daten sicher?</summary>
            <p className="mt-2 text-sm text-gray-600">Ja. DSGVO-konform, klare Löschfristen, verschlüsselte Übertragung. Du kannst dein Konto jederzeit löschen.</p>
          </details>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <div className="font-semibold">feelmate</div>
            <p className="mt-2 text-gray-600">Echte Gespräche. Jederzeit.</p>
          </div>
          <div className="space-y-2">
            <Link to="/impressum" className="block hover:underline">Impressum</Link>
            <Link to="/datenschutz" className="block hover:underline">Datenschutz</Link>
            <Link to="/agb" className="block hover:underline">AGB</Link>
          </div>
          <div className="text-gray-500">
            <p>© {new Date().getFullYear()} feelmate. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <Modal open={trial} onClose={()=>setTrial(false)} title="Gratis testen"
        actions={<><button onClick={()=>setTrial(false)} className="px-4 py-2 rounded-xl border border-gray-300">Schließen</button><a href="#preise" className="px-4 py-2 rounded-xl bg-brand-600 text-white">Zu den Preisen</a></>}
      >
        Erlebe 5 Nachrichten kostenlos. Danach kannst du entscheiden, wie du weitermachen willst.
      </Modal>

      <Modal open={checkout} onClose={()=>setCheckout(false)} title="Kauf / Mitgliedschaft"
        actions={<><button onClick={()=>setCheckout(false)} className="px-4 py-2 rounded-xl border border-gray-300">Schließen</button><a href="#faq" className="px-4 py-2 rounded-xl bg-brand-600 text-white">Mehr Infos</a></>}
      >
        Hier binden wir später den Checkout an. Für jetzt ist es ein Platzhalter.
      </Modal>
    </div>
  )
}
