import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import Swal from 'sweetalert2'
export default class Apuestas extends Component {
  state={
    apuestas:[]
  }
  loadApuestas=()=>{
    var request= "api/Apuestas"
    var url = Global.apiApuestas+request
    axios.get(url).then(response=>{
      this.setState({
        apuestas:response.data
      })
    })
  }
  deleteApuesta=(idApuesta)=>{
    Swal.fire({
      title: 'estas seguro de eliminar la apuesta? id:'+idApuesta,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        var request = "api/Apuestas/"+idApuesta
    var url= Global.apiApuestas + request
    axios.delete(url).then(response=>{
      this.loadApuestas()
    })
        Swal.fire(
          'Eliminada!',
          'Tu apuesta se ha eliminado.',
          '¡Bien!'
        )
      }
    })
    
  }
  componentDidMount=()=>{
    this.loadApuestas()
  }
  render() {
    return (
      <div className='m-5'>
        <NavLink to="/insertarapuestas" className='btn btn-info'>Realizar apuesta</NavLink>
        <h2 className='text-center bg-dark text-light'>local:real madrid, visitante:atético de madrid</h2>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>usuario</th>
              <th>resultado</th>
              <th>fecha</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.apuestas.map((apuesta,index)=>{
                return(
                  <tr key={index}>
                    <td>{apuesta.usuario}</td>
                    <td>{apuesta.resultado}</td>
                    <td>{apuesta.fecha}</td>
                    <td><button onClick={()=>this.deleteApuesta(apuesta.idApuesta)} className='btn btn-danger'>Eliminar apuesta</button></td>
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
