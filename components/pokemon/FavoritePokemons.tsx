import { Grid } from "@nextui-org/react";
import { FavoriteCardPokemon } from "./FavoriteCardPokemon";
import { FC } from "react";
import { Pokemon } from '../../interfaces/pokemon-full';

interface Props {
  favoritePokemons: number[]
}

export const FavoritePokemons: FC<Props> = ({ favoritePokemons }) => {
  return (
    <Grid.Container gap={ 2 } direction="row" justify="flex-start">
        {
            favoritePokemons.map( id =>(
            <Grid xs={6} sm={3} md={2} xl={1} key={ id }>
                <FavoriteCardPokemon pokemonId={ id }/>
            </Grid>
            ))
        }
    </Grid.Container>
  )
}
