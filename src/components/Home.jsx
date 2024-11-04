import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
    <nav className="py-5 bg-[#FFCCEA]">
      <div className="container">
        <div className="main flex justify-around">
          <div className="logo">
            <h1>Alamin Islam </h1>
          </div>
          <div className="navbar">
            <div className="button">
              <Link to="/Login" className="py-1 px-3 text-[24px] border-solid border-[2px] border-red-500 bg-green-500 rounded-lg font-bold hover:text-white hover:bg-red-500 hover:border-green active:scale-[1.1]" >Login</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Home