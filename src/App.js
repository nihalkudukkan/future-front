import { useNavigate } from 'react-router-dom';
import './App.css';
import thallumala from "./asset/thallumala.jpg"

function App() {
  let navigate = useNavigate();


  return (
    <div className="page">
      <div className='movie__box'>
        <img src={thallumala} alt="" className='clickable' onClick={()=>navigate("/movie/thallumala")}/>
      </div>
      <div className='movie__box'>
       <img src={thallumala} alt="" />
      </div>
      <div className='brand'>
        <h1>ELEVATE</h1>
        <input type="text" name="" id="" placeholder='search by movie'/>
        <input type="text" name="" id="" placeholder='search by region'/>
      </div>
      <div className='movie__box'>
       <img src={thallumala} alt="" />
      </div>
      <div className='movie__box'>
       <img src={thallumala} alt="" />
      </div>
    </div>
  );
}

export default App;
