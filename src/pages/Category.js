import React from 'react'
import ResponsiveGrid from '../components/ResponsiveGrid/ResponsiveGrid'
import SimpleContainer from '../components/SimpleContainer/SimpleConteiner';
import Loader from '../components/Loader/Loader'
import {
    useParams
} from "react-router-dom"

const Category = () => {
    
    const {slug} = useParams()
    console.log(slug)

    return (
        <>
                {1==2 && <Loader />}
      <SimpleContainer>
        <ResponsiveGrid />
      </SimpleContainer>
        </>
    )
}

export default Category
