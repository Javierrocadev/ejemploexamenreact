import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
export default class Jugadores extends Component {
    state={
        jugadores:[]
    }
    loadJugadores=()=>{
        var request="/api/Jugadores/JugadoresEquipos/"+this.props.equipo
        var url = Global.apiApuestas+request
        axios.get(url).then(response=>{
            this.setState({
                jugadores: response.data
            })
        })
    }
    componentDidMount=()=>{
        this.loadJugadores()
    }
  render() {
    return (
       <div className='m-5'>
        <h1>Equipo {this.props.equipo}</h1>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>nombre</th>
                    <th>imagen</th>
                    <th>detalles</th>
                </tr>
            </thead>
            <tbody>
                
                    {
                        this.state.jugadores.map((jugador, index)=>{
                            return(
                                <tr>
                                    <td>{jugador.nombre}</td>
                                    <td><img src={jugador.imagen} alt='d'/></td>
                                    <td><NavLink to={"/detallesjugador/"+this.props.equipo+"/"+jugador.idJugador} className='btn btn-danger' >Detalles</NavLink></td>
                                </tr>
                            )
                        })
                    }
                
            </tbody>
        </table>
       </div>
    )
  }
}
