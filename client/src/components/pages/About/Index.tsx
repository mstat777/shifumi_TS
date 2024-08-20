import { useEffect } from 'react';

export default function About(){

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    return (
        <main id="about">
            <h1>about</h1>
            <p>Shifumi</p>
            <p>The Rock-Paper-Scissors game as a test for a job interview</p>
        </main>
    )
}