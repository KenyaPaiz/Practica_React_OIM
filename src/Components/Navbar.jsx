/** componente de clase */
import React, { Component } from "react";

export default class Navbar extends Component{
    /** props => son propiedades que permiten enviar datos y recibir de un componente a otro */

    /** renderizando el componente */
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a href="#" className="navbar-brand">Listado de Usuarios - {this.props.autor}</a>
                </div>
            </nav>
        )
    }
}