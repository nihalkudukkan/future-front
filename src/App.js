import './App.css';
import thallumala from "./asset/thallumala.jpg"

function App() {
  return (
    <div className="page">
      <div className='movie__box'>
        <img src={thallumala} alt="" />
      </div>
      <div className='movie__box'>
       <img src={thallumala} alt="" />
      </div>
      <div className='brand'>
        <h1>Elevate</h1>
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
