import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import Apuestas from './Apuestas'
import { Navigate } from 'react-router-dom'

export default class InsertarApuestas extends Component {
    cajaUsuario = React.createRef()
    cajaAtletico = React.createRef()
    cajaRealMadrid= React.createRef()
    cajaFecha= React.createRef()
    state={
        statusInsertado:false
    }
    crearApuesta =(e)=>{
   
        e.preventDefault();
        var usuario=  this.cajaUsuario.current.value
        var ateletico= this.cajaAtletico.current.value
        var madrid = this.cajaRealMadrid.current.value
        var fecha = this.cajaFecha.current.value
        var resultado =" "+ ateletico +"-"+madrid+" "
        var apuesta={
            idApuesta:65,
            usuario:usuario,
            resultado:resultado,
            fecha:fecha 
        }

        console.log(apuesta)
        var request = "api/Apuestas"
        var url = Global.apiApuestas+request
        axios.post(url,apuesta).then(response=>{
            this.setState({
                statusInsertado:true
            })
        })
    }
  render() {
    if(this.state.statusInsertado==true){
       return <Navigate to="/apuestas"></Navigate>
    }
    else{
        return (
            <div>
            <div className='m-5'>
                <h3 className='text-center bg-dark text-light'>Nueva apuesta</h3>
                <form>
                    <label>usuario</label> 
                    <input type="text" ref={this.cajaUsuario} className='form-control'/>
                    <label>real madrid</label> 
                    <input type="text" ref={this.cajaRealMadrid} className='form-control'/>
                    <label>Atletico de madrid</label> 
                    <input type="text" ref={this.cajaAtletico} className='form-control'/>
                    <label>Fecha</label> 
                    <input type="text" ref={this.cajaFecha} className='form-control mb-3'/>
                    <button onClick={this.crearApuesta} className='btn btn-info'>Crear apuesta</button>
                </form>
          </div>
          </div>
        )
    }


 
  }
}
