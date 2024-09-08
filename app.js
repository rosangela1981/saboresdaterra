function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value 
    //console.log ("campo-pesquisa");

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
      section.innerHTML = "<p> Nada foi encontrado. Você precisa digitar o nome do produto que deseja. </p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let Titulo = "";
    let descricao = "";
    let tags = "" ;
    let endereco = ""; 
    let bairro = "";
    let cidade = "";
    let estado = ""; 
    let pais= "" ; 
    let cep = "" ;

  
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
       Titulo = dado.Titulo.toLowerCase()
       descricao = dado.descricao.toLowerCase()
       tags = dado.tags.toLowerCase()
       endereco = dado.endereco.toLowerCase()
       bairro =  dado.bairro.toLowerCase()
       cidade =  dado.cidade.toLowerCase()
       estado = dado.estado.toLowerCase()
       pais = dado.pais.toLowerCase()
       cep = dado.cep.toLowerCase()
       

      // se titulo includes campoPesquisa
      if(Titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes (campoPesquisa) ||endereco.includes(campoPesquisa) ||
      bairro.includes(campoPesquisa) || cidade.includes(campoPesquisa) ||
      estado.includes(campoPesquisa) || pais.includes(campoPesquisa) ||
      cep.includes(campoPesquisa)) {
        // cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.Titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <p>Endereço: ${dado.endereco}</p>
          <p>Bairro: ${dado.bairro}</p>
          <p>Cidade: ${dado.cidade}</p>
          <p>Estado: ${dado.estado}</p>
          <p>País: ${dado.pais}</p>
          <p>CEP: ${dado.cep}</p>
          <a href=${dado.link} target="b">Mais informações </a>
         </div>
      `;
    }
      }
      
      if (!resultados ) {
        resultados = "<P>Nada foi encontrado. </p>"
      }
  
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }
 