export default function Widerruf() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Widerrufsbelehrung</h2>

        <h3 className="text-xl font-semibold mt-8 mb-2">1. Widerrufsrecht</h3>
        <p className="mb-4">Sie haben das Recht, binnen 14 Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt 14 Tage ab dem Tag des Vertragsabschlusses.</p>

        <h3 className="text-xl font-semibold mt-8 mb-2">2. Ausübung des Widerrufs</h3>
        <p className="mb-4">Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Kontaktdaten siehe <a href="/impressum" className="text-blue-600 underline">Impressum</a>) mittels einer eindeutigen Erklärung (z. B. Brief oder E-Mail) über Ihren Entschluss informieren. Sie können das Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.</p>

        <h3 className="text-xl font-semibold mt-8 mb-2">3. Folgen des Widerrufs</h3>
        <p className="mb-4">Wenn Sie diesen Vertrag widerrufen, erstatten wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, unverzüglich und spätestens binnen 14 Tagen ab dem Tag, an dem die Mitteilung über Ihren Widerruf bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart.</p>

        <h3 className="text-xl font-semibold mt-8 mb-2">4. Erlöschen des Widerrufsrechts bei digitalen Inhalten</h3>
        <p>Das Widerrufsrecht erlischt vorzeitig, wenn der Unternehmer mit der Ausführung des Vertrages begonnen hat, nachdem der Verbraucher ausdrücklich zugestimmt hat, dass der Unternehmer vor Ablauf der Widerrufsfrist mit der Ausführung des Vertrages beginnt und der Verbraucher seine Kenntnis davon bestätigt hat, dass er durch seine Zustimmung mit Beginn der Ausführung des Vertrages sein Widerrufsrecht verliert.</p>

        <p className="mt-8 text-sm text-gray-500">Stand: {new Date().getFullYear()}</p>
      </div>
    </section>
  );
}
