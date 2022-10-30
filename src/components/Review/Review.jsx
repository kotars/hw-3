import styles from './styles.module.css'

export const Review = ({ review }) => {
    return (<div className={styles.review}>
        <div className={styles.review__items}>
            <div className={styles.review__header}>{review.author}</div>
            <div className={styles.review__rating}>{review.rating}</div>
        </div>
        <div className={styles.review__description}>{review.comment}</div>
    </div>)
}