import React, { useContext } from 'react'
import MainContext from '../../../context/Context'
import CardList from '../CardList/CardList'
import { Helmet } from 'react-helmet'
import SimpleSlider from '../Slider/Slider'

function Home() {
  const {data}=useContext(MainContext)
  return (
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>
      <SimpleSlider/>
      <h1>Awsome</h1>
        <CardList data ={data}/>

    </>
  )
}

export default Home
