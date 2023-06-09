import { Card } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";

interface Props {
    pokemonId: number
}

export const FavoriteCardPokemon: FC<Props> = ({ pokemonId }) => {

    const router = useRouter()

    const onFavoriteClicked = () => {
        router.push(`/pokemon/${ pokemonId }`)
    }

  return (
    <Card
        isHoverable
        isPressable
        css={{ padding: 10, border: 'none' }}
        onClick={ onFavoriteClicked }
        >
        <Card.Image 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokemonId }.svg`}
            width={'100%'}
            height={140}
        />
    </Card>
  )
}
