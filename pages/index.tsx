import { NextPage } from "next"
import { GetStaticProps } from 'next'
import { Layout } from "@/components/layouts"
import { pokeApi } from "@/api";
import { PokemonListResponse } from "@/interfaces";

const HomePage: NextPage = (props) => {
  
  return (
    <Layout title="Listado de Pokémons">

      <ul>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
      </ul>

    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const { data } = await pokeApi.get<PokemonListResponse>('pokemon?limit=151')

  return {
    props: {
      pokemons: data.results
    }
  }
}

export default HomePage;