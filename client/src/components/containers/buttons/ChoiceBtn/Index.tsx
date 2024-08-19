import styles from './ChoiceBtn.module.scss';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ChoiceBtnProps {
    onClick: () => void, 
    className: {} | undefined, 
    icon: IconProp, 
    tooltip: string,
    disabled?: boolean | undefined
}

export default function ChoiceBtn({onClick, className, icon, tooltip}: ChoiceBtnProps) {
    return (
        <button type="button"
                onClick={onClick} 
                className={`${styles.button} ${className}`}>
            <FontAwesomeIcon icon={icon}/>
            <p className={styles.tooltip}>{tooltip}</p>
        </button>
    );
}