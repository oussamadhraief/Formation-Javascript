// I used firebase realtime database in this version of my website

//Data

var firebaseConfig = {
  apiKey: "AIzaSyCDcfRlaYDRLzA8cVeSXfbh98HeVXoyR-c",
  authDomain: "claigsrist.firebaseapp.com",
  databaseURL: "https://claigsrist-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "claigsrist",
  storageBucket: "claigsrist.appspot.com",
  messagingSenderId: "927216397570",
  appId: "1:927216397570:web:c58e81522d3bc3ca60261b",
  measurementId: "G-PDP8VG2MSV"
};
firebase.initializeApp(firebaseConfig);


let database = firebase.database();

let ref = database.ref("Products");

//Functions

function productsBox({
  id,
  name,
  price,
  quantity,
  picture
}) {
  return `<div class="prod1" id="${id}">
    <div class="remargin"><img src="${picture}" class="prodimg" alt="product image" width="150px" height="150px"></div>
    <div class="info"><div class="hr"></div>
    <div class="forflex">
    <p class="const1 formargin">Product Name:</p>
    <p class="vari1">${name}</p>
    <p class="const1">Price:</p>
    <p class="vari1">${price} DT.</p>
    <p class="const1">Quantity Available: </p>
    <p class="vari1">${quantity} pieces.</p>
    </div>
    <button class="addtochart">Add To Chart</button></div>
</div>`;
}

function displayProduct() {
  ref.on("value", (snapshot) => {
    snapshot = snapshot.val();
    let keys = Object.keys(snapshot);
    let shopProducts = document.querySelector("#products");
    shopProducts.innerHTML = "";
    for (let i = 0; i < keys.length; i++) {
      shopProducts.innerHTML += productsBox(snapshot[keys[i]]);
    }
  });
}

displayProduct();