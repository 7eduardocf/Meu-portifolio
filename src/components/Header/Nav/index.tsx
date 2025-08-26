import Link from "./Link"
import styles from "./Nav.module.css"

const Nav = () => {
  return (
    <nav>
        <ul className={styles.lista}>
            <li>
                <Link 
                    url="https://www.linkedin.com/in/eduardo-frota-4162011a1/"
                    imagem="/linkedin.png"
                    alt="Logo linkedin"
                />
            </li>
            <li>
                <Link 
                    url="https://github.com/7eduardocf"
                    imagem="/github.png"
                    alt="Logo github"
                />
            </li>
        </ul>
    </nav>
  )
}

export default Nav
