

import React from "react";


function Signup() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-300" >
            <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                <h1 className="text-2xl font-bold text-blue-600 mb-4">Sign Up</h1>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">Full Name:</label>
                        <input
                            type="text"
                            placeholder=" Enter Full Name"
                            
                        
                            
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email:</label>
                        <input
                            type="email"
                            placeholder=" Enter email"
                            
                            
            
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700"> New Password:</label>
                        <input
                            type="password"
                            placeholder=" New password"
                            
                        
                            
                        />
                         <div className="mb-6">
                        <label htmlFor="gender" className="block text-gray-700">Gender:</label>
                        <select
                            id="gender"
                            name="gender"
                            className="form-select mt-1 block w-full"
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                            
                        </select>
                </div>

                    <div className="mb-4">
                        <label htmlFor="dob" className="block text-gray-700">Date of Birth:</label>
                        <input
                            type="date"
                            placeholder=" Enter dob"
                            
                        
                            
                        />
                    </div>

                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
