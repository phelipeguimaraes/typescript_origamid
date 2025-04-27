async function fetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json")
  const data = await response.json()
  showData(data)
}

fetchCursos()

interface Courses {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: string[];
  idAulas: number[];
  nivel: "iniciante" | "avancado"
}

function showData(data: Courses[]) {
  data.map(data => document.body.innerHTML += `
      <div style="font-family: sans-serif">
        <h1 style="color: ${data.nivel === "iniciante" ? "blue" : "red"}">Curso: ${data.nome}</h1>
        <p>Horas: ${data.horas}</p>
        <p>Aulas: ${data.aulas}</p>
        <p>Gratuidade: ${data.gratuito ? "Sim" : "Não"}</p>
        <p>${data.tags.map(tag => document.body.innerHTML = `
          #${tag}
        `)}</p>
        <p>id Aulas: ${data.idAulas}</p>
        <p>Nível: ${data.nivel}</p>
      </div>
    `)
}