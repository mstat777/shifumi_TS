import styles from './MainBtn.module.scss';

interface MainBtnProps {
    type: React.ButtonHTMLAttributes<HTMLButtonElement>["type"],
    text: string,
    onClick?: () => void, 
    className: {}
}

export default function MainBtn({type, text, onClick, className}: MainBtnProps){
    return <button 
                type={type}
                onClick={onClick} 
                className={`${styles.button} ${className}`}>
                    {text}
            </button>
}