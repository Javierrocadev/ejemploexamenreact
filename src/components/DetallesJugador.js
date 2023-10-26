import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default class DetallesJugador extends Component {
    state={
        detallesJugador:[]
    }

    loadDetallesJugador=()=>{
        var request= "api/jugadores/"+this.props.idjugador
        var url = Global.apiApuestas + request 
        axios.get(url).then(response=>{
            this.setState({
                detallesJugador:response.data
            })
        })
    }
    componentDidMount=()=>{
        this.loadDetallesJugador()
    }
  render() {
    return (
      <div className='container m-5'>
        <h1>DetallesJugador: {this.props.idjugador}</h1>
        <img src={this.state.detallesJugador.imagen} alt='d'/>
        <h2>{this.state.detallesJugador.posicion}</h2>
        <p>fecha de nacimiento: {this.state.detallesJugador.fechaNacimiento}</p>
        <p>País: {this.state.detallesJugador.pais}</p>
        <NavLink className='btn btn-info' to={"/jugadores/"+this.props.equipo}>Volver a jugadores</NavLink>
    </div>
    )
  }
}
