import { useEffect, useRef, useState } from 'react'

const starters = [
  "Hey du – schön, dass du da bist. Wie geht’s dir gerade?",
  "Ich bin noch wach und für dich da. Was hat dich heute beschäftigt?",
  "Erzähl mir was Kleines über dich, das kaum jemand weiß 🙂"
]

const replies = [
  "Versteh ich total. Danke, dass du das teilst.",
  "Das klingt nach einem langen Tag… willst du mir mehr davon erzählen?",
  "Ich bin ganz Ohr. Was würdest du dir gerade wünschen?",
  "Lass uns das gemeinsam sortieren – was war der beste Moment heute?",
  "Ich mag deine Ehrlichkeit. Das macht’s leicht, mit dir zu schreiben."
]

export default function ChatDemo({onPaywall}){
  const [messages,setMessages]=useState([{role:'bot',text: starters[Math.floor(Math.random()*starters.length)]}])
  const [input,setInput]=useState('')
  const [count,setCount]=useState(0) // user messages
  const ref = useRef(null)

  useEffect(()=>{ ref.current?.scrollTo({top: ref.current.scrollHeight, behavior:'smooth'}) },[messages])

  function send(){
    const text = input.trim()
    if(!text) return
    const newMsgs=[...messages,{role:'user',text}]
    setMessages(newMsgs); setInput(''); const newCount=count+1; setCount(newCount)
    // Paywall after 5 user messages
    const botText = newCount>=5 ? null : replies[Math.floor(Math.random()*replies.length)]
    setTimeout(()=>{
      if(newCount>=5){ onPaywall?.(); }
      else{ setMessages(m=>[...m,{role:'bot',text: botText}]) }
    }, 600 + Math.random()*800)
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-soft h-[420px] flex flex-col">
      <div ref={ref} className="flex-1 overflow-auto p-4 space-y-3">
        {messages.map((m,i)=>(
          <div key={i} className={m.role==='bot' ? 'text-gray-800' : 'text-gray-700 text-right'}>
            <span className={m.role==='bot' ? 'inline-block px-3 py-2 rounded-2xl bg-brand-50 border border-brand-100' : 'inline-block px-3 py-2 rounded-2xl bg-gray-100 border border-gray-200'}>{m.text}</span>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-200 p-3 flex gap-2">
        <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&send()} placeholder="Schreib hier …" className="flex-1 px-3 py-2 rounded-xl border border-gray-300 focus:outline-none" />
        <button onClick={send} className="px-4 py-2 rounded-xl bg-brand-600 text-white hover:bg-brand-700">Senden</button>
      </div>
    </div>
  )
}
