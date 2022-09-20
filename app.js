//declarar array de objetos con las características de los cultivos
const cropInfo = [
  {
    name: "Espárrago",
    location: "Cumbres Heladas",
    seedPrice: 150,
    time: 2.25,
    sellPrice: 399,
    waters: 2,
    img: "https://dreamlightvalley.wikizet.com/english/images/4/45/Asparagus.png",
  },
  {
    name: "Pimiento",
    location: "Bosque de la Valentía",
    seedPrice: 12,
    time: 0.25,
    sellPrice: 33,
    waters: 1,
    img: "https://dreamlightvalley.wikizet.com/english/images/e/e2/Bell_Pepper.png",
  },
  {
    name: "Zanahoria",
    location: "Pradera Pacífica",
    seedPrice: 10,
    time: 0.25,
    sellPrice: 44,
    waters: 1,
    img: "https://dreamlightvalley.wikizet.com/english/images/c/c3/Carrot.png",
  },
  {
    name: "Chile",
    location: "Meseta Soleada",
    seedPrice: 20,
    time: 0.75,
    sellPrice: 78,
    waters: 1,
    img: "https://dreamlightvalley.wikizet.com/english/images/a/ab/Chili_Pepper.png",
  },
  {
    name: "Pepino",
    location: "Cumbres Heladas",
    seedPrice: 40,
    time: 1.25,
    sellPrice: 159,
    waters: 1,
    img: "https://dreamlightvalley.wikizet.com/english/images/5/59/Cucumber.png",
  },
  {
    name: "Berenjena",
    location: "Cumbres Heladas",
    seedPrice: 95,
    time: 3,
    sellPrice: 308,
    waters: 2,
    img: "https://dreamlightvalley.wikizet.com/english/images/8/8f/Eggplant.png",
  },
  {
    name: "Puerro",
    location: "Tierras Olvidadas",
    seedPrice: 120,
    time: 2,
    sellPrice: 309,
    waters: 3,
    img: "https://dreamlightvalley.wikizet.com/english/images/5/57/Leek.png",
  },
  {
    name: "Lechuga",
    location: "Pradera Pacífica",
    seedPrice: 3,
    time: 0.05,
    sellPrice: 8,
    waters: 1,
    img: "https://dreamlightvalley.wikizet.com/english/images/d/da/Lettuce.png",
  },
  {
    name: "Okra",
    location: "Claro de la Confianza",
    seedPrice: 135,
    time: 2,
    sellPrice: 342,
    waters: 1,
    img: "https://dreamlightvalley.wikizet.com/english/images/e/e7/Okra.png",
  },
  {
    name: "Cebolla",
    location: "Bosque de la Valentía",
    seedPrice: 50,
    time: 1.25,
    sellPrice: 170,
    waters: 3,
    img: "https://dreamlightvalley.wikizet.com/english/images/5/51/Onion.png",
  },
  {
    name: "Patata",
    location: "Tierras Olvidadas",
    seedPrice: 55,
    time: 0.6,
    sellPrice: 126,
    waters: 4,
    img: "https://dreamlightvalley.wikizet.com/english/images/c/c2/Potato.png",
  },
  {
    name: "Calabaza",
    location: "Tierras Olvidadas",
    seedPrice: 275,
    time: 4,
    sellPrice: 664,
    waters: 2,
    img: "https://dreamlightvalley.wikizet.com/english/images/6/64/Pumpkin.png",
  },
  {
    name: "Espinaca",
    location: "Claro de la Confianza",
    seedPrice: 45,
    time: 1,
    sellPrice: 123,
    waters: 2,
    img: "https://dreamlightvalley.wikizet.com/english/images/6/60/Spinach.png",
  },
  {
    name: "Tomate",
    location: "Playa Deslumbrante",
    seedPrice: 8,
    time: 0.4,
    sellPrice: 66,
    waters: 2,
    img: "https://dreamlightvalley.wikizet.com/english/images/9/9d/Tomato.png",
  },
  {
    name: "Calabacín",
    location: "Meseta Soleada",
    seedPrice: 30,
    time: 0.67,
    sellPrice: 104,
    waters: 2,
    img: "https://dreamlightvalley.wikizet.com/english/images/f/f6/Zucchini.png",
  },
  {
    name: "Arroz",
    location: "Claro de la Confianza",
    seedPrice: 35,
    time: 0.83,
    sellPrice: 122,
    waters: 1,
    img: "https://dreamlightvalley.wikizet.com/english/images/d/da/Rice.png",
  },
  {
    name: "Trigo",
    location: "Pradera Pacífica",
    seedPrice: 1,
    time: 0.017,
    sellPrice: 4,
    waters: 1,
    img: "https://dreamlightvalley.wikizet.com/english/images/e/e2/Wheat.png",
  },
  {
    name: "Canola",
    location: "Bosque de la Valentía",
    seedPrice: 25,
    time: 0.6,
    sellPrice: 109,
    waters: 4,
    img: "https://dreamlightvalley.wikizet.com/english/images/7/79/Canola.png",
  },
  {
    name: "Maíz",
    location: "Playa Deslumbrante",
    seedPrice: 15,
    time: 0.2,
    sellPrice: 32,
    waters: 1,
    img: "https://dreamlightvalley.wikizet.com/english/images/f/f8/Corn.png",
  },
  {
    name: "Soja",
    location: "Meseta Soleada",
    seedPrice: 60,
    time: 1.5,
    sellPrice: 207,
    waters: 2,
    img: "https://dreamlightvalley.wikizet.com/english/images/0/00/Soya.png",
  },
  {
    name: "Caña de azúcar",
    location: "Playa Deslumbrante",
    seedPrice: 5,
    time: 0.12,
    sellPrice: 19,
    waters: 1,
    img: "https://dreamlightvalley.wikizet.com/english/images/0/03/Sugarcane.png",
  },
  {
    name: "Algodón",
    location: "Meseta Soleada",
    seedPrice: 42,
    time: 0.42,
    sellPrice: 37,
    waters: 4,
    img: "https://dreamlightvalley.wikizet.com/english/images/thumb/c/c3/Cotton.png/103px-Cotton.png",
  },
];
//declarar funcion que se ejecute al presionar el botton "CALCULAR"
function calcularProfit() {
  console.log("has clickado el boton");
}
//funcion que muestre la imagen correspondiente al cultivo
function selectedOption() {
  let container = document.getElementById("marco");
  let selected = document.getElementById("cultivo");
  for (const cropObject of cropInfo) {
    if (selected.value === cropObject.name) {
      container.innerHTML = `<img src= "${cropObject.img}">`;
    }
  }
}
// TODO multiplicar input number x seed price = coste
function calcularProfit() {
  let inputNumber = document.getElementById;
}

// TODO multiplicar input number x sell price = beneficioBruto
// TODO restar beneficioBruto - coste = TOTAL
// TODO escribir en otra pagina

