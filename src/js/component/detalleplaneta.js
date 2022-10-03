import React,{useEffect,useState} from "react";
import { Link,useParams } from "react-router-dom";

const Detalleplaneta = (props) => {
    let {id} = useParams()
    
    const [planeta,setPlaneta]=useState( )

    useEffect(async()=>{
        let resp= await fetch(process.env.API_URL+"planets/"+id)
        let json= await resp.json()
        let planetas= json.result.properties
		setPlaneta(planetas)		
    },[id])


    return (

        <div className='w-full h-screen flex flex-col text-center' >
        <div  class="card mb-3 mx-auto"  style={{maxWidth: "540px"}} >
                
                <hr className="my-4" />
                <div className="row g-0">
                <div className="col-md-4">
                    <img src={'https://starwars-visualguide.com/assets/img/planets/'+id+'.jpg'} className="img-fluid rounded-start" alt="Planetas Star Wars"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{planeta && planeta.name}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                </div>
                <hr className="my-4" />
                <div className="container text-center">
                <div className="row">
                    <div className="col-6 col-sm-4">Climate:</div>
                    <div className="col-6 col-sm-4">Diameter:</div>

                   
                    <div className="w-100 d-none d-md-block"></div>

                    <div className="col-6 col-sm-4">{planeta && planeta.climate}</div>
                    <div className="col-6 col-sm-4">{planeta && planeta.diameter}</div>


                </div>
                </div>
               <p></p>
                <Link to="/">
                    <span className="btn btn-primary btn-lg" href="#" role="button">
                        Back home
                    </span>
                </Link>
            </div>
        </div>
    
    )};

export default Detalleplaneta;
