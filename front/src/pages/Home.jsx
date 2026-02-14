import { Link,Outlet, useNavigate } from "react-router-dom"

export default function Home(){
    const navigate=useNavigate();
    const handleWeb=()=>{
        navigate("/web1")
    }
    const handleCore=()=>{
        navigate("/core")

    }
    const handleDesign=()=>{
        navigate("/design")

    }
    
    return (
  <div className="min-h-screen flex items-center justify-center bg-gray-800">
    <div className="max-w-sm rounded-xl overflow-hidden shadow-2xl bg-white">
      
      
      <img
        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
        alt="Card"
        className="w-full h-56 object-cover"
      />

      
      <div className="bg-gray-100 p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Card title
        </h2>
        <p className="text-gray-600 text-sm mb-5">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>

        <button onClick={handleCore} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md transition duration-300">
          core
        </button>
      </div>
    </div>
    <div className="max-w-sm rounded-xl overflow-hidden shadow-2xl bg-white">
      
      
      <img
        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
        alt="Card"
        className="w-full h-56 object-cover"
      />

      
      <div className="bg-gray-100 p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Card title
        </h2>
        <p className="text-gray-600 text-sm mb-5">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>

        <button onClick={handleDesign} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md transition duration-300">
          design
        </button>
      </div>
    </div>
    <div className="max-w-sm rounded-xl overflow-hidden shadow-2xl bg-white">
      
    
      <img
        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
        alt="Card"
        className="w-full h-56 object-cover"
      />

     
      <div className="bg-gray-100 p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Card title
        </h2>
        <p className="text-gray-600 text-sm mb-5">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>

        <button onClick={handleWeb} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md transition duration-300">
          web
        </button>
      </div>
    </div>
  </div>
);
}