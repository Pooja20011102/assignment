import styles from "./Card.module.css"
function Task5({children}){
    return (
        <div className={styles.card}>
            {children}
        </div>
    )
}

export default Task5