export default function AGB() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-sm leading-6 text-gray-700">
      <h1 className="text-2xl font-semibold">Allgemeine Geschäftsbedingungen (AGB)</h1>

      <h2 className="mt-6 font-semibold">1. Geltungsbereich</h2>
      <p className="mt-2">Diese AGB regeln die Nutzung der Plattform „feelmate“.</p>

      <h2 className="mt-6 font-semibold">2. Leistung &amp; Natur des Dienstes</h2>
      <ul className="list-disc pl-6 mt-2">
        <li>Rein virtueller Begleitservice (Chat). Keine persönlichen Treffen.</li>
        <li>Teile der Kommunikation können automatisiert sein (Details in der Datenschutzerklärung).</li>
      </ul>

      <h2 className="mt-6 font-semibold">3. Verhaltensregeln</h2>
      <ul className="list-disc pl-6 mt-2">
        <li>Untersagt: Inhalte zu Minderjährigen, Gewaltverherrlichung, Extremismus, Aufrufe zu Straftaten, Drohungen, Hassrede, Belästigung.</li>
        <li>Verstöße führen zur Sperre; Erstattung bereits genutzter Einheiten ist ausgeschlossen.</li>
        <li>Bei strafrechtlicher Relevanz können Inhalte an Behörden übermittelt werden.</li>
      </ul>

      <h2 className="mt-6 font-semibold">4. Entgelte &amp; Zahlung</h2>
      <ul className="list-disc pl-6 mt-2">
        <li>Guthaben-Modelle und Mitgliedschaften; Preise werden vor Kauf angezeigt.</li>
        <li>Zahlung über anerkannte Anbieter (z. B. Stripe/PayPal).</li>
        <li>Kein Anspruch auf Rückerstattung bereits genutzter Einheiten.</li>
      </ul>

      <h2 className="mt-6 font-semibold">5. Widerruf</h2>
      <p className="mt-2">
        Bei digitalen Inhalten kann das Widerrufsrecht erlöschen, wenn der Nutzer zustimmt, dass vor Ablauf der Widerrufsfrist mit der Leistung begonnen wird.
      </p>

      <h2 className="mt-6 font-semibold">6. Haftung</h2>
      <p className="mt-2">
        Haftung bei Vorsatz und grober Fahrlässigkeit; im Übrigen beschränkt auf den vertragstypischen, vorhersehbaren Schaden.
      </p>

      <h2 className="mt-6 font-semibold">7. Laufzeit &amp; Kündigung</h2>
      <p className="mt-2">
        Mitgliedschaften können zum nächsten Abrechnungszeitraum gekündigt werden, sofern nichts anderes ausgewiesen ist.
      </p>

      <h2 className="mt-6 font-semibold">8. Schlussbestimmungen</h2>
      <p className="mt-2">Es gilt deutsches Recht. Gerichtsstand ist – soweit zulässig – der Sitz des Betreibers.</p>

      <p className="mt-8"><a className="text-brand-600 underline" href="/">Zur Startseite</a></p>
    </main>
  );
}
