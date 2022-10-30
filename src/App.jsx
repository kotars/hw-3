import { Layout } from "./components/Layout/Layout"
import { books } from "./constants/mock"
// import { BookPage } from "./pages/BookPage/BookPage"
import { BooksPage } from "./pages/BooksPage/BooksPage"

export const App = () => {
    return(
    <>
    <Layout>
        {/* <BookPage books={books}/> */}
        <BooksPage books={books}/>
    </Layout>
    </>
    )
}