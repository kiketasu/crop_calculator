//Edit 08/10/22: Previous data was incomplete or partially wrong so new data extracted from in-game data: https://dreamlightvalley.wikizet.com/en/Ingredients and https://dreamlightvalleywiki.com/Ingredients
//Updated data 08/10/22 (some prices, waters and time where not accurate)
//Crop IMG changed for SEED IMG for clarification.
//Added yield property.

const cropInfo = [
  //name: of the seed.
  //location: where to buy it and best place to plant it.
  //seedPrice: self explanatory.
  //time: growing time in hours and minutes.
  //sellPrice: self explanatory.
  //waters: how many times need to be watered before harvest.
  //yield: how many products are harvested per seed.
  //img: seed img.
  {
    name: "Asparagus",
    location: "Frosted Heights",
    seedPrice: 150,
    time: "2h 15min",
    sellPrice: 133,
    waters: 2,
    yield: 3,
    img: "https://dreamlightvalley.wikizet.com/english/images/3/38/Asparagus_Seed.png",
  },
  {
    name: "Bell Pepper",
    location: "Forest of Valor",
    seedPrice: 12,
    time: "15min",
    sellPrice: 33,
    yield: 1,
    waters: 1,
    img: "https://dreamlightvalley.wikizet.com/english/images/0/09/Bell_Pepper_Seed.png",
  },
  {
    name: "Carrot",
    location: "Peaceful Meadow",
    seedPrice: 10,
    time: "15min",
    sellPrice: 44,
    yield: 1,
    waters: 1,
    img: "https://dreamlightvalley.wikizet.com/english/images/b/b9/Carrot_Seed.png",
  },
  {
    name: "Chili Pepper",
    location: "Sunlit Plateau",
    seedPrice: 20,
    time: "45 min",
    sellPrice: 78,
    yield: 1,
    waters: 1,
    img: "https://dreamlightvalley.wikizet.com/english/images/6/67/Chili_Pepper_Seed.png",
  },
  {
    name: "Cucumber",
    location: "Frosted Heights",
    seedPrice: 40,
    time: "1h 15min",
    sellPrice: 159,
    yield: 1,
    waters: 1,
    img: "https://dreamlightvalley.wikizet.com/english/images/6/6a/Cucumber_Seed.png",
  },
  {
    name: "Eggplant",
    location: "Frosted Heights",
    seedPrice: 95,
    time: "3h",
    sellPrice: 308,
    yield: 1,
    waters: 2,
    img: "https://dreamlightvalley.wikizet.com/english/images/d/de/Eggplant_Seed.png",
  },
  {
    name: "Leek",
    location: "Forgotten Lands",
    seedPrice: 120,
    time: "2h",
    sellPrice: 309,
    yield: 1,
    waters: 2,
    img: "https://dreamlightvalley.wikizet.com/english/images/9/95/Leek_Seed.png",
  },
  {
    name: "Lettuce",
    location: "Peaceful Meadow",
    seedPrice: 3,
    time: "3min",
    sellPrice: 8,
    yield: 1,
    waters: 1,
    img: "https://dreamlightvalley.wikizet.com/english/images/2/29/Lettuce_Seed.png",
  },
  {
    name: "Okra",
    location: "Glade of Trust",
    seedPrice: 135,
    time: "2h",
    sellPrice: 114,
    yield: 3,
    waters: 1,
    img: "https://dreamlightvalley.wikizet.com/english/images/b/b2/Okra_Seed.png",
  },
  {
    name: "Onion",
    location: "Forest of Valor",
    seedPrice: 50,
    time: "1h 15min",
    sellPrice: 170,
    yield: 1,
    waters: 3,
    img: "https://dreamlightvalley.wikizet.com/english/images/d/db/Onion_Seed.png",
  },
  {
    name: "Potato",
    location: "Forgotten Lands",
    seedPrice: 55,
    time: "35min",
    sellPrice: 126,
    yield: 1,
    waters: 3,
    img: "https://dreamlightvalley.wikizet.com/english/images/7/70/Potato_Seed.png",
  },
  {
    name: "Pumpkin",
    location: "Forgotten Lands",
    seedPrice: 275,
    time: "4h",
    sellPrice: 664,
    yield: 1,
    waters: 2,
    img: "https://dreamlightvalley.wikizet.com/english/images/6/67/Pumpkin_Seed.png",
  },
  {
    name: "Spinach",
    location: "Glade of Trust",
    seedPrice: 45,
    time: "1h",
    sellPrice: 41,
    yield: 3,
    waters: 2,
    img: "https://dreamlightvalley.wikizet.com/english/images/e/e7/Spinach_Seed.png",
  },
  {
    name: "Tomato",
    location: "Dazzle Beach",
    seedPrice: 8,
    time: 0.4,
    sellPrice: 66,
    waters: 2,
    img: "https://dreamlightvalley.wikizet.com/english/images/9/9d/Tomato.png",
  },
  {
    name: "Zucchini",
    location: "Sunlit Plateau",
    seedPrice: 30,
    time: 0.67,
    sellPrice: 104,
    waters: 2,
    img: "https://dreamlightvalley.wikizet.com/english/images/f/f6/Zucchini.png",
  },
  {
    name: "Rice",
    location: "Glade of Trust",
    seedPrice: 35,
    time: 0.83,
    sellPrice: 122,
    waters: 1,
    img: "https://dreamlightvalley.wikizet.com/english/images/d/da/Rice.png",
  },
  {
    name: "Wheat",
    location: "Peaceful Meadow",
    seedPrice: 1,
    time: 0.017,
    sellPrice: 4,
    waters: 1,
    img: "https://dreamlightvalley.wikizet.com/english/images/e/e2/Wheat.png",
  },
  {
    name: "Canola",
    location: "Forest of Valor",
    seedPrice: 25,
    time: 0.6,
    sellPrice: 109,
    waters: 4,
    img: "https://dreamlightvalley.wikizet.com/english/images/7/79/Canola.png",
  },
  {
    name: "Corn",
    location: "Dazzle Beach",
    seedPrice: 15,
    time: 0.2,
    sellPrice: 32,
    waters: 1,
    img: "https://dreamlightvalley.wikizet.com/english/images/f/f8/Corn.png",
  },
  {
    name: "Soya",
    location: "Sunlit Plateau",
    seedPrice: 60,
    time: 1.5,
    sellPrice: 207,
    waters: 2,
    img: "https://dreamlightvalley.wikizet.com/english/images/0/00/Soya.png",
  },
  {
    name: "Sugarcane",
    location: "Dazzle Beach",
    seedPrice: 5,
    time: 0.12,
    sellPrice: 19,
    waters: 1,
    img: "https://dreamlightvalley.wikizet.com/english/images/0/03/Sugarcane.png",
  },
  {
    name: "Cotton",
    location: "Sunlit Plateau",
    seedPrice: 42,
    time: 0.42,
    sellPrice: 37,
    waters: 4,
    img: "https://dreamlightvalley.wikizet.com/english/images/thumb/c/c3/Cotton.png/103px-Cotton.png",
  },
];

// ----------------------------------------------------------------------------------------------------------

//query selectors:
//select
let selected = document.getElementById("cultivo");
 //input
let inputNumber = document.getElementById("cantidad");
 //img container
let container = document.getElementById("marco");
//wall-e default img
let defaultImage = `<img src="https://th.bing.com/th/id/OIP.mZ7TM_2MBpT9AM4WU0LSzgHaHg?pid=ImgDet&rs=1" alt="walle"></img>`;

//function to reset all content
function resetAll() {
  resultadoFinal.innerHTML = "";
  resultadoFinal.style.display = "none";
  selected.value = "default";
  inputNumber.value = "";
  container.innerHTML = defaultImage;
};

//function that shows selected crop into img container
function selectedOption() {
  let container = document.getElementById("marco");
  let selected = document.getElementById("cultivo");
  let defaultImage = `<img src="https://th.bing.com/th/id/OIP.mZ7TM_2MBpT9AM4WU0LSzgHaHg?pid=ImgDet&rs=1" alt="walle"></img>`

  for (const cropObject of cropInfo) {
    if (selected.value === cropObject.name) {
      container.innerHTML = `<img src= "${cropObject.img}">`;
    } else if (selected.value == "default"){
      container.innerHTML = defaultImage;
    };
  };
};

//query selector where display final result
let resultadoFinal = document.querySelector('#resultadoFinal')

//function executed on click CALCULATE:
function calcularProfit() {
  resultadoFinal.style.display = "block";
  let selected = document.getElementById("cultivo");
  let inputNumber = document.getElementById("cantidad");
//operations to calculate cost, net profi and show: where to plant, watering times.
  for (const cropObject2 of cropInfo) {
    let coste = cropObject2.seedPrice * inputNumber.value;
    let beneficio = ((cropObject2.sellPrice * inputNumber.value) - coste);
//print on final result div
    if (selected.value === cropObject2.name){ 
      resultadoFinal.innerHTML = `- The <span style= "color: Red;">cost</span> of buying <strong>${cropObject2.name}</strong> seeds will be <strong>${coste}</strong> star coins. <br>`
      resultadoFinal.innerHTML += `- The <span style= "color: Green;">net profit</span> will be <strong>${beneficio}</strong> star coins <i>(Net profit = final profit - crop cost)</i>. <br>`
      resultadoFinal.innerHTML += `- ${cropObject2.name} must be planted on <strong>"${cropObject2.location}"</strong>. <br>`
      resultadoFinal.innerHTML += `- ${cropObject2.name} must be watered <strong>${cropObject2.waters} times</strong>. <br>`
//convert hours to minutes when format is decimals on hours.
      if (cropObject2.time < 1){
        let timeMinutes = cropObject2.time * 60;
        resultadoFinal.innerHTML += `- ${cropObject2.name} will take <strong>${timeMinutes} minutes </strong> to grow approximately (if watered when needed).`
      } else {
        resultadoFinal.innerHTML += `- ${cropObject2.name} will take <strong>${cropObject2.time} hours</strong> to grow approximately (if watered when needed).`
      };
    };
  };
};



