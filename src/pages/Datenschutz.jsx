export default function Datenschutz(){
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-sm leading-6 text-gray-700">
      <h1 className="text-2xl font-semibold">Datenschutzerklärung</h1>
      <p className="mt-4">Verantwortlich im Sinne der DSGVO ist der im Impressum genannte Betreiber.</p>
      <h2 className="mt-6 font-semibold">1. Verarbeitungszwecke</h2>
      <ul className="list-disc pl-6 mt-2">
        <li>Bereitstellung des Online-Dienstes und Kommunikationsfunktionen</li>
        <li>Abrechnung (Zahlungsdienstleister wie Stripe/PayPal)</li>
        <li>Missbrauchsverhinderung, Sicherheit und Support</li>
        <li>Optional: Analyse zur Verbesserung des Angebots (z. B. Plausible/PostHog)</li>
      </ul>
      <h2 className="mt-6 font-semibold">2. Rechtsgrundlagen</h2>
      <ul className="list-disc pl-6 mt-2">
        <li>Art. 6 Abs. 1 lit. b DSGVO (Vertrag/Vertragsanbahnung)</li>
        <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen, z. B. Sicherheit)</li>
        <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung, z. B. für Marketing/Analyse)</li>
      </ul>
      <h2 className="mt-6 font-semibold">3. Empfänger / Auftragsverarbeiter</h2>
      <ul className="list-disc pl-6 mt-2">
        <li>Hosting/Deployment: Vercel</li>
        <li>Datenbank/Auth (geplant): Supabase (EU-Region)</li>
        <li>Zahlung: Stripe, PayPal</li>
        <li>E-Mail-Versand (optional): z. B. Mailgun/Sendgrid</li>
      </ul>
      <h2 className="mt-6 font-semibold">4. Speicherdauer</h2>
      <p className="mt-2">Daten werden nur so lange gespeichert, wie es für die genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.</p>
      <h2 className="mt-6 font-semibold">5. Betroffenenrechte</h2>
      <ul className="list-disc pl-6 mt-2">
        <li>Auskunft, Berichtigung, Löschung, Einschränkung</li>
        <li>Widerspruch gegen Verarbeitung</li>
        <li>Datenübertragbarkeit</li>
        <li>Widerruf von Einwilligungen mit Wirkung für die Zukunft</li>
      </ul>
      <h2 className="mt-6 font-semibold">6. Hinweis zur Kommunikation</h2>
      <p className="mt-2">Die Plattform stellt eine persönliche Begleitung zur Verfügung. Näheres zur Ausgestaltung der Chats entnehmen Sie bitte den AGB.</p>
      <p className="mt-8"><a className="text-brand-600 underline" href="/">Zurück zur Startseite</a></p>
    </main>
  )
}
