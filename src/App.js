import { useEffect, useState } from 'react';
import './App.css';
import Lista from './componentes/Lista/Lista';
import {BrowserRouter,Route , Switch} from 'react-router-dom';
import Render from './componentes/Render/Render';

function App() {
  const[nombreBusqueda,setNombreBusqueda]=useState('');
  const[idBusqueda,setIdBusqueda]=useState('');
  const[listaStar,setListaStar]=useState([]);

  useEffect(()=>{
    
    let configuracion = {
      method : 'GET'
    };
    fetch(`https://swapi.dev/api/${nombreBusqueda}/${idBusqueda}`, configuracion)
      .then(respuesta =>{
        if(respuesta.ok){
          return respuesta.json();
        }
    
        return "Esto no es lo que buscas"
      })
      .then(listaparametro => {
        //console.log(listaparametro , "esto es lista parametro")
        if(listaparametro){
        setListaStar((listaPrev)=> listaparametro)
        }
      })
  },[nombreBusqueda,idBusqueda])

  const buscarInformacion=(event)=>{
    event.preventDefault();
    let nombre = event.target.nombreBusqueda.value;
    let id = event.target.idBusqueda.value;
    setNombreBusqueda ((PrevNombre)=> nombre); 
    setIdBusqueda((PrevId)=>id);
  }
  console.log(nombreBusqueda)
  return (
    <div>
      <div >
        <form onSubmit={(event)=> buscarInformacion(event)} className='formulario'>
            <div>
            <label htmlFor='nombreBusqueda'>
                Search for:
            </label>
            <select id='nombreBusqueda'>
                <option value="people"> people </option>
                <option value="films"> films </option>
                <option value="starships"> starships </option>
                <option value="vehicles"> vehicles </option>
                <option value="species"> species </option>
                <option value="planets"> planets</option>
            </select>
            </div>
            <div>
            <label htmlFor='idBusqueda'>
                id:
            </label>
            <input type="text" id='idBusqueda' />
            </div>
            <div>      
            <button type='submit'>
              Search
            </button>
            </div>  
        </form>
        <div className='respuesta'>
          {
            <Lista listaStar={listaStar}  nombreBusqueda={nombreBusqueda} />
          }
        </div>
      </div>
    <BrowserRouter>
        <Route exact path="/:id" 
                render={(routeProps)=><Render {...routeProps}/>}/>
    </BrowserRouter>
    </div>
  );
}

export default App;
