"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "./card";
import { useTheme } from "@/context/theme-context";
import Loading from "../loading";

export default function PokemonList() {
    const {search} = useTheme();
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=80")
        .then(res =>{
            if(search.length > 0) {
                    setPokemons(res.data.results.filter((pokemon: any) => pokemon.name.includes(search.toLowerCase())));
                } else {
                    setPokemons(res.data.results)
                }
            })
        .catch(err => console.error(err));
    }, [search]);
    return (
        <div className="mx-auto w-full p-4 ">
            {pokemons.length > 0 ? <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">{
                pokemons.map((pokemon: any, index) => (
                <PokemonCard key={pokemon.url} name={pokemon.name} url={pokemon.url} />
            ))}
            </div>  : <Loading/>}
        </div>
    );
}

