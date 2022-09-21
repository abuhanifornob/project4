import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countris from './component/Countries/Countris';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';

function App() {
    return ( 
    <div className = "App" >

        { /* <RestCountry></RestCountry> */ } 
        <Header></Header>
        <Countris></Countris>
        <Footer></Footer>
        </div>
    );
}







// function RestCountry(){
//   const [countris,setCountris]=useState([]);
//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res=>res.json())
//     .then(data=>setCountris(data))
//   },[])

//   return(
//     <div>
//        <h1>I Coming Every Rest Countyry  !!!!!!!</h1>
//        {
//         countris.map(country=><DisplyCountryInformation name={country.name.common} population={country.population}></DisplyCountryInformation>)
//        }

//     </div>
//   )
// }

// function DisplyCountryInformation(prop){
//   return (
//     <div className='countryStyle'>
//       <h1>{prop.name}</h1>
//       <h4>{prop.population}</h4>

//     </div>
//   )
// }

export default App;