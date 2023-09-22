interface IFavouritesProps {
    favourites: string[]
}

export default function Favourites({ favourites }: IFavouritesProps) {
    return (
        <section className="flex flex-col gap-5 w-full" >
            <h1> Favourites! </h1>
            <ul className="flex flex-col gap-4">
                {favourites ?
                    favourites.map(fact => <li key={fact}> {fact} </li>)
                    : <p> No favourites selected </p>
                }
            </ul>
        </section>)
}