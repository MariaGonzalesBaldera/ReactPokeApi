import { FormEvent, useState } from "react"
import { getPokemon } from "../../services";

export default function SeachPokemon(){
    const [name, setName]= useState<string>("")
    const [pokemon, setPokemon]= useState<any>(null)
    const handleSubmit= async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if (!name) return;
        const pokemon = await getPokemon(name)
        setPokemon(pokemon)
    }

    return(
        <>
            <h1>Search Pokemon</h1>
            <div>
                <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={(e)=>setName(e.target.value)} placeholder="Ingresa nombre del pokemon" />
                <button type="submit">Buscar</button>
                </form>
            </div>
            <div>
                <img src="" alt=""/>
                <p>Nombre del pokemon</p>
            </div>
        </>
    )
}