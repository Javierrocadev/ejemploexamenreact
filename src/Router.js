import React, { Component } from 'react'
import {Routes, Route, BrowserRouter, useParams} from 'react-router-dom';
//import components
import Navegacion from './components/Navegacion';
import Home from './components/Home';
import Apuestas from './components/Apuestas'
import InsertarApuestas from './components/InsertarApuestas';
import Equipos from './components/Equipos';
import Jugadores from './components/Jugadores';
import DetallesJugador from './components/DetallesJugador';
import BuscadorJugadores from './components/BuscadorJugadores'
// import Menu from './Menu';
// import Home from './Home';
export default class Router extends Component {
  render() {
    // function DetalleDepartamentoElement() {
    //     var {iddepartamento, nombre, localidad} = useParams();
    //     return <DetalleDepartamento iddepartamento={iddepartamento}
    //         nombre={nombre} localidad={localidad}/>
    // }
    function EquiposElement(){
        var {equipo}=useParams()
        return <Equipos equipo={equipo}/>
    }
    function JugadoresElement(){
        var {equipo}=useParams()
        return <Jugadores equipo={equipo}/>
    }
    function DetallesJugadorElement(){
        var {idjugador}=useParams()
        var {equipo}=useParams()
        return <DetallesJugador equipo={equipo} idjugador={idjugador}/>
    }
    function BuscadorJugadoresElement(){
        var {idjugador}=useParams()
        return <BuscadorJugadores  idjugador={idjugador}/>
    }
    return (
      <BrowserRouter>
        <Navegacion/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/apuestas" element={<Apuestas/>}/>
            <Route path="/insertarapuestas" element={<InsertarApuestas/>}/>
            <Route path="/equipo/:equipo" element={<EquiposElement/>}/>
            <Route path="/jugadores/:equipo" element={<JugadoresElement/>}/>
            <Route path="/detallesjugador/:equipo/:idjugador" element={<DetallesJugadorElement/>}/>
            <Route path="/jugadorbuscado/:idjugador" element={<BuscadorJugadoresElement/>}/>
            {/* <Route path="/create" element={<CreateDepartamento/>}/>
            <Route path="/details/:iddepartamento/:nombre/:localidad" element={<DetalleDepartamentoElement/>}/> */}
        </Routes>
      </BrowserRouter>
    )
  }
}