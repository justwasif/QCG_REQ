import { Navigate } from "react-router-dom";
function Signup(){
    const navigation=Navigate();
    const handleSignup=()=>{
        navigation("/")
        
        
    }
    return(
        
  <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a
        href="#"
        className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >

      </a>

      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create an account
          </h1>

          <form className="space-y-4 md:space-y-6">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="name@company.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
                required
              />
            </div>

            <div>
              <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Confirm password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
                required
              />
            </div>

            <button
              type="submit"onClick={handleSignup}
              className="w-full text-white bg-primary-600 rounded-lg px-5 py-2.5"
            >
              Create an account
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);
    
    
    
}
export default Signup;