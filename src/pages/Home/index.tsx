import React from 'react'
import './index.css'
import AddNewItem from 'src/components/Home/AddNewItem'
import Items from 'src/components/Home/Items'
import JSONView from 'src/components/Home/JSONView'

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