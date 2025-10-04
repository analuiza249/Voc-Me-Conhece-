function verificarData() {
  const resposta = document.getElementById("respostaData").value;
  const resultado = document.getElementById("resultadoData");

  // O input type="date" retorna no formato AAAA-MM-DD
  if (resposta === "2009-07-04") { 
    resultado.textContent = "Muito bom! 🎉";
    resultado.style.color = "green";
    resultado.style.backgroundColor = "#D4FFD4";
    resultado.style.border = "2px solid green";
  } else {
    resultado.textContent = "Errou! ❌";
    resultado.style.color = "red";
    resultado.style.backgroundColor = "#FFD4D4";
    resultado.style.border = "2px solid red";
  }
}
function verificarNome() {
  const resposta = document.getElementById("respostaNome").value.trim().toLowerCase();
  const resultado = document.getElementById("resultadoNome");

  const respostaCorreta = "ana luiza de melo cardoso";

  if (resposta === respostaCorreta) {
    resultado.textContent = "Muito bom! 🎉";
    resultado.style.color = "green";
    resultado.style.backgroundColor = "#D4FFD4";
    resultado.style.border = "2px solid green";
  } else {
    resultado.textContent = "Errou! ❌";
    resultado.style.color = "red";
    resultado.style.backgroundColor = "#FFD4D4";
    resultado.style.border = "2px solid red";
  }
}
