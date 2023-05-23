// Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
// - brasileira;
// - argentina;
// - uruguaia;
// - chilena;
// - colombiana;

const nacionalidade = prompt("Digite sua nacionalidade").toLowerCase()
function nacional(nacionalidade){
if (nacionalidade === "brasileira"){
console.log("Brasileiro")
} else if (nacionalidade === "argentino"){
 console.log("Argentino")
}else if (nacionalidade === "uruguaia"){
    console.log("Uruguaio")
   }else if (nacionalidade === "chileno"){
    console.log("Chileno")
   }else if (nacionalidade === "colombiano"){
    console.log("Colombiano")
   }else 
   console.log("Nacionalidade não encontrada")
}




