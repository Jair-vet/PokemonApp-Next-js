import { Layout } from '../../components/layouts';
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { pokeApi } from '@/api';
import { Pokemon, Ability } from '@/interfaces';
import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react';
import { AbilitiesPokemon } from '@/components/pokemon';
import { useEffect, useState } from 'react';
import { getPokemonInfo, localFavorites } from '@/utils';
import confetti from 'canvas-confetti'

interface Props {
    pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

    const [isInFavorites, setIsInFavorites] = useState(false)
    
    const { abilities } = pokemon

    useEffect(() => {
      setIsInFavorites(localFavorites.existInFavorites( pokemon.id ))
    }, [])

    const onToggleFavorite = () => {
      localFavorites.toggleFavorite( pokemon.id )
      setIsInFavorites( !isInFavorites )

      if( !isInFavorites ) return

      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0
        }
      })
    }
    
    return (
        <Layout title={ pokemon.name }>
            <Grid.Container css={{ marginTop: '5px' }} gap={ 2 }>
              {/* Tarjeta de Imagen del Pokémon */}
              <Grid xs={ 12 } sm={ 4 }>
                <Card
                  isHoverable
                  css={{ padding: '30px', border: 'none' }}
                > 
                  <Card.Body>
                    <Card.Image 
                      src={ pokemon.sprites.other?.dream_world.front_default || '/no-image.png' }
                      alt={ pokemon.name }
                      width='100%'
                      height={ 200 }
                    />
                  </Card.Body>
                </Card>
              </Grid>

              {/* Tarjeta de la Información del Pokémon */}
              <Grid xs={ 12 } sm={ 8 }>
                <Card css={{ padding: '30px', border: 'none' }} >
                  <Card.Header css={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', '@sm':{ display: 'flex', flexDirection: 'row' }}}>
                    <Text h1 transform='capitalize'>{pokemon.name}</Text>

                    <Button
                      color='gradient'
                      ghost={ !isInFavorites }
                      onPress={ onToggleFavorite }
                    >
                      { isInFavorites ? 'Quitar de Favoritos' : 'Guardar en Favoritos' }
                    </Button>
                  </Card.Header>

                  <Card.Body>
                    <div className='flex items-center text-center'>
                      <p className='text-3xl font-extrabold'>Habilidades</p>
                      {
                        abilities.map(ability => (
                          <AbilitiesPokemon 
                            key={ability.ability.url}
                            pokemon={pokemon}
                            habilidad={ability}
                          />
                        ))
                      }
                    </div>
                    <Text className='text-3xl font-extrabold text-center md:text-left mt-8'>Sprites</Text>
                    <Container direction='row' display='flex' gap={ 0 }>
                      <Image 
                        src={ pokemon.sprites.front_default }
                        alt={ pokemon.name }
                        width={ 100 }
                        height={ 100 }
                      />
                      <Image 
                        src={ pokemon.sprites.back_default }
                        alt={ pokemon.name }
                        width={ 100 }
                        height={ 100 }
                      />
                      <Image 
                        src={ pokemon.sprites.front_shiny }
                        alt={ pokemon.name }
                        width={ 100 }
                        height={ 100 }
                      />
                      <Image 
                        src={ pokemon.sprites.back_shiny }
                        alt={ pokemon.name }
                        width={ 100 }
                        height={ 100 }
                      />
                    </Container>
                  </Card.Body>
                </Card>
              </Grid>
            </Grid.Container>
        </Layout>
    )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemons151 = [...Array(151)].map( ( value, index ) => `${ index + 1 }` );
  
    return {
      paths: pokemons151.map( id => ({
        params: { id }
      })),
      fallback: false
    }
}



export const getStaticProps: GetStaticProps = async ({ params }) => {
  
    const { id } = params as { id: string };
  
    return {
      props: {
        pokemon: await getPokemonInfo( id )
      }
    }
}

export default PokemonPage