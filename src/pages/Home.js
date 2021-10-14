import React, { useState, useEffect } from 'react'
import ResponsiveGrid from '../components/ResponsiveGrid/ResponsiveGrid'
import SimpleContainer from '../components/SimpleContainer/SimpleConteiner';
import Loader from '../components/Loader/Loader'
import axios from 'axios'
import dayjs from 'dayjs'

const Home = () => {

    const [noticias, setNoticias] = useState([])
    const [loading, setLoading] = useState(false)

    const today = dayjs(new Date()).format('YYYY[-]MM[-]DD')
    console.log(today)

    useEffect(() => {
        const fetchNoticias = async () => {
            setLoading(true)
            try {
                const noticiasFromApi = await axios.get(
                    `https://api.canillitapp.com/latest/${today}`
                );

                console.log(noticiasFromApi)
                setNoticias(noticiasFromApi.data.slice(0,16))
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
