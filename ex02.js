// ex02.js

function countEvenNumbers(arr) {
    let hagrapaire = 0;
  
      for ( let hagra = 0; hagra < arr.length; hagra++) {
        if ( arr[hagra] % 2 === 0){
          hagrapaire++
        }
      }
   return hagrapaire;
 }
 
 // Exemples de test :
 console.log(countEvenNumbers([1, 2, 3, 4])); // Résultat attendu : 2
 console.log(countEvenNumbers([7, 11, 19])); // Résultat attendu : 0