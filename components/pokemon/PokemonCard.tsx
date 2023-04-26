import { SmallPokemon } from "@/interfaces"
import { FC } from "react"
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";


interface Props {
    pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {

    const router = useRouter()    
    const { id, img, name} = pokemon

    const onClick = () => {
      router.push(`/name/${ pokemon.name }`)
    }

  return (
    <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } key={ id }>
    <Card 
      isHoverable
      isPressable
      css={{ w: "100%", h: "200px", border:"none" }}
      onClick={ onClick }
    >
      <Card.Body css={{ p: 2 }}>
        <Card.Image
          src={ img }
          width="100%"
          height={ 140 }
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#0f111466",
          borderTop: "$borderWeights$light  $gray800",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row justify="space-between">
          <Text transform='capitalize'>{ name }</Text>
          <Text>#{ id }</Text>
        </Row>
      </Card.Footer>
    </Card>
  </Grid>
  )
}
