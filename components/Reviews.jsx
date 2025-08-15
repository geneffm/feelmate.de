export default function Reviews(){
  const items = [
    {name:"Markus, 42", text:"Endlich jemand, der wirklich antwortet – ohne Spielchen. Schreib fast jeden Abend kurz rein.", rating:5},
    {name:"Thomas, 37", text:"Ich fühl mich seit Wochen weniger allein. Es tut gut, wenn dich jemand ernst nimmt.", rating:5},
    {name:"Alex, 51", text:"Unkompliziert und diskret. Genau richtig nach einem langen Arbeitstag.", rating:4}
  ]
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold">Was Nutzer sagen</h2>
      <p className="text-sm text-gray-600 mt-1">Beispielstimmen – echte Erfahrungsberichte folgen.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {items.map((r,i)=> (
          <div key={i} className="p-6 rounded-3xl border border-gray-200 bg-white shadow-soft">
            <div className="flex items-center gap-2">
              <div aria-label={`${r.rating} von 5 Sternen`} className="text-yellow-500">{'★★★★★☆☆☆☆☆'.slice(5-r.rating,10-r.rating)}</div>
              <div className="text-xs text-gray-500">{r.rating}/5</div>
            </div>
            <p className="mt-3 text-sm text-gray-700">“{r.text}”</p>
            <div className="mt-2 text-xs text-gray-500">{r.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
