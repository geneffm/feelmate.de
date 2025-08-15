export default function Datenschutz(){
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-sm leading-6 text-gray-700">
      <h1 className="text-2xl font-semibold">Datenschutzerklärung</h1>
      <p className="mt-4">Verantwortlich im Sinne der DSGVO ist der im Impressum genannte Betreiber.</p>
      <h2 className="mt-6 font-semibold">1. Verarbeitungszwecke</h2>
      <ul className="list-disc pl-6 mt-2">
        <li>Bereitstellung des Online-Dienstes und Kommunikationsfunktionen</li>
        <li>Abrechnung (Zahlungsdienstleister)</li>
        <li>Missbrauchsverhinderung, Sicherheit und Support (inkl. moderierter Inhalte)</li>
        <li>Optional: Analyse zur Verbesserung des Angebots (mit Einwilligung)</li>
      </ul>
      <h2 className="mt-6 font-semibold">2. Rechtsgrundlagen</h2>
      <ul className="list-disc pl-6 mt-2">
        <li>Art. 6 Abs. 1 lit. b DSGVO (Vertrag/Vertragsanbahnung)</li>
        <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Sicherheit/Betrieb)</li>
        <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung, z. B. für Marketing/Analyse)</li>
      </ul>
      <h2 className="mt-6 font-semibold">3. Empfänger/Auftragsverarbeiter</h2>
      <ul className="list-disc pl-6 mt-2">
        <li>Hosting/Deployment: Vercel</li>
        <li>Datenbank/Auth (geplant): Supabase (EU)</li>
        <li>Zahlung: Stripe, PayPal</li>
        <li>Content-Moderation (automatisiert): z. B. externe Moderations-APIs</li>
      </ul>
      <h2 className="mt-6 font-semibold">4. Speicherdauer</h2>
      <p className="mt-2">Daten werden nur solange gespeichert, wie es für die genannten Zwecke erforderlich ist, oder gesetzliche Pflichten bestehen.</p>
      <h2 className="mt-6 font-semibold">5. Betroffenenrechte</h2>
      <ul className="list-disc pl-6 mt-2">
        <li>Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit</li>
        <li>Widerspruch gegen Verarbeitung</li>
        <li>Widerruf erteilter Einwilligungen</li>
      </ul>
      <h2 className="mt-6 font-semibold">6. Hinweis zur Kommunikation</h2>
      <p className="mt-2">Der Dienst stellt eine persönliche Begleitung zur Verfügung. Persönliche Treffen sind nicht Teil des Angebots.</p>
      <p className="mt-8"><a className="text-brand-600 underline" href="/">Zurück zur Startseite</a></p>
    </main>
  )
}
