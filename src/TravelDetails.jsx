import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const TravelDetails = () => {
  const { id } = useParams();
  const [travel, setTravel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const [reviewsError, setReviewsError] = useState(null);

  useEffect(() => {
    const fetchTravel = async () => {
      try {
        const response = await fetch(`http://localhost:3000/travelPackages/${id}`);
        if (!response.ok) {
          throw new Error('Travel Package not found');
        }
        const data = await response.json();
        setTravel(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    const fetchReviews = async () => {
      try {
        const response = await fetch(`http://localhost:3000/reviews?travelPackageId=${id}`);
        if (!response.ok) {
          throw new Error('Reviews not found');
        }
        const data = await response.json();
        setReviews(data);
        setReviewsLoading(false);
      } catch (error) {
        setReviewsError(error);
        setReviewsLoading(false);
      }
    };

    fetchTravel();
    fetchReviews();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!travel) return <p>Travel Pacakage not found</p>;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: "80%", margin: "20px 0", display: "flex", gap: "15px" }}>
        <div style={{ flex: 2 }}>
          <img src={travel.img} alt="Travel" style={{ width: "100%", borderRadius: "8px" }} />
        </div>
        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "15px" }}>
          {[1, 2, 3, 4].map((_, index) => (
            <img key={index} src={travel.img} alt={`Travel ${index}`} style={{ width: "120%", height: "100%", borderRadius: "5px" }} />
          ))}
        </div>
      </div>
      <div style={{ marginTop: "20px", fontSize: "1.2rem" }}>
        <a href={`/travels/${id}/about`} style={{ margin: "0 10px", textDecoration: "none", color: "#007bff" }}>About</a>
        

      <div style={{ marginTop: "20px", textAlign: "center" }}>

        
        <ul key={travel.id} style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <h2>{travel.name}</h2>
            <p>{travel.desc}</p>
            
            <p>RS. {travel.price}</p>
          </li>
          
        </ul>
      </div>
        <a href={`/travelPackages/${id}/location`} style={{ margin: "0 10px", textDecoration: "none", color: "#007bff" }}>Location</a>
      <div style={{ marginTop: "20px" }}>
        <a href={`/travelPackages/${id}/reviews`} style={{ margin: "0 10px", textDecoration: "none", color: "#007bff" }}>Reviews</a>
        {reviewsLoading ? (
          <p>Loading reviews...</p>
        ) : reviewsError ? (
          <p>Error loading reviews: {reviewsError.message}</p>
        ) : (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {reviews.map(review => (
              <li key={review.id} style={{ display: "flex", marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
                <img src={review.avatar || "https://i.pinimg.com/564x/df/00/8e/df008e504481bf1b92305e6f68d4d92e.jpg"} alt={review.author} style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "20px" }} />
                <div>
                  <p><strong>{review.author}</strong> <span style={{ color: "gold" }}>{"★".repeat(review.rating)}</span><span style={{ color: "#ccc" }}>{"★".repeat(5 - review.rating)}</span></p>
                  <p>{review.comment}</p>
                  <p style={{ color: "#999" }}>{new Date(review.date).toLocaleString()}</p>
                  <div style={{ marginTop: "20px" }}>

                </div>
          </div>
              </li>
            ))}
            <h3>Write a Review</h3>
            <form>
              <div>
                <label htmlFor="review">Your Review</label>
                <textarea id="review" name="review" rows="4" style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}></textarea>
              </div>
              <button type="submit" style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px"
              }}>Submit</button>
            </form>
          </ul>
        )}
        </div>
      </div>
    </div>
  );
};

export default TravelDetails;
