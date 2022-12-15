import React, {Component} from "react";

export default class Footer extends Component{
    

    /** renderizamos el componente */
    render(){
        return (
            <footer>
                <h3>Kenia Paiz - {this.props.fecha.getFullYear()}</h3>
            </footer>
        )
    }
}