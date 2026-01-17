import styles from './Button2.module.css'
// the nice thing of modules, are it avoids naming conflict, bcoz a unique class access through {}
// the downside is global access is hassle since you have to import it in everywhere u use it

function Button() {
    return (
        <button className={styles.button}>IM MODULAR</button>
    );
}

export default Button