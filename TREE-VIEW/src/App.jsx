/* eslint-disable no-unused-vars */
import React from 'react'
import TreeMenu from './components/TreeMenu'
import menus from './components/data'

const App = () => {
  return (
    <div>
      <TreeMenu menus={menus}/>
    </div>
  )
}

export default App