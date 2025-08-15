export default function Impressum() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-sm leading-6 text-gray-700">
      <h1 className="text-2xl font-semibold">Impressum</h1>
      <p className="mt-4">Angaben gemäß § 5 TMG</p>
      <p className="mt-2">
        Firmenname / Betreiber<br />
        Straße Nr.<br />
        PLZ Ort, Deutschland
      </p>
      <p className="mt-2">
        Vertreten durch: Vor- und Nachname<br />
        Kontakt: E-Mail / Telefon<br />
        USt-IdNr.: (falls vorhanden)
      </p>
      <h2 className="mt-6 font-semibold">Hinweis</h2>
      <p className="mt-2">
        Der Dienst ist ein rein virtueller Begleitservice. Persönliche Treffen sind nicht Bestandteil des Angebots.
      </p>
      <p className="mt-8"><a className="text-brand-600 underline" href="/">Zur Startseite</a></p>
    </main>
  );
}
