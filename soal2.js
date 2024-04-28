var productBin = {
    "requestId": null,
    "data": [
      {
        "id": 100000057465,
        "storageId": 10000008207,
        "code": "A01-01-01-A",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 76,
        "createdTime": "2021-12-21T13:54:48Z"
      },
      {
        "id": 100000057466,
        "storageId": 10000002181,
        "code": "A01-01-01-B",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 71,
        "createdTime": "2021-12-21T13:54:48Z"
      },
      {
        "id": 100000065224,
        "storageId": 10000008884,
        "code": "Tgt00-A-A-01",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 10,
        "createdTime": "2022-02-08T10:35:19Z"
      }
    ],
    "message": "success"
  };
  
  // Fungsi untuk menjumlahkan quantity dari storageId untuk productCode tertentu
  function jumlahkanQuantity(response, productCode) {
    var totalQuantity = 0;
    var data = response.data;
  
    for (var i = 0; i < data.length; i++) {
      if (data[i].productCode === productCode) {
        totalQuantity += data[i].quantity;
      }
    }
  
    return totalQuantity;
  }
  
  // Memanggil fungsi untuk menjumlahkan quantity dari storageId untuk productCode FBR00040101
  var productCode = 'FBR00040101';
  var totalQuantity = jumlahkanQuantity(productBin, productCode);
  
  console.log('Total quantity untuk productCode', productCode, 'adalah', totalQuantity);