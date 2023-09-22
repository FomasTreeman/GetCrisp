import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [favourites, setFavourites] = useState<string[]>([])
  const [facts, setFacts] = useState<string[]>([]);

  useEffect(() => {
    fetchFacts()
  }, [])

  async function fetchFacts() {
    try {
      const res = await fetch('https://meowfacts.herokuapp.com/?count=5')
      const json = await res.json();
      if (!json.data) throw Error('no facts')
      setFacts([...json.data as string[]]);
    } catch (e) {
      console.error(e) //requires better error handling
    }
  }

  function addFavourite(fact: string) {
    if (favourites.includes(fact)) return
    setFavourites([...favourites, fact])
  }

  return (
    <main className='flex gap-24 mx-5'>
      <section className="flex flex-col gap-5 w-full">
        <h1>Facts!</h1>
        <button onClick={fetchFacts} className="w-fit self-center" > refresh </button>
        <ul className="flex flex-col gap-4">
          {facts ?
            facts.map(fact => (
              <li
                key={fact}
                onClick={() => addFavourite(fact)}
              >
                {fact}
              </li>
            ))
            : <p className='text-red-600'> Whoops couldn't get the facts this time, try again.</p>}
        </ul>
      </section>
      <section className="flex flex-col gap-5 w-full" >
        <h1> Favourites! </h1>
        <ul className="flex flex-col gap-4">
          {favourites ?
            favourites.map(fact => <li key={fact}> {fact} </li>)
            : <p> No favourites selected </p>
          }
        </ul>
      </section>
    </main>
  )
}

export default App
