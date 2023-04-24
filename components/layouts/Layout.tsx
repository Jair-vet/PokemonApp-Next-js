import Head from "next/head"
import { FunctionComponent, PropsWithChildren } from "react"

interface Props {
    children: JSX.Element,
    title?: string;
}

export const Layout: FunctionComponent<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title>{ title || 'Pokemon App' }</title>
            <meta name="author" content="Jair Aceves" />
            <meta name="description" content={`Información sobre el pokémon ${ title }`} />
            <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        </Head>

        {/* Navbar */}

        <main>
            { children }
        </main>
    </>
  )
}
