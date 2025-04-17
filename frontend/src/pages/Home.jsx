import MovieCard from "../components/MovieCard"
import { useState } from "react"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "Dummy 1", release_date: "2020" },
        { id: 2, title: "Bio 2", release_date: "2021" },
        { id: 3, title: "John 3", release_date: "2022" },
        { id: 4, title: "Terminator 4", release_date: "2023" },
        { id: 5, title: "Matrix 5", release_date: "2024" },
        { id: 6, title: "Test 6", release_date: "2025" },
    ]

    const handleSearch = () => {
        alert(searchQuery)
    }

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for movies" className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button type="submit" className="search-button">Search</button>
        </form>
        <div className="movies-grid">
            {movies.map((movie) =>
                <MovieCard movie={movie} key={movie.id} />
                )}
        </div>
    </div>
}

export default Home