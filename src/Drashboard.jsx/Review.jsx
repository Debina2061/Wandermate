import React, { useEffect, useState } from 'react';

const Review= () => {
    const [reviews, setReviews] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [editReviewId, setEditReviewId] = useState(null);
    const [newReview, setNewReview] = useState({
        id: '',
        username: '',
        rating: '',
        comment: ''
    });

    useEffect(() => {
        loadReviewsFromLocalStorage();
    }, []);

    const loadReviewsFromLocalStorage = () => {
        const storedReviews = localStorage.getItem('reviews');
        if (storedReviews) {
            setReviews(JSON.parse(storedReviews));
        }
    };

    const saveReviewsToLocalStorage = (reviews) => {
        localStorage.setItem('reviews', JSON.stringify(reviews));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewReview({
            ...newReview,
            [name]: value
        });
    };

    const handleAddReview = () => {
        setReviews([...reviews, { ...newReview, id: reviews.length + 1 }]);
        saveReviewsToLocalStorage([...reviews, { ...newReview, id: reviews.length + 1 }]);
        setNewReview({
            id: '',
            username: '',
            rating: '',
            comment: ''
        });
        setShowForm(false);
    };

    const handleEditReview = (review) => {
        setEditReviewId(review.id);
        setNewReview(review);
        setShowForm(true);
    };

    const handleUpdateReview = () => {
        const updatedReviews = reviews.map(review => 
          review.id === editReviewId ? { ...newReview, id: editReviewId } : review
        );
        setReviews(updatedReviews);
        saveReviewsToLocalStorage(updatedReviews);
        setEditReviewId(null);
        setNewReview({
            id: '',
            username: '',
            rating: '',
            comment: ''
        });
        setShowForm(false);
    };

    const handleDeleteReview = (id) => {
        const updatedReviews = reviews.filter(review => review.id !== id);
        setReviews(updatedReviews);
        saveReviewsToLocalStorage(updatedReviews);
    };

    return (
        <div className="w-full min-h-screen bg-white flex flex-col items-center py-5 space-y-5">
            <div className="overflow-x-auto w-full">
                <table className="min-w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2 border">Id</th>
                            <th className="px-4 py-2 border">Username</th>
                            <th className="px-4 py-2 border">Rating</th>
                            <th className="px-4 py-2 border">Comment</th>
                            <th className="px-4 py-2 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews.map((review) => (
                            <tr key={review.id} className="hover:bg-gray-100 text-sm">
                                <td className="px-4 py-2 border">{review.id}</td>
                                <td className="px-4 py-2 border">{review.username}</td>
                                <td className="px-4 py-2 border">{review.rating}</td>
                                <td className="px-4 py-2 border">{review.comment}</td>
                                <td className="py-7 px-4 border flex">
                                    <button onClick={() => handleEditReview(review)} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                                    <button onClick={() => handleDeleteReview(review.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className='w-full flex items-center justify-center'>
                <button onClick={() => setShowForm(true)} className='bg-blue-500 text-white px-3 py-2 rounded'>Add Review</button>
            </div>

            {showForm && (
                <div className="w-full max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Id</label>
                        <input value={newReview.id} onChange={handleChange} name="id" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                        <input value={newReview.username} onChange={handleChange} name="username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Rating</label>
                        <input value={newReview.rating} onChange={handleChange} name="rating" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Comment</label>
                        <textarea value={newReview.comment} onChange={handleChange} name="comment" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <button onClick={editReviewId ? handleUpdateReview : handleAddReview} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            {editReviewId ? 'Update Review' : 'Add Review'}
                        </button>
                        <button onClick={() => { setShowForm(false); setEditReviewId(null); setNewReview({ id: '', username: '', rating: '', comment: '' }) }} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Review;
