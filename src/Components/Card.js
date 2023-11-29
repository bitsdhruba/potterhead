function Card({title, poster, summary, release_date, trailer}) {
    return ( 
        <div className="w-full h-full">
            <img src={poster} alt="" className="w-96 h-96"></img>
            <div>
                <h1>{title}</h1>
                <h1>{summary.substring(0, 100)}</h1>
                <p>{release_date}</p>
                <p>{trailer}</p>
            </div>
        </div>
     );
}

export default Card;