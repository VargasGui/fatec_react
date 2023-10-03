import styles from './AppViewer.module.css'

function somarNumeros(a, b) {
  return a + b
}


const AppViewer = () => {
  return (
    <>
      <div className={styles.avContainer}>AppViewer</div>
      <p>{somarNumeros(5, 17)}</p>
    </>

  )
}

export default AppViewer