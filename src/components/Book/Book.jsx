import { useState } from 'react'
import styles from './styles.module.css'
import plus from './Plus.svg'
import minus from './Minus.svg'
import classNames from 'classnames'

export const Book = ({ book, className }) => {
    const [count, setCount] = useState(0);

    return (
        <div className={classNames(styles.book, className)}>
            <div className={styles.book__information}>
                <h2 className={styles.book__header}>{book.name}</h2>
                {book.author !== undefined ? <div className={styles.book__author}>{book.author}</div> : <div></div>}
                <div className={styles.book__genre}>{book.genre}</div>
                <div className={styles.book__rating}>{book.rating}</div>
                <div className={styles.book__price}>{book.price}</div>
            </div>
            <div className={styles.book__buttons}>
                <button
                    className={classNames(styles.book__button,{
                        [styles.book__buttonActive]: count > 0
                    })}
                    onClick={() => setCount(count - 1)}
                    disabled={count === 0}
                ><img src={minus} alt="" /></button>
                <div className={styles.book__num}>{count}</div>
                <button
                    className={classNames(styles.book__button,{
                        [styles.book__buttonActive]: count < 10
                    })}
                    onClick={() => setCount(count + 1)}
                    disabled={count === 10}
                ><img src={plus} alt="" /></button>
            </div>
        </div>)
}