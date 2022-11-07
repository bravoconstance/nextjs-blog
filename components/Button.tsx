import styles from './Button.module.css'
import variables from '../styles/variables.module.scss'

export default function Button() {
  return (
    <button
      type="button"
      // Note how the "error" class is accessed as a property on the imported
      // `styles` object.
     /*  className={styles.error} */
      style={{backgroundColor:variables.primaryColor}}
    >
      Destroy
    </button>
  )
}