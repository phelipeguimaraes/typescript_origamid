async function getFetchAPI() {
   const response = await fetch("https://api.origamid.dev/json/cursos.json");
   const data = await response.json();
   handleCursos(data);
}

getFetchAPI();

interface Cursos {
   nome: string;
   horas: number;
   aulas: number;
   gratuito: boolean;
   tags: string[];
   nivel: "iniciante" | "avancado"
}

function isCursos(value: unknown) : value is Cursos {
   if(value && typeof value === "object" && "nome" in value && "horas" in value && "tags" in value) {
      return true;
   } else {
      return false
   }
}

function handleCursos(datas: unknown) {
   if(datas instanceof Array) {
      datas.filter(isCursos).forEach(data => {
         document.body.innerHTML += `
         <div style="margin-bottom: 40px; font-family: Helvetica, sans-serif;">
            <p>Curso: ${data.nome}</p>
            <p>Horas: ${data.horas}</p>
            <p>Tags: ${data.tags.join(', ')}</p>
         </div>
         `
      })
   }
}