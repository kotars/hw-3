import styles from './styles.module.css'

export const Annotation = ({ annotation }) => {
    return (
        <section className={styles.annotation}>
            <h2 className={styles.annotation__header}>Аннотация</h2>
            <div className={styles.annotation__description}>{annotation}</div>
        </section>)
}