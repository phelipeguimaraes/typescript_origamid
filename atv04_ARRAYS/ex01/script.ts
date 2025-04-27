async function getDate() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json")
  const data = await response.json()
  showDate(data)
}

getDate()

interface Course {
  nome: string,
  horas: number,
  aulas: number,
  gratuito: boolean,
  tags: string[],
  idAulas: number[],
  nivel: 'iniciante' | 'avancado'
}

function showDate(data: Course[]) {
  data.forEach(data => document.body.innerHTML += `
    <div>
      <h1 style='color: ${data.nivel === "iniciante" ? 'blue' : 'red'}'>Curso: ${data.nome}</h1>
      <p>Horas: ${data.horas}</p>
      <p>Aulas: ${data.aulas}</p>
      <p>Gratuidade: ${data.gratuito ? 'Sim' : 'Não'}</p>
      <p>Tags: ${data.tags}</p>
      <p>Aulas: ${data.idAulas}</p>
      <p>Nível: ${data.nivel}</p>
    </div>
    `)
}