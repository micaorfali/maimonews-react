import React, { useState, useEffect } from 'react'
import ResponsiveGrid from '../components/ResponsiveGrid/ResponsiveGrid'
import SimpleContainer from '../components/SimpleContainer/SimpleConteiner';
import Loader from '../components/Loader/Loader'
import axios from 'axios'

const Home = () => {

    const [noticias, setNoticias] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchNoticias = async () => {
            setLoading(true)
            try {
                const noticiasFromApi = await axios.get(
                    `https://api.canillitapp.com/latest/2021-09-30`
                );

                console.log(noticiasFromApi)
                setNoticias(noticiasFromApi.data)
                setLoading(false)

            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }

        fetchNoticias()

    }, [])

    return (
        <>
            {loading && <Loader />}
            <SimpleContainer>
            {!loading && <ResponsiveGrid noticias={noticias} />}
                
            </SimpleContainer>
        </>
    )
}

export default Home
