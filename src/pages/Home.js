import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomCard from "../components/CustomCard";


function Home() {

    const [movies, SetMovies] = useState([]);
    const [title, setTitle] = useState("");
    const params = useParams();
    console.log(params)
    const filterKey =  params.filterKey;


    const url = "https://api.themoviedb.org/3/movie/popular"
    const [keyWord, SetSearchFilter] = useState(''); 

    useEffect(() => {
        axios.get(url, {
            params: {
                api_key: "9b743af1d4fde1d65af33c40dcccce87",
                page: 4 , // pagination
                query: {filterKey}
            }
        }
        ).then((movies) => SetMovies(movies.data.results))
            .catch((error) => console.log(error))
    })

    return (
        <div className="d-flex m-2">
            <div className="row">
                {
                    movies.map((movie) => {
                        return <CustomCard title={movie.original_title}
                            desc={movie.title}
                            img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            moveto={movie.id}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default Home;
