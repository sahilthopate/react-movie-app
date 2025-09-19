import './MovieReview.css';
import axios from "axios"
import { useState } from "react"

export default function MovieReview({handleAddReview,id}){
    let[reviewData , setReviewData] = useState({
        range:"",
        comment:""
    })

    let handleReviewChange = (event) =>{
        let {name ,value} = event.target;
        setReviewData((prevData)=>({
            ...prevData ,
                [name]:value,
        }));
    };

    let handleReviewSubmit = async (event) =>{
        event.preventDefault();
        try{
            await axios.post(`http://localhost:5000/${id}/reviews`,reviewData);
            handleAddReview(reviewData);
            setReviewData({range:"",comment:""});
        }catch(err){
            console.log(err);
        }
    }
    return(
        <> 
            <div className="movie-review">
                <h2>Review This Movie</h2>
                
                <form onSubmit={handleReviewSubmit}>

                    <label htmlFor="range" className='form-label'>Rating:</label>
                    
                    <input type="range"
                    className='form-range'
                        min={1}
                        max={5}
                        name="range"
                        id="range"
                        value={reviewData.range}
                        onChange={handleReviewChange}
                    />
                
                    <label htmlFor="comment" className='form-label'>Leave a Comment:</label>
                    <textarea 
                        className='form-control'
                        width="100%" 
                        heigth="5rem"
                        placeholder="Send Comment"
                        name="comment"
                        id="comment"
                        value={reviewData.comment}
                        onChange={handleReviewChange}
                    />
                    <button type='submit'>Add Review</button>
                </form>  
            </div>
        </>
    )
}