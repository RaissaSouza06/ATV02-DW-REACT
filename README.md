# 🥷 Fichas Shinobi de Naruto - ATV02

Projeto em **Next.js (React)** para a disciplina de **Desenvolvimento Web 3** . A aplicação consome uma API pública para listar personagens de Naruto e exibir detalhes de um registro selecionado.

---

## 🚀 Como rodar o projeto

```bash
npm install
npm run dev
```
Acesse: [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Critérios da Nota 

* **Consumo de API:** Feito com o método nativo `fetch` integrado à *Jikan API*.
* **`useEffect`:** Dispara a chamada da API uma única vez assim que a tela carrega.
* **`useState` (`personagens`):** Armazena o array com os 24 ninjas trazidos da API.
* **`useState` (`selecionado`):** Guarda os dados do ninja clicado (começa como `null`).
* **Componentização e Props:** Interface dividida em `CardNinja` (listagem) e `DetalhesNinja` (ficha expandida), passando dados e funções de clique via *props*.
* **Estilização:** Mistura de **CSS Global** (`globals.css`) para o tema escuro e **CSS Modules** (`styles.module.css`) para o escopo isolado de cada componente.
* **Renderização de Lista:** Uso do `.map()` para listar os cards na tela, usando o ID da API (`mal_id`) como propriedade obrigatória `key`.