import { Book } from "../Book/Book"

export const Books = ({ books, className }) => {
    return (<>
        {
            books.books.map((book) =>
                <Book book={book} className={className}/>
            )
        }
    </>)
}