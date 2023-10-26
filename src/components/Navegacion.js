import React, { Component } from 'react'
import { NavLink , Navigate} from 'react-router-dom'
import logo from '../assets/images/logo.png'
import Global from '../Global'
import axios from 'axios'

export default class Navegacion extends Component {
    state={
        equipos:[]
    }
    cajaJugador= React.createRef()
    loadEquipos=()=>{
        var request = "api/Equipos"
        var url = Global.apiApuestas+ request
        console.log(url)
        axios.get(url).then(response=>{
            this.setState({
                equipos: response.data
            })
        })
    }
    componentDidMount=()=>{
        this.loadEquipos()
    }
    buscarJugador=()=>{
        var jugadorbuscado= this.cajaJugador.current.value
        alert(jugadorbuscado) //
        return <NavLink to={"jugadorbuscado/"+jugadorbuscado}></NavLink>
    }
  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img src={logo} alt="Logo" width="30" height="34" class="d-inline-block align-text-top"/>
            </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                    Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/apuestas">
                    Apuestas
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Equipos
                </a>
                <ul className="dropdown-menu">
                    {
                        this.state.equipos.map((equipo,index)=>{
                            return(
                                <li><NavLink className="dropdown-item" to={"equipo/"+equipo.idEquipo}>{equipo.nombre}</NavLink></li>
                            )
                        })
                    }
                </ul>
                </li>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" ref={this.cajaJugador} placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" onClick={()=>this.buscarJugador()}>Search</button>
                    
                </form>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
