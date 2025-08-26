import type { ILink } from "../../../../interfaces/ILink"

const Link = ({url, imagem, alt}: ILink) => {
  return (
    <div style={{width: "4em", height: "4em"}}>
        <a href={url} >
            <img src={imagem} alt={alt} />
        </a>
    </div>
  )
}

export default Link