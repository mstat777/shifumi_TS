import styles from './About.module.scss';
import { useEffect } from 'react';

export default function About(){

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    return (
        <main id="about" className={styles.about}>
            <h1>about</h1>

            <section className={styles.info}>
                <p><span>game name: </span><span>Shifumi</span></p>
                <p><span>description: </span><span>The Rock-Paper-Scissors game as a test for a job interview</span></p>
                <p><span>creator: </span><span>Dimitar Statev</span></p>
                <p><span>created: </span><span>august 2024</span></p>
            </section>
        </main>
    )
}