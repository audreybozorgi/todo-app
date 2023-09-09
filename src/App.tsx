import React from 'react'
import styles from './index.module.scss'
import Home from './pages/Home'

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Home />
    </div>
  );
}

export default App;
