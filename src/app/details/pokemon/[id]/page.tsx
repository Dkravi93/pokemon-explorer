import axios from "axios";

export async function generateStaticParams() {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10");
    const pokemons = res.data.results;

    return pokemons.map((pokemon: any) => ({
        id: pokemon.url.split("/")[pokemon.url.split("/").length - 2],
    }));
}

export default async function PokemonDetail({ params }: { params: { id: string } }) {
    const { id } = await params;
    
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = res.data;

    return (
        <div className="p-6 text-center bg-blue-300">
            <h1 className="text-3xl font-bold capitalize">{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className="mx-auto bg-blue-300 transition-opacity ease-in duration-700 opacity-100 hover:opacity-0" />
            <p className="mt-4"><strong>Abilities:</strong> {pokemon.abilities.map(a => a.ability.name).join(", ")}</p>
            <p><strong>Type:</strong> {pokemon.types.map(t => t.type.name).join(", ")}</p>
            <p><strong>Stats:</strong></p>
            <ul>
              {pokemon.stats.map(stat => (
                  <li key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</li>
              ))}
            </ul>
        </div>
    );
}
