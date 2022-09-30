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

        <div class="card mb-3"  style={{maxWidth: "840px"}} >
                
                <hr className="my-4" />
                <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://starwars-visualguide.com/assets/img/characters/${id}.jpg" className="img-fluid rounded-start" alt="Imágenes Star Wars"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{person && person.name}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                </div>
                <hr className="my-4" />
                <div className="container text-center">
                <div className="row">
                    <div className="col-6 col-sm-4">Gender:</div>
                    <div className="col-6 col-sm-4">Birth Year:</div>

                   
                    <div className="w-100 d-none d-md-block"></div>

                    <div className="col-6 col-sm-4">{person && person.gender}</div>
                    <div className="col-6 col-sm-4">{person && person.birth_year}</div>
                </div>
                </div>
               <p></p>
                <Link to="/">
                    <span className="btn btn-primary btn-lg" href="#" role="button">
                        Back home
                    </span>
                </Link>
            </div>

    
    )};

export default Personaje;
