import styles from './ChoiceBtn.module.scss';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonProps } from '../../../../configs/interfaces';

export default function ChoiceBtn({
    onClick, 
    className, 
    icon, 
    tooltip
}: ButtonProps) {
    return (
        <button type="button"
                onClick={onClick} 
                className={`${styles.button} ${className}`}>
            <FontAwesomeIcon icon={icon as IconProp}/>
            <p className={styles.tooltip}>{tooltip}</p>
        </button>
    );
}