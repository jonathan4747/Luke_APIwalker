import './Render.css'
import axios from 'axios';
import {useState } from 'react';
function Render (props){
    console.log(props)
    const [nombre,setNombre]=useState('')
    axios.get(`https:/swapi.dev/api/people/${props.match.params.id}`)
    .then(respuesta=>{
        setNombre((listaPrev)=>respuesta.data.name);
        })
        .catch(err=>{
        console.log(err);
        })
    
    return(
        <div>
            <h1>{nombre}</h1>
        </div>
    )
}
export default Render