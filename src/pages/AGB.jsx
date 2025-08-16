export default function AGB() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Allgemeine Geschäftsbedingungen (AGB)</h2>

        <h3 className="text-xl font-semibold mt-8 mb-2">1. Geltungsbereich</h3>
        <p>
          Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge und Nutzungen der Plattform
          <strong> Feelmate.de</strong> zwischen dem Betreiber und den registrierten Nutzern. Mit der Registrierung
          akzeptieren die Nutzer diese AGB.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-2">2. Leistungsbeschreibung</h3>
        <p>
          Feelmate bietet eine digitale Kommunikations- und Unterhaltungsplattform. 
          Nachrichten werden durch Moderatoren oder automatisierte Systeme (Chatbots) beantwortet.
          Ziel des Angebots ist ausschließlich die virtuelle Unterhaltung und soziale Interaktion.
          Eine Vermittlung von realen Treffen, partnerschaftlichen Kontakten oder körperlichen Begegnungen
          ist nicht Bestandteil der Leistung.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-2">3. Nutzungsvoraussetzungen</h3>
        <p>
          Nutzer müssen mindestens 18 Jahre alt sein und die volle Geschäftsfähigkeit besitzen.
          Mit der Registrierung bestätigen Nutzer, dass sie diese Voraussetzungen erfüllen.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-2">4. Kosten & Zahlungsbedingungen</h3>
        <p>
          Die Nutzung von Feelmate ist teilweise kostenpflichtig. 
          Jeder neue Nutzer erhält ein Startguthaben für Testnachrichten. 
          Für weitere Nachrichten oder Zusatzfunktionen ist der Erwerb von Guthaben erforderlich.
        </p>
        <p className="mt-2">
          Zahlungen erfolgen ausschließlich über die auf der Plattform angegebenen Zahlungsdienstleister.
          Es werden nur die auf der Website genannten Preise und Tarife berechnet.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-2">5. Kündigung & Beendigung</h3>
        <p>
          Nutzer können ihr Konto jederzeit selbstständig löschen oder durch schriftliche Mitteilung an den Betreiber kündigen.
          Bereits gezahlte Beträge für genutzte Leistungen werden nicht erstattet.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-2">6. Verhaltensregeln</h3>
        <p>
          Es ist untersagt, über die Plattform Inhalte zu verbreiten, die:
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>gegen geltendes Recht verstoßen,</li>
          <li>beleidigend, diskriminierend, gewaltverherrlichend oder pornografisch sind,</li>
          <li>zu Straftaten anstiften oder diese verharmlosen,</li>
          <li>Rechte Dritter (z. B. Urheberrechte, Markenrechte) verletzen.</li>
        </ul>
        <p className="mt-2">
          Bei Verstößen behält sich der Betreiber das Recht vor, Konten sofort zu sperren und ggf. rechtliche Schritte einzuleiten.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-2">7. Haftung</h3>
        <p>
          Der Betreiber übernimmt keine Haftung für die Richtigkeit, Vollständigkeit oder Qualität der bereitgestellten Inhalte.
          Eine Haftung für Schäden, die durch die Nutzung der Plattform entstehen, ist ausgeschlossen,
          soweit nicht Vorsatz oder grobe Fahrlässigkeit des Betreibers vorliegt.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-2">8. Datenschutz</h3>
        <p>
          Der Schutz personenbezogener Daten hat höchste Priorität. 
          Alle Informationen hierzu finden sich in unserer gesonderten Datenschutzerklärung.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-2">9. Änderungen der AGB</h3>
        <p>
          Der Betreiber behält sich vor, diese AGB jederzeit mit Wirkung für die Zukunft zu ändern.
          Nutzer werden rechtzeitig über Änderungen informiert.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-2">10. Gerichtsstand & Recht</h3>
        <p>
          Es gilt das Recht der Bundesrepublik Deutschland. 
          Gerichtsstand für alle Streitigkeiten ist – soweit gesetzlich zulässig – der Sitz des Betreibers.
        </p>

        <p className="mt-8 text-sm text-gray-500">
          Stand: {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}

export default function Widerruf() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Widerrufsbelehrung</h2>

        <h3 className="text-xl font-semibold mt-8 mb-2">1. Widerrufsrecht</h3>
        <p className="mb-4">
          Sie haben das Recht, binnen 14 Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. 
          Die Widerrufsfrist beträgt 14 Tage ab dem Tag des Vertragsabschlusses.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-2">2. Ausübung des Widerrufs</h3>
        <p className="mb-4">
          Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (die Kontaktdaten entnehmen Sie bitte dem{" "}
          <a href="/impressum" className="text-blue-600 underline">Impressum</a>) 
          mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder E-Mail) 
          über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. 
          Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.
        </

