import styles from './NotFound.module.scss';
import { Link } from 'react-router-dom';

export default function NotFound(){
    return (
        <main id="notFound" className={styles.not_found}>
            <h1>Error 404: Page not found</h1>
            <p>This page is not available. Return to <Link to={'/en'}>HOME</Link></p>
        </main>
    )
}