import { useEffect, useState } from "react"

interface IFactsProps {
    favourites: string[]
    setFavourites: React.Dispatch<React.SetStateAction<string[]>>
}

export default function Facts({ favourites, setFavourites }: IFactsProps) {
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
        <section className="flex flex-col gap-5 w-full">
            <h1>Facts!</h1>
            <button onClick={fetchFacts} className="w-fit self-center" > refresh </button>
            <ul className="flex flex-col gap-4">
                {facts.map(fact => (
                    <li
                        key={fact}
                        onClick={() => addFavourite(fact)}
                    >
                        {fact}
                    </li>
                ))}
            </ul>
        </section>
    )
}