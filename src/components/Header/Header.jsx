import styles from './styles.module.css'

export const Header = () => {
    return(
        <header className={styles.header}>
            <div className={styles.header__name}>
                Магазин
            </div>
        </header>
    )
}