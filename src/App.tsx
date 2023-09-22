import { useState } from 'react'

import './App.css'
import Facts from './Components/Facts'
import Favourites from './Components/Favourites'

function App() {
  const [favourites, setFavourites] = useState<string[]>([])

  return (
    <main className='flex gap-24 mx-5'>
      <Facts favourites={favourites} setFavourites={setFavourites} />
      <Favourites favourites={favourites} />
    </main>
  )
}

export default App
