import { Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image"

export const Navbar = () => {

    const { theme } = useTheme()

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0px 20px',
            backgroundColor: theme?.colors.purple200.value
        }}>

            <Image 
                src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png'
                alt="icono de la App"
                width={70}
                height={70}
            />

            <Text color='white' h1>P</Text>
            <Text color='white' h2>okémon</Text>

            <Spacer css={{ flex: 1 }}/>

            <Text color='white'>Favoritos</Text>
        </div>
    )
}
