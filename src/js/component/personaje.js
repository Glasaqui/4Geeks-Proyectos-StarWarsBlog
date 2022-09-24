import React,{useEffect,useState} from "react";
import { Link,useParams } from "react-router-dom";

const Personaje = (props) => {
    let {id} = useParams()
    
    const [person,setPerson]=useState( )

    useEffect(async()=>{
        let resp= await fetch(process.env.API_URL+"people/"+id)
        let json= await resp.json()
        let personaje= json.result.properties
		setPerson(personaje)		
    },[id])


    return (


    <div>
        <h1>{person && person.name}</h1>
    </div>
    
    )};

export default Personaje;
