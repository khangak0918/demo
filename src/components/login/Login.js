import React from 'react'

function Login() {
  return (
    <div>
      <div className="w-full h-screen flex justify-center align-center">
      <div className="w-4/12 bg-white relative">
        <div className="ml-32 ">
          <form className="w-full mt-12 bg-white rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5" >
            <div className="mb-6">
              <label
                className="block text-primary-deep-green text-2xl"
              >
                Name:
              </label>
              <input
                type="text"
                placeholder="name"
                onChange=""
                className="w-full h-16 px-3 mt-2 text-2xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-deep-green"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-primary-deep-green text-2xl"
              >
                Email:
              </label>
              <input
                type="email"
                placeholder="@email"
                onChange=""
                className="w-full h-16 px-3 mt-2 text-2xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-deep-green"
              />
              <p className='font-thin line-clamp-1 text-stone-400'>Forget password</p>
            </div>
            {/* <div className='mb-6'> 
            
            </div> */}
            <button
              className="w-full h-16 bg-sky-500 text-white text-2xl font-semibold rounded-xl focus:outline-none hover:bg-sky-800"
            >
              Login
            </button>
          </form>
        </div>

      </div>
    </div>
    </div>
  );
}

export default Login;