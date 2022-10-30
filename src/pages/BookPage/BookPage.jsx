import { Annotation } from "../../components/Annotation/Annotation"
import { Book } from "../../components/Book/Book"
import { Reviews } from "../../components/Reviews/Reviews"
import { reviews } from "../../constants/mock"
import styles from './styles.module.css'


export const BookPage = (props) => {
    return (
    <main className={styles.main}>
        <Book book={props.books[0].books[1]} className={styles.book} />
        <Annotation annotation={props.books[0].books[1].annotation} />
        <Reviews reviews={reviews} />
    </main>)
}