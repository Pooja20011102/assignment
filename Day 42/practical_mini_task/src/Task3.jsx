import styles from './Cards.module.css'
function Task3({title , price}){
    return(
        <div className={styles.card}>
            <p>{title}</p>
            <p>${price}</p>
            <button>Buy</button>
        </div>
    )
}

export default Task3