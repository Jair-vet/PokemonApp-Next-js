import { Layout } from "@/components/layouts"
import { NoFavorites } from "@/components/ui";
import { useEffect, useState } from "react";
import { localFavorites } from "@/utils";


const FavoritosPage = () => {  

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons( localFavorites.pokemons() )
  }, [])

  return (
    <Layout title="Listado de Favoritos">

     <NoFavorites />

    </Layout>
  )
}

export default FavoritosPage;