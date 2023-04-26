import { Layout } from "@/components/layouts"
import { FavoritePokemons } from "@/components/pokemon";
import { useEffect, useState } from "react";
import { localFavorites } from "@/utils";
import { NoFavorites } from "@/components/ui";


const FavoritosPage = () => {  

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons( localFavorites.pokemons() )
  }, [])

  return (
    <Layout title="Listado de Favoritos">

      {
        favoritePokemons.length === 0 
        ? (<NoFavorites />)
        : (

          <FavoritePokemons favoritePokemons={favoritePokemons}/>
        )
      }
     

    </Layout>
  )
}

export default FavoritosPage;