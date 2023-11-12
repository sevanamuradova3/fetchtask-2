// API: https://northwind.vercel.app/api
// /products 
// Ən bahalı məhsul 
// Ortalama stok miqdarı
// “C” ilə başlayan məhsullar 
//const products = document.getElementById("products");
// Ən bahalı məhsul 
// fetch('https://northwind.vercel.app/api/products')
//     .then(res => res.json())
//     .then(data => {

//         let expensiveProduct = 0;

//         data.forEach(item => {
//             if (item.unitPrice > expensiveProduct) {
//                 expensiveProduct = item.unitPrice;
//                 expensiveProducts = item;
//             }
//         });
//     console.log(expensiveProducts.name);
//     console.log(expensiveProduct);

//     });
// // Ortalama stok miqdarı
// fetch('https://northwind.vercel.app/api/products')
// .then(res=>res.json())
// .then(data=>{
//     let sum=0
//     for(let i of data)
//     {
//         sum+=i.unitsInStock
//     }
//     let stocks=data.length
//     console.log(sum/stocks);

// })
// // “C” ilə başlayan məhsullar

// fetch("https://northwind.vercel.app/api/products")
//   .then(res => res.json())
//   .then((data) => {
//     let startingWithC = data.filter(item=> item.name[0] == "C");
//     console.log(startingWithC);
//   });
//////////////////////////////////////////

// /customers 
// “London” şəhərindəki müştəriləri console a yaz 
// Region NULL olan nə qədər customer var?

// fetch("https://northwind.vercel.app/api/customers")
//   .then((res) => res.json())
//   .then((data) => {
//     let customers = data.filter((item) => item.address.city == "London");
//     console.log(cutomers);
//   });

// fetch("https://northwind.vercel.app/api/customers")
//   .then((res) => res.json())
//   .then((data) => {
//     let customersnumber = data.filter((item) => item.address.region == "NULL");
//     console.log(customersnumber);
//   });
///////////////////////////////////////////////////////////
// API 2: https://jsonplaceholder.typicode.com
// /posts
// Id-si 1 olan userin nə qədər postu var?
// /albums
// 1 nömrəli albümdə nə qədər fotoqraf var?

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => {
//     let a = data.filter((item) => item.userId == 1);
//     console.log(a.length);
//   });

// fetch("https://jsonplaceholder.typicode.com/albums")
//   .then((res) => res.json())
//   .then((data) => {
//     let albom = data.filter((item) => item.userId == 1);
//     console.log(albom.length);
//   });