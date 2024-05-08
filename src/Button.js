import PropTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button({ text }) {
    return <button className={styles.btn}>{text}</button>;
}

Button.prototypes = {
    text: PropTypes.string.isRequired,
};
