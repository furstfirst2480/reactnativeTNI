type Product = {
  name: string;
  price: number;
  category: string;
};
//กำหนด array ของ product
let products: Product[] = [
  { name: "Laptop", price: 50000, category: "Electronics" },
  { name: "Shirt", price: 1200, category: "Electronics" },
  { name: "Coffee Maker", price: 2500, category: "Appliances" },
];
//สร้างฟังก์ชั่นชื่อ filterProductByPrice สำหรับกรองข้อมูลผลิตภัณตามราคาที่กำหนด
function filterProductByPrice(product: Product[]){
    return products.filter(product=>product.price>2000);
}
//สร้าง function ชื่อ discountProduct ใช้สำหรับลดราคาสินค้า 10%
function applydiscountProduct(products:Product[]):Product[]{
  return products.map(product=>({...product,price:product.price*0.9}));
}
//เรียกใช้ function
let filterProduct = filterProductByPrice(products);
let discountedProduct = applydiscountProduct(filterProduct);
// show result
//console.log(filterProduct);
console.log(discountedProduct);