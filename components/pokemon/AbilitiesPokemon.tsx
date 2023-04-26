import { Pokemon, Ability } from "@/interfaces"
import { Text } from "@nextui-org/react"
import { NextPage } from "next"

interface Props {
    pokemon: Pokemon
    habilidad: Ability
}
export const AbilitiesPokemon: NextPage<Props> = ({ habilidad }) => {

    const { ability } = habilidad

  return (
    <>
        <div>
            <p className="md:ml-10 text-emerald-500 text-xl uppercase mt-3">{ ability.name }</p>
        </div>
    </>
  )
}
