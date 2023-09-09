import React from 'react'
import styles from './index.module.scss'
import AddNewItem from 'src/components/Home/AddNewItem'
import Items from 'src/components/Home/Items'
import JSONView from 'src/components/Home/JSONView'

const Home: React.FC = () => {
    return (
        <div className={styles.container}>
            <AddNewItem />
            <Items />
            <JSONView />
        </div>
    )
}

export default Home