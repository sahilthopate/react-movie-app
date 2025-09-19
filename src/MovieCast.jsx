import './MovieCast.css';

export default function MovieCast({data}){
    return(
        <>
            <div className="movie-cast container">
            <div className="row mt-5">
                {data.cast && data.cast.length>0 ? (
                    data.cast.map((member,idx)=>(
                    <div className="card  col-6 col-md-3 " key={idx}>
                        <img src={member.castImg} alt={member.moviename} />
                        <div className="card-body">
                            <h2 className="card-description">{member.castName}</h2>
                        </div>
                    </div>
                ))
                ):
                (
                    <p className="card-title">No Cast Information Available</p>
                )}
            </div>
        </div>
        </>
    )
}