import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import SingleCard from "../components/SingleCard"


function MovieDetails(props) {

    // console.log(useParams())
    const [movie, SetMoviewDetails] = useState({})


    const params = useParams()
    const Cid = params.id
    console.log(Cid)
    console.log(params)

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${Cid}`, {
            params: {

                api_key: "9b743af1d4fde1d65af33c40dcccce87"
            }
        })
            .then((company) => SetMoviewDetails(company.data))
            .catch((err) => console.log(err))
    }, [])

    console.log(movie)

    return (
        <SingleCard
            title={movie.original_title}
            desc={movie.title}
            id = {Cid}
            img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        />
    )
}


export default MovieDetails;