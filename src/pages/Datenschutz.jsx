export default function Datenschutz() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Datenschutzerklärung</h2>

        <p className="mb-4">
          Der Schutz Ihrer personenbezogenen Daten ist uns ein besonderes Anliegen. 
          Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen 
          (DSGVO, BDSG, TMG). In dieser Erklärung informieren wir Sie über die wichtigsten Aspekte 
          der Datenverarbeitung im Rahmen unserer Website <strong>Feelmate.de</strong>.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-2">1. Verantwortliche Stelle</h3>
        <p>
          Verantwortlich für die Verarbeitung Ihrer personenbezogenen Daten ist der Betreiber von Feelmate.de. 
          Die vollständigen Kontaktdaten entnehmen Sie bitte dem <a href="/impressum" className="text-blue-600 underline">Impressum</a>.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-2">2. Erhebung und Verarbeitung personenbezogener Daten</h3>
        <p>
          Wir erheben, speichern und verarbeiten personenbezogene Daten (z. B. Name, E-Mail-Adresse, Zahlungsdaten) 
          nur, soweit dies für die Bereitstellung unserer Dienste erforderlich ist. 
          Darüber hinaus werden keine personenbezogenen Daten ohne Ihre ausdrückliche Einwilligung verarbeitet.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-2">3. Zweck der Datenverarbeitung</h3>
        <p>Die Verarbeitung Ihrer Daten erfolgt zu folgenden Zwecken:</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Bereitstellung und Verbesserung unseres Dienstes</li>
          <li>Abwicklung von Zahlungen</li>
          <li>Kommunikation mit Nutzern</li>
          <li>Erfüllung rechtlicher Verpflichtungen</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-2">4. Speicherung & Löschung</h3>
        <p>
          Personenbezogene Daten werden nur so lange gespeichert, wie es für die Erbringung unserer Dienste 
          erforderlich ist oder wir gesetzlich dazu verpflichtet sind. Nach Ablauf dieser Fristen 
          werden die Daten gelöscht.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-2">5. Weitergabe von Daten</h3>
        <p>
          Eine Weitergabe Ihrer Daten an Dritte erfolgt ausschließlich im Rahmen der Vertragserfüllung 
          (z. B. Zahlungsanbieter) oder wenn wir gesetzlich dazu verpflichtet sind. 
          Eine darüber hinausgehende Weitergabe findet nicht statt.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-2">6. Sicherheit</h3>
        <p>
          Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten 
          gegen Manipulation, Verlust, Zerstörung oder unbefugten Zugriff zu schützen.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-2">7. Cookies</h3>
        <p>
          Unsere Website verwendet Cookies, um die Benutzerfreundlichkeit zu erhöhen und bestimmte Funktionen 
          zu ermöglichen. Sie können die Speicherung von Cookies in den Einstellungen Ihres Browsers verhindern, 
          was jedoch die Funktionalität unserer Seite einschränken kann.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-2">8. Rechte der Nutzer</h3>
        <p>Sie haben jederzeit das Recht auf:</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Auskunft über Ihre gespeicherten Daten</li>
          <li>Berichtigung unrichtiger Daten</li>
          <li>Löschung Ihrer Daten („Recht auf Vergessenwerden“)</li>
          <li>Einschränkung der Verarbeitung</li>
          <li>Datenübertragbarkeit</li>
          <li>Widerruf einer erteilten Einwilligung</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-2">9. Umgang mit illegalen Inhalten</h3>
        <p>
          Es ist untersagt, über unsere Plattform illegale Inhalte zu verbreiten oder gegen geltendes Recht 
          zu verstoßen. Verdächtige Inhalte oder Aktivitäten können protokolliert und den zuständigen Behörden 
          gemeldet werden.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-2">10. Kontakt</h3>
        <p>
          Wenn Sie Fragen zum Datenschutz haben oder von Ihren Rechten Gebrauch machen möchten, 
          kontaktieren Sie uns bitte über die im Impressum angegebenen Kontaktdaten.
        </p>

        <p className="mt-8 text-sm text-gray-500">Stand: {new Date().getFullYear()}</p>
      </div>
    </section>
  );
}
