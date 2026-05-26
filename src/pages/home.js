// importando os hooks do react
import { useState, useEffect } from "react";
// importando os componentes criados
import CardNinja from "../components/CardNinja";
import DetalhesNinja from "../components/DetalhesNinja";

export default function Home() {
  // Estados:
  // personagens: armazena a lista vinda da API
  // selecionado: armazena os dados do shinobi clicado
  const [personagens, setPersonagens] = useState([]);
  const [selecionado, setSelecionado] = useState(null);

  // Hook useEffect para carregar dados da API externa ao abrir a tela
  useEffect(() => {
    fetch("https://api.jikan.moe/v4/anime/20/characters")
      .then((res) => res.json())
      .then((data) => {
        setPersonagens(data.data.slice(0, 24)); // salvando os 24 primeiros registros
      })
      .catch((err) => console.error("Erro na API:", err));
  }, []);

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h1 className="title">Fichas Shinobi de Naruto</h1>

        {/* Chamando os detalhes do registro único caso exista um selecionado */}
        {selecionado && (
          <DetalhesNinja 
            ninja={selecionado} 
            aoFechar={() => setSelecionado(null)} 
          />
        )}

        <h2 style={{ marginBottom: "20px" }}>Todos os Personagens</h2>
        
        {/* Renderizando a lista de registros de forma dinâmica */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px" }}>
          {personagens.map((item) => (
            <CardNinja 
              key={item.character.mal_id} 
              ninja={item} 
              aoClicar={() => setSelecionado(item)} 
            />
          ))}
        </div>
      </div>
    </>
  );
}