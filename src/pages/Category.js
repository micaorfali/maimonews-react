import React, {useEffect, useState} from 'react'
import ResponsiveGrid from '../components/ResponsiveGrid/ResponsiveGrid'
import SimpleContainer from '../components/SimpleContainer/SimpleConteiner';
import Loader from '../components/Loader/Loader'
import {
    useParams
} from "react-router-dom"
import axios from 'axios'

const Category = () => {
    
    const {slug} = useParams()
    console.log(slug)

    const [noticias, setNoticias] = useState([])
    const [loading, setLoading] = useState(false)



    useEffect(() => {
      const categoriesId = {
        politica: '1',
        internacionales: '2',
        tecnologia: '3',
        espectaculos: '4',
        deportes: '5',
        diseno: '6',
        gaming: '7'
      }

        const fetchNoticias = async () => {
            setLoading(true)
            try {
                const noticiasFromApi = await axios.get(
                    `https://api.canillitapp.com/news/category/${categoriesId[slug]}`
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

    }, [slug])

    return (
        <>
            {loading && <Loader />}
            <SimpleContainer>
            {!loading && <ResponsiveGrid noticias={noticias} />}
                
            </SimpleContainer>
        </>
    )
}

export default Category
