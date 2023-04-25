import { useRouter } from 'next/router';
import { Layout } from '../../components/layouts';

const PokemonPage = () => {

    const router = useRouter()
    

    return (
        <Layout>
            <h1>Hola Mundo</h1>
        </Layout>
    )
}

export default PokemonPage