const ironhard = {
  offtank1: "Forretres",
  offtank2: "Klin Klang",
  t1h1: "Aegis Slash",
  t1h2: "shiny Mawile",
  dps1: "Bronzong",
  dps2: "Metang",
  dps3: "magneton",
  tipagem: "Metal",
  rotacao:  function(){
    return ironhard.offtank1 + ", " + ironhard.offtank2 + ironhard.t1h1 + ", " + ironhard.t1h2;
  }
};

document.getElementById("teste").textContent = irohard.tipagem


