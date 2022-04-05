import './Lista.css'
import axios from 'axios';
import {useState } from 'react';
function Lista(props){
    if (props.listaStar==="Esto no es lo que buscas"){
        return(<div>
            <img src='https://as01.epimg.net/meristation/imagenes/2021/01/18/noticias/1610985143_304525_1610985184_noticia_normal.jpg'/>
            <h1>Estos no son los droides que está buscando</h1>
        </div>)
    }
    else{
    if(props.nombreBusqueda==='people'){
        const [nombre,setNombre]=useState('')
        axios.get(`${props.listaStar.homeworld}`)
        .then(respuesta=>{
            setNombre((listaPrev)=>respuesta.data.name);
          })
          .catch(err=>{
           console.log(err);
         })
    return(
        <div>
            <h1>{props.listaStar.name}</h1>
            <p>Hair color: {props.listaStar.hair_color}</p>
            <p>Birth year: {props.listaStar.birth_year}</p>
            <p>Homeworld: {nombre}</p>
        </div>
    )}
    if(props.nombreBusqueda==='films' ){
        return(
            <div>
                <h1>{props.listaStar.title}</h1>
                <p>Description: {props.listaStar.opening_crawl}</p>
                <p>Director: {props.listaStar.director}</p>
                <p>Producer: {props.listaStar.producer}</p>
            </div>
        )
    }
    if(props.nombreBusqueda==='vehicles'){
        return(
            <div>
                <h1>{props.listaStar.name}</h1>
                <p>Model: {props.listaStar.model}</p>
                <p>maximum speed: {props.listaStar.max_atmosphering_speed}</p>
                <p>class: {props.listaStar.vehicle_class}</p>
            </div>
        )
    }
    if(props.nombreBusqueda==='starships'){
        return(
            <div>
                <h1>{props.listaStar.name}</h1>
                <p>Model: {props.listaStar.model}</p>
                <p>maximum speed: {props.listaStar.max_atmosphering_speed}</p>
                <p>class: {props.listaStar.starship_class}</p>
            </div>
        )
    }
    if(props.nombreBusqueda==='species'){
        return(
            <div>
                <h1>{props.listaStar.name}</h1>
                <p>classification: {props.listaStar.classification}</p>
                <p>average_height: {props.listaStar.average_height}</p>
                <p>hair_colors: {props.listaStar.hair_colors}</p>
            </div>
        )
    }
    if(props.nombreBusqueda==='planets'){
        return(
            <div>
                <h1>{props.listaStar.name}</h1>
                <p>climate: {props.listaStar.climate}</p>
                <p>terrain: {props.listaStar.terrain}</p>
                <p>population: {props.listaStar.population}</p>
            </div>
        )
    }
}

}

export default Lista;