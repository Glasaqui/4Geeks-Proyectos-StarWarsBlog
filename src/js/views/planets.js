import React,{useContext} from "react";
import "../../styles/home.css";
import Cardplanet from "../component/cardplanet";
import { Context } from "../store/appContext";

//function Planets ( ) {
//
//}

const Planets = ()=>{
    const {store} = useContext(Context)
    return(
        <>
        <h1>Planetas</h1>
        <div className="d-flex flex-row flex-nowrap overflow-auto">
        {store.planets && store.planets.map((planets,index) => <Cardplanet className="p-1" key={index} name={{id:index+1,...planets}} /> )}

        </div>
        </>
   )

}

export default Planets;