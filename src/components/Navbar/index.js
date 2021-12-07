import { Carro } from '../Carro'
import styles from './estilos'


export const Navbar = ({ cantidad, productos }) => {
    return (
        <body style={styles.body}>
        <nav style={styles.nav}>
            <p><img src="Apple_Logo_Png_06.png" width="30px"></img></p>
            <Carro cantidad={cantidad} productos={productos} />
        </nav>
        </body>
    )
}