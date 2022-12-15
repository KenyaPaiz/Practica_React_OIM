import React, {Component} from "react";
import Logo from '../img/logo.webp';

export default class Personas extends Component{
    /** utilizando las props para iterar un arreglo de personas */
    constructor(props){
        super(props)
    }

    render(){
        /** map() => valores del arreglo, indice */
        const lista = this.props.arreglo_persona.map((persona, indice) => {
            return (
                <div key={indice} className="col-md-4" >
                    <div className="card mt-4">
                        <div className="card-header text-center">
                            {persona.nombre} {persona.apellido}
                        </div>
                        <div className="text-center">
                            <img src={Logo} alt="Personas" width={200} className="img-fluid"/>
                        </div>
                        <div className="card-body">
                            <p><b>Direccion: </b> {persona.direccion}</p>
                            <p><b>Telefono: </b> {persona.telefono}</p>
                            <p><b>Correo: </b> {persona.correo}</p>
                        </div>  
                    </div>
                </div>
            )
        })
        return (
            <div className="row">{lista}</div>
        )
    }

}