import styles from './estilos'

export const Button = ({children, agregarAlCarro, prod, eliminar}) => (
    <button onClick={() => agregarAlCarro(prod)} style={styles.button}>{children}</button>
)
