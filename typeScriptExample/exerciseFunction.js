var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//กำหนด array ของ product
var products = [
    { name: "Laptop", price: 50000, category: "Electronics" },
    { name: "Shirt", price: 1200, category: "Electronics" },
    { name: "Coffee Maker", price: 2500, category: "Appliances" },
];
//สร้างฟังก์ชั่นชื่อ filterProductByPrice สำหรับกรองข้อมูลผลิตภัณตามราคาที่กำหนด
function filterProductByPrice(product) {
    return products.filter(function (product) { return product.price > 2000; });
}
//สร้าง function ชื่อ discountProduct ใช้สำหรับลดราคาสินค้า 10%
function applydiscountProduct(products) {
    return products.map(function (product) { return (__assign(__assign({}, product), { price: product.price * 0.9 })); });
}
//เรียกใช้ function
var filterProduct = filterProductByPrice(products);
var discountedProduct = applydiscountProduct(filterProduct);
// show result
//console.log(filterProduct);
console.log(discountedProduct);
