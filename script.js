let form = document.querySelector("form");
let list = document.getElementById("faultyItems");
list.style.visibility = "hidden";
let pilotName = '';
let copilotName = '';
let allNames = pilotName + copilotName;
let fuel = 0;
let mass = 0;

fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
   response.json().then( function(json) {
      let random = Math.floor(Math.random() * 6);
      document.getElementById("output").innerHTML= 
      `<h2>Mission Destination</h2>
         <ul>
            <li>Name: ${json[random].name}</li>
            <li>Diameter: ${json[random].diameter}</li>
            <li>Star: ${json[random].star}</li>
            <li>Distance from Earth: ${json[random].distance}</li>
            <li>Number of Moons: ${json[random].moons}</li>
         </ul>
      <img src="${json[random].image}">`;
   })
});

form.addEventListener("submit", function(event) {
   event.preventDefault();
   pilotName = document.querySelector("input[name=pilotName]").value;
   copilotName = document.querySelector("input[name=copilotName]").value;
   fuel = document.querySelector("input[name=fuelLevel]").value;
   mass = document.querySelector("input[name=cargoMass").value;
   fuelNumber = Number(fuel);
   massNumber = Number(mass);

   if (pilotName === "" || copilotName === "" || fuel === "" || mass === "") {
      alert("All fields are required!");
   } else if (fuel < 0 || mass < 0) {
      alert("Please enter a positive number for both the fuel and mass fields");
   } else if (pilotName.includes('1') || pilotName.includes('2') || pilotName.includes('3') || pilotName.includes('4') || pilotName.includes('5') || pilotName.includes('6') || pilotName.includes('7') || pilotName.includes('8') || pilotName.includes('9') || pilotName.includes('0') || pilotName.includes('.')) {
   alert('Please use letters in the pilot name field!');
   } else if (copilotName.includes('1') || copilotName.includes('2') || copilotName.includes('3') || copilotName.includes('4') || copilotName.includes('5') || copilotName.includes('6') || copilotName.includes('7') || copilotName.includes('8') || copilotName.includes('9') || copilotName.includes('0') || copilotName.includes('.')) {
   alert('Please use letters in the copilot name field!')
   } else {
   list.style.visibility = "visible";
   pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch`
   copilotStatus.innerHTML = `Copilot ${copilotName} is ready for launch`
      if (fuelNumber < 10000 || massNumber > 10000) {
         launchStatus.style.color = 'red';
         launchStatus.innerHTML = `Shuttle Not Ready For Launch`;

         if (fuelNumber < 10000 && massNumber > 10000) {
            fuelStatus.innerHTML = `Fuel level too low for launch`;
            cargoStatus.innerHTML = `Cargo mass too high for launch`;
         } else if (fuelNumber < 10000 && massNumber < 10000) {
            fuelStatus.innerHTML = `Fuel level too low for launch`;
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
         } else {
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
            cargoStatus.innerHTML = `Cargo mass too high for launch`;
         }
      } else {
         launchStatus.style.color = 'green';
         launchStatus.innerHTML = `Shuttle Is Ready For Launch`;
         fuelStatus.innerHTML = `Fuel level high enough for launch`;
         cargoStatus.innerHTML = `Cargo mass high enough for launch`;
      }
   }
});





// // let list = document.getElementById("faultyItems");
// // let form = document.querySelector("form");
// // list.style.visibility = "hidden";
// // let fuel = document.getElementById("fuelStatus");
// let cargo = document.getElementById("cargoStatus");
// let pilotStatus = document.getElementById("pilotStatus");
// let copilotStatus = document.getElementById("copilotStatus");

// form.addEventListener("submit", function(event) {
//    event.preventDefault();

//    let pilotInput = document.querySelector("input[name=pilotName]");
//    let pilot = pilotInput.nodeValue;
//    let pilotTest = Number(pilot);

//    let copilotInput = document.querySelector("input[name=copilotName]");
//    let copilot = copilotInput.value;
//    let copilotTest = Number(copilot);

//    let fuelInput = document.querySelector("input[name=fuelLevel]");
//    let fuelLevel = Number(fuelInput.value);

//    let cargoInput = document.querySelector("input[name=cargoMass");
//    let cargoLevel = Number(cargoInput.value);
// })









// https://handlers.education.launchcode.org/static/planets.json




/* This block of code shows how to format the HTML once you fetch some planetary JSON!
document.getElementById("output").innerHTML= `<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">`
*/




//   else if (userInput[0] == '0' || userInput[0] == '-' || userInput.includes('.')){
//       window.alert("Please start a Pokemon ID only with digits 1-9");
//       document.getElementById("output").style.display = "none";
//   }
//   else {
//       document.getElementById("output").style.display = "none";
//       window.alert("Please enter a valid ID 1-807");
//   }