// ==== Callback
function hitungAngka(angka1, angka2, callback) {
  var hasil = angka1 + angka2;

  callback(hasil);
}

hitungAngka(1, 2, function (hasil) {
  console.log('hasil: ' + hasil);
});


// ==== Promise
function hitungKedua(angka1, angka2) {
  return new Promise(function (resolve, reject) {
    var hasil = angka1 + angka2;
    if (hasil < 0) {
      reject(hasil);
    } else {
      resolve(hasil);
    }
  });
}

hitungKedua(1, -2)
  .then(function (hasil) {
    console.log('kabar baik', hasil);
  })
  .catch(function (error) {
    console.log('kabar buruk ' + error);
  });

// async await / synchoronous ES6
async function hitungKetiga(angka1, angka2) {
  var hasil = await angka1 + angka2;
  console.log('hasil async await ' + hasil);
}

hitungKetiga(2, 3);