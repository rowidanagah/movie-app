import { useState } from "react";
import { useSelector } from "react-redux";
import FavCard from "../components/FavCard";
import Search from "../components/Search";
import CustomButton from "../components/CutomButton";


function Favorites() {
    const favs = useSelector((state) => state.RfavLst.favLst);

    // Search -> ..

    const [searchKey, SetSearchKey] = useState("titanic");
    // A
    const handleSearch = (e) => {
        // C
        console.log(e.target.value);
        SetSearchKey(e.target.value);
    };

    return (
        <div className="home">
            <div className="d-flex m-2">
                <div className="row">
                    <Search onSearch={handleSearch} />
                    {
                        favs.map((movie) => {
                            console.log(movie)
                            return <FavCard title={movie.original_title}
                                desc={movie.title}
                                movie={movie}
                                img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                moveto={movie.id}
                            />
                        })
                    }
                </div>
            </div >
        </div >
    )
}
export default Favorites;
