//all data up to date on 01/10/22 , extracted from --->  https://docs.google.com/file/d/10S0juAi9CEUnQV3MjBsFcMfuSrHFdjjL/edit?filetype=msexcel
const cropInfo = [
  {
    name: "Asparagus",
    location: "Frosted Heights",
    seedPrice: 150,
    time: 2.25,
    sellPrice: 399,
    waters: 2,
    img: "https://dreamlightvalley.wikizet.com/english/images/4/45/Asparagus.png",
  },
  {
    name: "Bell Pepper",
    location: "Forest of Valor",
    seedPrice: 12,
    time: 0.25,
    sellPrice: 33,
    waters: 1,
    img: "https://dreamlightvalley.wikizet.com/english/images/e/e2/Bell_Pepper.png",
  },
  {
    name: "Carrot",
    location: "Peaceful Meadow",
    seedPrice: 10,
    time: 0.25,
    sellPrice: 44,
    waters: 1,
    img: "https://dreamlightvalley.wikizet.com/english/images/c/c3/Carrot.png",
  },
  {
    name: "Chili Pepper",
    location: "Sunlit Plateau",
    seedPrice: 20,
    time: 0.75,
    sellPrice: 78,
    waters: 1,
    img: "https://dreamlightvalley.wikizet.com/english/images/a/ab/Chili_Pepper.png",
  },
  {
    name: "Cucumber",
    location: "Frosted Heights",
    seedPrice: 40,
    time: 1.25,
    sellPrice: 159,
    waters: 1,
    img: "https://dreamlightvalley.wikizet.com/english/images/5/59/Cucumber.png",
  },
  {
    name: "Eggplant",
    location: "Frosted Heights",
    seedPrice: 95,
    time: 3,
    sellPrice: 308,
    waters: 2,
    img: "https://dreamlightvalley.wikizet.com/english/images/8/8f/Eggplant.png",
  },
  {
    name: "Leek",
    location: "Forgotten Lands",
    seedPrice: 120,
    time: 2,
    sellPrice: 309,
    waters: 3,
    img: "https://dreamlightvalley.wikizet.com/english/images/5/57/Leek.png",
  },
  {
    name: "Lettuce",
    location: "Peaceful Meadow",
    seedPrice: 3,
    time: 0.05,
    sellPrice: 8,
    waters: 1,
    img: "https://dreamlightvalley.wikizet.com/english/images/d/da/Lettuce.png",
  },
  {
    name: "Okra",
    location: "Glade of Trust",
    seedPrice: 135,
    time: 2,
    sellPrice: 342,
    waters: 1,
    img: "https://dreamlightvalley.wikizet.com/english/images/e/e7/Okra.png",
  },
  {
    name: "Onion",
    location: "Forest of Valor",
    seedPrice: 50,
    time: 1.25,
    sellPrice: 170,
    waters: 3,
    img: "https://dreamlightvalley.wikizet.com/english/images/5/51/Onion.png",
  },
  {
    name: "Potato",
    location: "Forgotten Lands",
    seedPrice: 55,
    time: 0.6,
    sellPrice: 126,
    waters: 4,
    img: "https://dreamlightvalley.wikizet.com/english/images/c/c2/Potato.png",
  },
  {
    name: "Pumpkin",
    location: "Forgotten Lands",
    seedPrice: 275,
    time: 4,
    sellPrice: 664,
    waters: 2,
    img: "https://dreamlightvalley.wikizet.com/english/images/6/64/Pumpkin.png",
  },
  {
    name: "Spinach",
    location: "Glade of Trust",
    seedPrice: 45,
    time: 1,
    sellPrice: 123,
    waters: 2,
    img: "https://dreamlightvalley.wikizet.com/english/images/6/60/Spinach.png",
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
      resultadoFinal.innerHTML = `- The cost of buying ${cropObject2.name} seeds will be ${coste} star coins. <br>`
      resultadoFinal.innerHTML += `- The net profit will be ${beneficio} star coins (Net profit = final profit - crop cost). <br>`
      resultadoFinal.innerHTML += `- ${cropObject2.name} must be planted on "${cropObject2.location}". <br>`
      resultadoFinal.innerHTML += `- ${cropObject2.name} must be watered ${cropObject2.waters} times. <br>`
//convert hours to minutes when format is decimals on hours.
      if (cropObject2.time < 1){
        let timeMinutes = cropObject2.time * 60;
        resultadoFinal.innerHTML += `- ${cropObject2.name} will take ${timeMinutes} minutes to grow approximately (if watered when needed).`
      } else {
        resultadoFinal.innerHTML += `- ${cropObject2.name} will take ${cropObject2.time} hours to grow approximately (if watered when needed).`
      };
    };
  };
};



