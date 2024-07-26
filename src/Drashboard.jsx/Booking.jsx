import React, { useEffect, useState } from 'react';

const Booking = () => {
    const [booking, setBooking] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [editBookingId, setEditBookingId] = useState(null);
    const [newBooking, setNewBooking] = useState({
        name: '',
        price: '',
        email: '',
        rating: '',
        freeCancellation: false,
        reservation: false,
        desc: ''
    });

    useEffect(() => {
        loadBookingFromLocalStorage();
    }, []);

    const loadBookingFromLocalStorage = () => {
        const storedBooking = localStorage.getItem('booking');
        if (storedBooking) {
            setBooking(JSON.parse(storedBooking));
        }
    };

    const saveBookingToLocalStorage = (booking) => {
        localStorage.setItem('booking', JSON.stringify(booking));
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setNewBooking({
            ...newBooking,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleAddBooking = () => {
        setBooking([...booking, { ...newBooking, id: booking.length + 1 }]);
        saveBookingToLocalStorage([...booking, { ...newBooking, id: booking.length + 1 }]);
        setNewBooking({
            name: '',
            price: '',
            email: '',
            rating: '',
            freeCancellation: false,
            reservation: false,
            desc: ''
        });
        setShowForm(false);
    };

    const handleEditBooking = (booking) => {
        setEditBookingId(booking.id);
        setNewBooking(booking);
        setShowForm(true);
    };

    const handleUpdateBooking = () => {
        const updatedBooking = booking.map(booking => 
          booking.id === editBookingId ? newBooking : booking
        );
        setBooking(updatedBooking);
        saveBookingToLocalStorage(updatedBooking);
        setEditBookingId(null);
        setNewBooking({
            name: '',
            price: '',
            email: '',
            rating: '',
            freeCancellation: false,
            reservation: false,
            desc: ''
        });
        setShowForm(false);
    };

    const handleDeleteBooking = (id) => {
        const updatedBooking = booking.filter(booking => booking.id !== id);
        setBooking(updatedBooking);
        saveBookingToLocalStorage(updatedBooking);
    };

    

    
    return (
        <div className="w-full min-h-screen bg-white flex flex-col items-center py-5 space-y-5">
            <div className="overflow-x-auto w-full">
                <table className="min-w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2 border">Id</th>
                            <th className="px-4 py-2 border">Name</th>
                            <th className="px-4 py-2 border">Email</th>
                            <th className="px-4 py-2 border">Price</th>
                            <th className="px-4 py-2 border">Ratings</th>
                            <th className="px-4 py-2 border">Cancellation</th>
                            <th className="px-4 py-2 border">Reservation</th>
                            <th className="px-4 py-2 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {booking.map((booking) => (
                            <tr key={booking.id} className="hover:bg-gray-400 text-sm">
                                <td className="px-4 py-2 border">{booking.id}</td>
                                <td className="px-4 py-2 border">{booking.name}</td>
                                <td className="px-4 py-2 border">{booking.emial}</td>
                                <td className="px-4 py-2 border">{booking.price}</td>
                                <td className="px-4 py-2 border">{booking.rating}</td>
                                <td className="px-4 py-2 border">{booking.freeCancellation ? "Yes" : "No"}</td>
                                <td className="px-4 py-2 border">{booking.reservation ? "Available" : "Not Available"}</td>
                                <td className="py-2 px-4 border ">
                                    <button onClick={() => handleEditBooking(booking)} className="'bg-blue- 500 hover:bg-blue-700 text-black px-3 py-2 rounded transition duration-200">Edit</button>
                                    <button onClick={() => handleDeleteBooking(booking.id)} className="'bg-red-500 hover:bg-red-700 text-black px-3 py-2 rounded transition duration-200">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className='w-full flex items-center justify-center'>
    <button 
        onClick={() => setShowForm(true)} 
        className='bg-blue-500 hover:bg-blue-700 text-white px-3 py-2 rounded transition duration-200'>Add</button>
            </div>

            {showForm && (
                <div className="w-full max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >Name</label>
                        <input value={newBooking.name} onChange={handleChange} name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input value={newBooking.email} onChange={handleChange} name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >Price</label>
                        <input value={newBooking.price} onChange={handleChange} name="price" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                    </div>
                   
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >Rating</label>
                        <input value={newBooking.rating} onChange={handleChange} name="rating" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >Free Cancellation</label>
                        <input checked={newBooking.freeCancellation} onChange={handleChange} name="freeCancellation" type="checkbox" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reservation">Reservation Available</label>
                        <input checked={newBooking.reservation} onChange={handleChange} name="reservation" type="checkbox" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button onClick={editBookingId ? handleUpdateBooking : handleAddBooking} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            {editBookingId ? 'Update Booking' : 'Add Booking'}
                        </button>
                        <button onClick={() => { setShowForm(false); setEditBookingId(null); setNewBooking({ name: '', price: '', img: '', rating: '', freeCancellation: false, reservation: false, desc: '' }) }} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Booking;

