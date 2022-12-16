import React, {Component} from "react";
import TarjetaPokemon from './TarjetaPokemon';

export default class ListaPokemones extends Component{
    constructor(props){
        super(props)

        /** estado => state, setState */
        this.state = {
            pokemones: []
        }
    }

    /** metodo para obtener la informacion de la api de pokemon */
    obtenerPokemones = async () => {
        let respuesta = await fetch("https://pokeapi.co/api/v2/pokemon");
        let datos = await respuesta.json();
        //console.log(datos);
        this.setState({
            pokemones: [...datos.results]
        })
    }

    /** ciclos de vida => componentDidMounth, componenteUpdatetDidMount, componentWillMounth */
    componentDidMount(){
        this.obtenerPokemones();
    }

    render(){
        //console.log(this.state.pokemones)
        return (
           <div className="row">
                {
                    /** Retornamos la informacion de los pokemones en otro componente */
                    this.state.pokemones.map((pokemon, indice) => {
                        return <TarjetaPokemon key={indice} {...pokemon} />
                    })
                }
           </div>
        )
    }

}