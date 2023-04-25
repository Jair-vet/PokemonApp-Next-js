import { Link, Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image"
import NextLink from 'next/link'

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

            <Link href="/">
                <Image 
                    src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png'
                    alt="icono de la App"
                    width={70}
                    height={70}
                />
                <Text color='white' h1>P</Text>
                <Text color='white' h2>okémon</Text>
            </Link>

            <Spacer css={{ flex: 1 }}/>

            <Link href="/favoritos">
                <Text color='white'>Favoritos</Text>
            </Link>
        </div>
    )
}
