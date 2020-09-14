//HYPER-PARÂMETROS

var parametros = {
  // fonts
  fonts: {
    // "font"  de estilo para título do gráfico
    title: {
      family: "Times New Roman", // Excelentes para títulos
      size: 15
    },
    // fonte de estilo para os botões do gráfico
    buttons: {
      family: "Times New Roman",
      size: 13
    },
    //estilo de letra  para eixos
    axes: {
      family: "Times New Roman",
      size: 9,
      maxCharacters: {
        // Mostrar máximo de caracteres.
        x: 10
      }
    },
    //Estilo de letra para ponta de ferramenta
    tooltip: { family: "Times", size: 12 }
  },
  //Cores
  colors: {
    // Estilos de cor para Barras
    bars: {
      low: "cyan",
      high: "green",
      hover: {
        // sobre cores de pairar
        low: "red",
        high: "orangered"
      }
    },
    //Estilos de cor para botões
    buttons: {
      stroke: "blue",
      fill: {
        notSelected: "black",
        selected: "blue"
      }
    },
    //Estilos de cor para ponta de ferramenta
    tooltip: {
      fill: "rgb(51,51,51)",
      stoke: "rgb(51,51,51)",
      opacity: "0.8",
      text: "cyan",
      emphasis: "green"
    }
  },
  //Texto
  text: {
    title: {
      // Pré e Pós texto(de dados seleccionados) para título do gráfico
      pretext: "Maiores cidades  ",
      posttext: "por população"
    }
  },
  // dados
  data: {
    selected: "None", // Dados atualmente selecionados. Utilizados durante eventos de redimensionamento
    numberToShow: 7, // Número máximo de barras a mostrar
    tooltipKeys: ["city", "population"], //chaves de dentro de dados para jogar em "tooltipKeys"
    x: "city", // Chave dentro dos dados a utilizar para extrair dados para eixos
    y: "population" // Chave dentro dos dados a utilizar para os valores y das barras
  },
  // Canvas
  canvas: {
    // default x and y
    x: 500,
    y: 500,
    match: {
      // largura e altura da identificação especificada, se existir
      x: "body",
      y: "body"
    }
  },
  tooltip: {
    curve: 5, // curadoria de esquinas
    point: 10 //O triângulo
  }
};
// dar às variáveis um âmbito global para não ter de aninhar definições de funções.
var canvas, heightMatchObject, widthMatchObject, margins, bar, maxDrawingValues;
var incomingData, buttonKeys;

// funções de visualização
// Carga e parse JSON

function loadData() {
  d3.json("package.json", function (error, data) {
    incomingData = data;
    visualizeData();
  });
}
//fazer gráfico de barras
/* fazer o gráfico de barras completo establece vários parâmetros de relação 
 entre a tela*/
/*tais  como margens e dados selecionados pode ser chamado durante o tela*/
/*redimensionar para obter um novo gráfico que se enquadre no espaço enraizado*/
function visualizeData() {
  //Tamnahos de tela predefinidos
  canvas = {
    x: hyperParameters.canvas.x,
    y: hyperParameters.canvas.y
  };
}
