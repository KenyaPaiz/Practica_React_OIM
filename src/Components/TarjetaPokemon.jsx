import React, {Component} from "react";

export default class TarjetaPokemon extends Component{
    constructor(props){
        super(props)

        /** estado para guardar la informacion de cada pokemon */
        this.state = {
            pokemon: []
        }
    }

    /** metodo para obtener la informacion de cada pokemon en base a su URL */
    obtenerPokemonByUrl = async (url) => {
        let resultado = await fetch(url);
        let datos = await resultado.json();
        //console.log(datos);

        /** actualizando el estado en base a la url de cada pokemon */
        this.setState({
            pokemon: [datos]
        })
    }

    /** montando y renderizado al metodo obtenerPokemonByUrl() */
    componentDidMount(){
        this.obtenerPokemonByUrl(this.props.url);
    }

    render(){
        //console.log(this.state.pokemon)
        return (
            this.state.pokemon.map((personaje, i) => {
                return (
                    <div className="col-md-4" key={i}>
                        <div className="card mt-4">
                            <div className="card-header">
                                <b>{this.props.name}</b>
                            </div>
                            <img src={personaje.sprites.front_default} alt="pokemon" width={200}/>
                            <div className="card-body">
                                <p>URL: {this.props.url}</p>
                                <p>Height: {personaje.height}</p>
                                <p>Weight: {personaje.weight}</p>
                                <p>Specie: {personaje.species.name}</p>
                                {
                                    personaje.abilities.map((propiedad, i) => {
                                        return (
                                            <div key={i}>
                                                <p >Ability: {propiedad.ability.name}</p>
                                                <p>Slot: {propiedad.slot}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                )
            })
           
        )
    }
}