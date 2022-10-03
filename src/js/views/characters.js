import React,{useContext} from "react";

import { Context } from "../store/appContext";
import Card from "../component/card";

const Characters = ()=>{
    const {store} = useContext(Context)
    return(
        <>
        <h1>Personajes</h1>
        <div className="d-flex flex-row flex-nowrap overflow-auto">
            {store.people && store.people.map((character,index) => <Card className="p-1" key={index} name={{id:index+1,...character}} /> )}

        </div>
        </>
    )

}

export default Characters;