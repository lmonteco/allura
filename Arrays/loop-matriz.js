const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]
 
const notasGerais = [notas1, notas2, notas3]
const mediasGerais = []; 
let mediaTotal = 0;

for (let i = 0; i < notasGerais.length; i++) {
  let media = 0

  for (let j = 0; j < notasGerais[i].length; j++) {
    media += notasGerais[i][j]/notasGerais[i].length;
  }
  mediasGerais.push(media);
}
console.log(mediasGerais);

for (const media of mediasGerais) {
  mediaTotal += media / mediasGerais.length;
}

console.log(`A média total é de: ${mediaTotal}`);