import styles from "./header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <img src="../imgs/Logo Senai.png" alt="" className={styles.logo_senai} />
            </div>
            <div>
                <label htmlFor="Ambientes">Ambientes</label>
                <select id="Ambientes" className = {styles.Ambientes} name="Ambiente">
                    <option value="Área">Area</option>
                    <option value="Local">Local</option>
                </select>
            </div>
            <button className= {styles.usuario}></button>
        </header>
    )
}

export default Header;