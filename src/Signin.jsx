import React from "react";


function Signin(){
    return (
        <>
        <div className="signin-page h-screen flex flex-col justify-center items-center text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Sign In</h1>
      <form onSubmit={handleSubmit} className="bg-black bg-opacity-50 p-6 rounded">
        <div className="mb-4">
          <label className="block text-sm mb-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-2">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 rounded w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign In</button>
      </form>
    </div>
  
        </>
    )
}
export default Signin;            


