import { Review } from "../Review/Review"
import styles from './styles.module.css'


export const Reviews = ({ reviews }) => {
    return (<section className={styles.reviews}>
        {
            reviews.map((review) =>
                <Review review={review} />
            )
        }
    </section>)
}