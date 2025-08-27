import type { ILink } from "../../../../interfaces/ILink"
import styles from "./Link.module.css"

const Link = ({url, imagem, alt}: ILink) => {
  return (
    <div className={styles.box}>
        <a href={url} >
            <img src={imagem} alt={alt}/>
        </a>
    </div>
  )
}

export default Link