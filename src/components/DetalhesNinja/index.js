import styles from './styles.module.css';

export default function DetalhesNinja({ ninja, aoFechar }) {
  return (
    <>
    <section className={styles.detailsBox}>
      <div className={styles.detailsContent}>
        <img src={ninja.character.images.jpg.image_url} alt={ninja.character.name} />
        <div className={styles.info}>
          <h2>{ninja.character.name}</h2>
          <p><strong>Papel na História:</strong> {ninja.role === 'Main' ? 'Personagem Principal' : 'Suporte'}</p>
          <p><strong>ID do Personagem:</strong> {ninja.character.mal_id}</p>
          <button onClick={aoFechar} className={styles.closeBtn}>Fechar Detalhes</button>
        </div>
      </div>
    </section>
    </>
  );
}