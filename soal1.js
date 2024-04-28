// program dari akar pangkat 2 dari x dengan x harus bilangan genap
function hitungAkarPangkat2(x) 
{
  if (x < 0) 
  {
    throw new Error("Tidak bisa input bilangan negatif");
  } 
  else if (x % 2 !== 0) 
  {
    throw new Error("Tidak bisa input bilangan ganjil");
  }

  return Math.sqrt(x);
}

// eksekusi program
try {
  var input = prompt("Masukan nilai x:");
  var angka = parseInt(input);

    var hasil = hitungAkarPangkat2(angka);
    console.log("Akar pangkat 2 dari", angka, "adalah", hasil);
 
} catch (error) {
  console.log(error.message);
}