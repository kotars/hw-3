import classNames from "classnames";
import { useState } from "react"
import { Books } from "../../components/Books/Books";
import styles from './styles.module.css'


export const BooksPage = (props) =>{
    const [activeGenre, setActiveGenre] = useState(props.books[0]);
    return(
        <main className={styles.main}>
            <nav className={styles.navigation}>
            {
                    props.books.map((book) =>
                        <button
                        className={classNames(styles.navigation__btn,{
                            [styles.navigation__btnActive]: activeGenre.id === book.id
                        })}
                            key={book.id}
                            onClick={() => setActiveGenre(book)}>
                            {book.name}
                        </button>)
                }
            </nav>
            <section className="books">
                <Books books={activeGenre} className={styles.book}/>
            </section>

        </main>
    )
}