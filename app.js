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
    bonusTime: "2h 2min",
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
    bonusTime: "13.5min",
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
    bonusTime: "13.5min",
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
    bonusTime: "40.5min",
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
    bonusTime: "1h 8min",
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
    bonusTime: "2h 42min",
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
    bonusTime: "1h 48min",
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
    bonusTime: "2.7min",
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
    bonusTime: "1h 48min",
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
    bonusTime: "1h 8min",
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
    bonusTime: "31.5min",
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
    bonusTime: "3h 36min",
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
    bonusTime: "54min",
    sellPrice: 41,
    yield: 3,
    waters: 2,
    img: "https://dreamlightvalley.wikizet.com/english/images/e/e7/Spinach_Seed.png",
  },
  {
    name: "Tomato",
    location: "Dazzle Beach",
    seedPrice: 8,
    time: "25min",
    bonusTime: "22.5min",
    sellPrice: 22,
    yield: 3,
    waters: 2,
    img: "https://dreamlightvalley.wikizet.com/english/images/3/3f/Tomato_Seed.png",
  },
  {
    name: "Zucchini",
    location: "Sunlit Plateau",
    seedPrice: 30,
    time: "40min",
    bonusTime: "36min",
    sellPrice: 52,
    yield:2,
    waters: 2,
    img: "https://dreamlightvalley.wikizet.com/english/images/5/5e/Zucchini_Seed.png",
  },
  {
    name: "Rice",
    location: "Glade of Trust",
    seedPrice: 35,
    time: "50min",
    bonusTime: "45min",
    sellPrice: 61,
    yield: 2,
    waters: 1,
    img: "https://dreamlightvalley.wikizet.com/english/images/9/9b/Rice_Seed.png",
  },
  {
    name: "Wheat",
    location: "Peaceful Meadow",
    seedPrice: 1,
    time: "1min",
    bonusTime: "54s",
    sellPrice: 2,
    yield: 2,
    waters: 1,
    img: "https://dreamlightvalley.wikizet.com/english/images/7/73/Wheat_Seed.png",
  },
  {
    name: "Canola",
    location: "Forest of Valor",
    seedPrice: 25,
    time: "35min",
    bonusTime: "31.5min",
    sellPrice: 109,
    yield: 1,
    waters: 4,
    img: "https://dreamlightvalley.wikizet.com/english/images/5/52/Canola_Seed.png",
  },
  {
    name: "Corn",
    location: "Dazzle Beach",
    seedPrice: 15,
    time: "12min",
    bonusTime: "10.8min",
    sellPrice: 16,
    yield: 2,
    waters: 1,
    img: "https://dreamlightvalley.wikizet.com/english/images/5/58/Corn_Seed.png",
  },
  {
    name: "Soya",
    location: "Sunlit Plateau",
    seedPrice: 60,
    time: "1h 30min",
    bonusTime: "1h 21min",
    sellPrice: 69,
    yield: 3,
    waters: 2,
    img: "https://dreamlightvalley.wikizet.com/english/images/d/dd/Soya_Seed.png",
  },
  {
    name: "Sugarcane",
    location: "Dazzle Beach",
    seedPrice: 5,
    time: "7min",
    bonusTime: "6.3min",
    sellPrice: 19,
    yield: 1,
    waters: 1,
    img: "https://dreamlightvalley.wikizet.com/english/images/d/dc/Sugarcane_Seed.png",
  },
  {
    name: "Cotton",
    location: "Sunlit Plateau",
    seedPrice: 37,
    time: "25min",
    bonusTime: "22.5min",
    sellPrice: 42,
    yield: 1,
    waters: 4,
    img: "https://dreamlightvalley.wikizet.com/english/images/9/97/Cotton_Seed.png",
  },
];

// ----------------------------------------------------------------------------------------------------------

//selectize js
$(document).ready(function () {
  $('select').selectize({
      sortField: 'text'
  });
});

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
//operations to calculate cost, net profit and show: where to plant, watering times.
  for (const cropObject2 of cropInfo) {
    let coste = cropObject2.seedPrice * inputNumber.value;
    let beneficio = ((cropObject2.sellPrice * inputNumber.value * cropObject2.yield) - coste);
//print on final result div
    if (selected.value === cropObject2.name){ 
      resultadoFinal.innerHTML = `📉The <span style= "color: Red; font-weight: bold;">cost</span> of buying <strong>${cropObject2.name}</strong> seeds will be <strong>${coste}</strong> star coins.<br>`
      resultadoFinal.innerHTML += `📈The <span style= "color: Green;  font-weight: bold;">net profit</span> will be <strong>${beneficio}</strong> star coins.* <br>`
      resultadoFinal.innerHTML += `🛒<strong>${cropObject2.name} </strong>can be purchased on Goofy's <strong>"${cropObject2.location}"</strong> Stall. <br> `
      resultadoFinal.innerHTML += `💧<strong>${cropObject2.name} </strong>must be <span style= "color: blue;  font-weight: bold;">watered</span> <strong>${cropObject2.waters} time/s</strong>. <br>`
      resultadoFinal.innerHTML += `⏳<strong>${cropObject2.name}</strong> will take <strong>${cropObject2.time} </strong> to grow.* <br>`
      resultadoFinal.innerHTML += `✨If planted on <strong>"${cropObject2.location}"</strong>, it will take <strong>${cropObject2.bonusTime}</strong> to grow.* <br>`
      resultadoFinal.innerHTML += ` *<i style="font-size: 12px;">(Net profit = final profit - crop cost)</i>. `
      resultadoFinal.innerHTML += ` *<i style="font-size: 12px;">(if watered when needed)</i>. `
      resultadoFinal.innerHTML += ` *<i style="font-size: 12px;">(-10% time reduction)</i>. `

    };
  };
};



