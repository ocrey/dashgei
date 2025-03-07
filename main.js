const ironhard = {
  offtank1: "Forretres",
  offtank2: "Klin Klang",
  t1h1: "Aegis Slash",
  t1h2: "Shiny Mawile",
  dps1: "Bronzong",
  dps2: "Metang",
  dps3: "Magneton",
  type: "Metal",

};


const myrotation = document.querySelector("myrotation");
let uniqueId = ironhard.type;
let counter = 1;
while (document.getElementById(uniqueId)) {
  uniqueId = ironhard.type + counter;
  counter++;
}
myrotation.setAttribute("id", uniqueId);

