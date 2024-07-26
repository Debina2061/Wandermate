import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [editUserId, setEditUserId] = useState(null);
    const [newUser, setNewUser] = useState({
        id: '',
        name: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        loadUsersFromLocalStorage();
    }, []);

    const loadUsersFromLocalStorage = () => {
        const storedUsers = localStorage.getItem('users');
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        }
    };

    const saveUsersToLocalStorage = (users) => {
        localStorage.setItem('users', JSON.stringify(users));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUser({
            ...newUser,
            [name]: value
        });
    };

    const handleAddUser = () => {
        setUsers([...users, newUser]);
        saveUsersToLocalStorage([...users, newUser]);
        setNewUser({
            id: '',
            name: '',
            email: '',
            password: ''
        });
        setShowForm(false);
    };

    const handleEditUser = (user) => {
        setEditUserId(user.id);
        setNewUser(user);
        setShowForm(true);
    };

    const handleUpdateUser = () => {
        const updatedUsers = users.map(user => 
          user.id === editUserId ? newUser : user
        );
        setUsers(updatedUsers);
        saveUsersToLocalStorage(updatedUsers);
        setEditUserId(null);
        setNewUser({
            id: '',
            name: '',
            email: '',
            password: ''
        });
        setShowForm(false);
    };

    const handleDeleteUser = (id) => {
        const updatedUsers = users.filter(user => user.id !== id);
        setUsers(updatedUsers);
        saveUsersToLocalStorage(updatedUsers);
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
                            <th className="px-4 py-2 border">Password</th>
                            <th className="px-4 py-2 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-100 text-sm">
                                <td className="px-4 py-2 border">{user.id}</td>
                                <td className="px-4 py-2 border">{user.name}</td>
                                <td className="px-4 py-2 border">{user.email}</td>
                                <td className="px-4 py-2 border">{user.password}</td>
                                <td className="py-7 px-4 border flex">
                                    <button onClick={() => handleEditUser(user)} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                                    <button onClick={() => handleDeleteUser(user.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className='w-full flex items-center justify-center'>
                <button onClick={() => setShowForm(true)} className='bg-blue-500 text-white px-3 py-2 rounded'>Add User</button>
            </div>

            {showForm && (
                <div className="w-full max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Id</label>
                        <input value={newUser.id} onChange={handleChange} name="id" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                        <input value={newUser.name} onChange={handleChange} name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input value={newUser.email} onChange={handleChange} name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input value={newUser.password} onChange={handleChange} name="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button onClick={editUserId ? handleUpdateUser : handleAddUser} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            {editUserId ? 'Update User' : 'Add User'}
                        </button>
                        <button onClick={() => { setShowForm(false); setEditUserId(null); setNewUser({ id: '', name: '', email: '', password: '' }) }} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Users;
