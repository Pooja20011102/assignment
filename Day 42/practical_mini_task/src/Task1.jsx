import styles from './Cards.module.css'

function App({name,children}) {
  return (
      <div className={styles.card}>
        <h1>Welcome {name} </h1>
        {children}
      </div>
  )
}

export default App
