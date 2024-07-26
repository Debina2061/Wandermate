import React, { useEffect, useState } from 'react';

const Hotels = () => {
    const [hotels, setHotels] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [editHotelId, setEditHotelId] = useState(null);
    const [newHotel, setNewHotel] = useState({
        name: '',
        price: '',
        img: '',
        rating: '',
        freeCancellation: false,
        reservation: false,
        desc: ''
    });

    useEffect(() => {
        loadHotelsFromLocalStorage();
    }, []);

    const loadHotelsFromLocalStorage = () => {
        const storedHotels = localStorage.getItem('hotels');
        if (storedHotels) {
            setHotels(JSON.parse(storedHotels));
        }
    };

    const saveHotelsToLocalStorage = (hotels) => {
        localStorage.setItem('hotels', JSON.stringify(hotels));
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setNewHotel({
            ...newHotel,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleAddHotel = () => {
        setHotels([...hotels, { ...newHotel, id: hotels.length + 1 }]);
        saveHotelsToLocalStorage([...hotels, { ...newHotel, id: hotels.length + 1 }]);
        setNewHotel({
            name: '',
            price: '',
            img: '',
            rating: '',
            freeCancellation: false,
            reservation: false,
            desc: ''
        });
        setShowForm(false);
    };

    const handleEditHotel = (hotel) => {
        setEditHotelId(hotel.id);
        setNewHotel(hotel);
        setShowForm(true);
    };

    const handleUpdateHotel = () => {
        const updatedHotels = hotels.map(hotel => 
            hotel.id === editHotelId ? newHotel : hotel
        );
        setHotels(updatedHotels);
        saveHotelsToLocalStorage(updatedHotels);
        setEditHotelId(null);
        setNewHotel({
            name: '',
            price: '',
            img: '',
            rating: '',
            freeCancellation: false,
            reservation: false,
            desc: ''
        });
        setShowForm(false);
    };

    const handleDeleteHotel = (id) => {
        const updatedHotels = hotels.filter(hotel => hotel.id !== id);
        setHotels(updatedHotels);
        saveHotelsToLocalStorage(updatedHotels);
    };

    

    
    return (
        <div className="w-full min-h-screen bg-white flex flex-col items-center py-5 space-y-5">
            <div className="overflow-x-auto w-full">
                <table className="min-w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2 border">Id</th>
                            <th className="px-4 py-2 border">Name</th>
                            <th className="px-4 py-2 border">Image</th>
                            <th className="px-4 py-2 border">Price</th>
                            <th className="px-4 py-2 border">Ratings</th>
                            <th className="px-4 py-2 border">Cancellation</th>
                            <th className="px-4 py-2 border">Reservation</th>
                            <th className="px-4 py-2 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hotels.map((hotel) => (
                            <tr key={hotel.id} className="hover:bg-gray-400 text-sm">
                                <td className="px-4 py-2 border">{hotel.id}</td>
                                <td className="px-4 py-2 border">{hotel.name}</td>
                                <img className="w-15 h-20" src={hotel.img} alt="" />
                                <td className="px-4 py-2 border">{hotel.price}</td>
                                <td className="px-4 py-2 border">{hotel.rating}</td>
                                <td className="px-4 py-2 border">{hotel.freeCancellation ? "Yes" : "No"}</td>
                                <td className="px-4 py-2 border">{hotel.reservation ? "Available" : "Not Available"}</td>
                                <td className="py-2 px-4 border ">
                                    <button onClick={() => handleEditHotel(hotel)} className="'bg-blue- 500 hover:bg-blue-700 text-black px-3 py-2 rounded transition duration-200">Edit</button>
                                    <button onClick={() => handleDeleteHotel(hotel.id)} className="'bg-red-500 hover:bg-red-700 text-black px-3 py-2 rounded transition duration-200">Delete</button>
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
                        <input value={newHotel.name} onChange={handleChange} name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >Price</label>
                        <input value={newHotel.price} onChange={handleChange} name="price" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Image URL</label>
                        <input value={newHotel.img} onChange={handleChange} name="img" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >Rating</label>
                        <input value={newHotel.rating} onChange={handleChange} name="rating" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >Free Cancellation</label>
                        <input checked={newHotel.freeCancellation} onChange={handleChange} name="freeCancellation" type="checkbox" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reservation">Reservation Available</label>
                        <input checked={newHotel.reservation} onChange={handleChange} name="reservation" type="checkbox" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button onClick={editHotelId ? handleUpdateHotel : handleAddHotel} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            {editHotelId ? 'Update Hotel' : 'Add Hotel'}
                        </button>
                        <button onClick={() => { setShowForm(false); setEditHotelId(null); setNewHotel({ name: '', price: '', img: '', rating: '', freeCancellation: false, reservation: false, desc: '' }) }} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Hotels;

