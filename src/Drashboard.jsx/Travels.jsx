import React,{useEffect,useState} from "react";

const Travels=()=>{
    const [travels, setTravels] =useState([]);
    const[showForm, setShowForm] =useState([false]);
    const [editTravelId, setEditTravelId] = useState(null);
    const[newTravel, setNewTravel]=useState({
        name:'',
        price:'',
        img:'',
        rating:'',
        freeCancellation:false,
        reservation: false
        
    });

    useEffect(()=>{
        loadTravelsFromLocalStorage();
    },[]);

    const loadTravelsFromLocalStorage=() =>{
        const storedTravels=localStorage.getItem("travels")
        if(storedTravels){
            setTravels(JSON.parse(storedTravels));
        }
    };

    const saveTravelsFromLocalStorage =(travels) => {
        localStorage.setItem('travels',JSON.stringify(travels));
    };


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setNewTravel({
            ...newTravel,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleAddTravel = () => {
        setTravels([...travels, { ...newTravel, id: travels.length + 1 }]);
        saveTravelsFromLocalStorage([...travels, { ...newTravel, id: travels.length + 1 }]);
        setNewTravel({
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

    const handleEditTravel = (travel) => {
        setEditTravelId(travel.id);
        setNewTravel(travel);
        setShowForm(true);
    };

    const handleUpdateTravel = () => {
        const updatedTravels = travels.map(travel => 
            travel.id === editTravelId ? newTravel : travel
        );
        setTravels(updatedTravels);
        saveTravelsFromLocalStorage(updatedTravels);
        setEditTravelId(null);
        setNewTravel({
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

    const handleDeleteTravel= (id) => {
        const updatedTravels = travels.filter(travel => travel.id !== id);
        setTravels(updatedTravels);
        saveTravelsFromLocalStorage(updatedTravels);
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
                        {travels.map((travel) => (
                            <tr key={travel.id} className="hover:bg-gray-100 text-sm">
                                <td className="px-4 py-2 border">{travel.id}</td>
                                <td className="px-4 py-2 border">{travel.name}</td>
                                <img className="w-15 h-20" src={travel.img} alt="" />
                                <td className="px-4 py-2 border">{travel.price}</td>
                                <td className="px-4 py-2 border">{travel.rating}</td>
                                <td className="px-4 py-2 border">{travel.freeCancellation ? "Yes" : "No"}</td>
                                <td className="px-4 py-2 border">{travel.reservation ? "Available" : "Not Available"}</td>
                                <td className="py-7 px-4 border flex">
                                    <button onClick={() => handleEditTravel(travel)} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                                    <button onClick={() => handleDeleteTravel(travel.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='w-full flex items-center justify-center'>
                <button onClick={() => setShowForm(true)} className='bg-blue-500 text-white px-3 py-2 rounded'>Add</button>
            </div>

            {showForm && (
                <div className="w-full max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >Name</label>
                        <input value={newTravel.name} onChange={handleChange} name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >Price</label>
                        <input value={newTravel.price} onChange={handleChange} name="price" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Image URL</label>
                        <input value={newTravel.img} onChange={handleChange} name="img" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >Rating</label>
                        <input value={newTravel.rating} onChange={handleChange} name="rating" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >Free Cancellation</label>
                        <input checked={newTravel.freeCancellation} onChange={handleChange} name="freeCancellation" type="checkbox" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reservation">Reservation Available</label>
                        <input checked={newTravel.reservation} onChange={handleChange} name="reservation" type="checkbox" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button onClick={editTravelId ? handleUpdateTravel: handleAddTravel} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            {editTravelId ? 'Update Travels' : 'Add Travels'}
                        </button>
                        <button onClick={() => { setShowForm(false); setEditTravelId(null); setNew({ name: '', price: '', img: '', rating: '', freeCancellation: false, reservation: false, desc: '' }) }} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
 
export default Travels;