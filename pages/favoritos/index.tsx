import { NextPage } from "next"
import { Layout } from "@/components/layouts"
import { SmallPokemon } from "@/interfaces";


interface Props {
  pokemons: SmallPokemon[]
}

const FavoritosPage: NextPage<Props> = ({ pokemons }) => {  

  return (
    <Layout title="Listado de Favoritos">

     <h1>Lista de Favoritos</h1>

    </Layout>
  )
}

export default FavoritosPage;