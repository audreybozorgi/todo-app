import React from 'react'
import './index.css'
import AddNewItem from 'src/components/AddNewItem'
import Items from 'src/components/Items'
import JSONView from 'src/components/JSONView'

const Home: React.FC = () => {
    return (
        <div className='home_container'>
            <AddNewItem />
            <Items />
            <JSONView />
        </div>
    )
}

export default Home