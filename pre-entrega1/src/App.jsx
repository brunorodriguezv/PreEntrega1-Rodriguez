import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";

import React from 'react'

const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="card container"/>
    </>
  )
}

export default App