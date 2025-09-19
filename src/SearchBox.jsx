import "./SearchBox.css";

export default function SearchBox({setQuery}){
    return(
        <> 
            <div className="search-movie-container">
                <h1>Movie App</h1>
                <input type="text" 
                placeholder="Search Movie" 
                id="searchMovie"
                onChange={(event)=>setQuery(event.target.value.toLowerCase())}
                />
                <button >Search</button>
            </div>
            <hr />
            
        </>
    )
}