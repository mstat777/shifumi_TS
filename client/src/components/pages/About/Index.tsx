import { useEffect } from 'react';

export default function About(){

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    return (
        <main id="about">
            <h1>about</h1>
            <p>It's an exercise for the PlayMakers company</p>
        </main>
    )
}