import Onemovie from "./Onemovie"
import movies from '../utils/movies'
import FlipMove from "react-flip-move"
function Movies() {
    return (
        <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 
        3xl:flex flex-wrap justify-center">
            {movies.map((result)=>(
                <Onemovie key={result.id} result={result}/>
            ))}
        </FlipMove>
    )
}

export default Movies
