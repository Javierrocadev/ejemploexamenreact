import React, { Component } from 'react'
import axios from 'axios'
import { NavLink, Navigate } from 'react-router-dom'
import Global from '../Global'
export default class Equipos extends Component {
    state={
        equipo:[]
    }
  loadEquipo=()=>{
    
    var request= "api/Equipos/"+ this.props.equipo
    var url = Global.apiApuestas + request
    axios.get(url).then(response=>{
        this.setState({
        equipo:response.data
         })      
    })
  }
  componentDidMount=()=>{
    this.loadEquipo()
  }
  componentDidUpdate=()=>{
    this.loadEquipo()
  }
  render() {
    return (
      
      <div className='container d-flex flex-column justify-content-center m-5'>
        <h1>Equipo {this.props.equipo}</h1>
        <h2>{this.state.equipo.nombre}</h2>
        <img className='img-thumbnail' style={{maxWidth:"300px"}} src={this.state.equipo.imagen} alt="equipo" />
        <h5>champions: {this.state.equipo.champions}</h5>
        <p>{this.state.equipo.descripcion}</p>
        <div>
        <NavLink className='btn btn-primary' to="/">vovler</NavLink>
        <NavLink className='btn btn-success' to={"/jugadores/"+this.state.equipo.idEquipo}>Jugadores</NavLink>
        
      </div>
      </div>
      
   
    )
  }
}
