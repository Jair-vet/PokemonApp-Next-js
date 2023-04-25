import { useRouter } from 'next/router';
import { Layout } from '../../components/layouts';
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { pokeApi } from '@/api';
import { Pokemon, Ability } from '@/interfaces';
import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react';
import { AbilitiesPokemon } from '@/components/pokemon';

interface Props {
    pokemon: Pokemon
    habilidad: Ability
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

    const { abilities } = pokemon
    
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
                      ghost
                    >
                      Guardar en Favoritos
                    </Button>
                  </Card.Header>

                  <Card.Body>
                    <div className='flex items-center'>
                      <p className='text-3xl font-extrabold'>Habilidades :</p>
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
                    <Text size={30} className='text-3xl font-extrabold'>Sprites</Text>
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
    
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ id }`);
  
    return {
      props: {
        pokemon: data
      }
    }
}

export default PokemonPage