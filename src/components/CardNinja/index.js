// importando o css modules - css externo
import styles from "./styles.module.css";

export default function CardNinja({ ninja, aoClicar }) {
  return (
    <>
      <div className={styles.card} onClick={aoClicar}>
        <img src={ninja.character.images.jpg.image_url} alt={ninja.character.name} />
        <h3>{ninja.character.name}</h3>
        <p>{ninja.role === 'Main' ? 'Principal' : 'Secundário'}</p>
      </div>
    </>
  );
}

