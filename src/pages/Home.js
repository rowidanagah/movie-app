import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomCard from "../components/CustomCard";
import Search from "../components/Search";


function Home() {
    const [movies, SetMovies] = useState([]);
    const [title, setTitle] = useState("");
    const params = useParams();
    const filterKey = params.filterKey;
    const url = "https://api.themoviedb.org/3/search/movie"
    
    // Search -> ..

    const [searchKey, SetSearchKey] = useState("titanic");
    // A
    const handleSearch = (e) => {
        // C
        console.log(e.target.value);
        SetSearchKey(e.target.value);
    };
    
    useEffect(() => {
        axios.get(url, {
            params: {
                api_key: "9b743af1d4fde1d65af33c40dcccce87",
                query: searchKey
            }
        }
        ).then((movies) => SetMovies(movies.data.results))
            .catch((error) => console.log(error))
    }, [searchKey])

    return (
        <div className="">
            <Search onSearch={handleSearch} />
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
        </div>

    )
}

export default Home;
