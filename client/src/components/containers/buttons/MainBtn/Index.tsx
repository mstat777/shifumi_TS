import styles from './MainBtn.module.scss';
import { ButtonProps } from '../../../../configs/interfaces';

export default function MainBtn({
    type, 
    text, 
    onClick, 
    className
}: ButtonProps){
    return (
        <button 
            type={type}
            onClick={onClick} 
            className={`${styles.button} ${className}`}>
                {text}
        </button>
    )
}