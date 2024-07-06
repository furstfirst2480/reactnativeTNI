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
;
//กำหนด array ของสินค้าใช้ชนิดข้อมูล any
var books = [
    { title: "The Great Gatsby", genre: "fiction", price: 320 },
    { title: "War and Peace", genre: "fiction", price: 250 },
    { title: "Economics 101", genre: "educational", price: 480 },
    { title: "In Cold Blood", genre: "non-fiction", price: 300 },
    { title: "In Catcher in the Rye", genre: "fiction", price: 400 }
];
// Create function name is "filterPrductByPrice" สำหรับกรองข้อมูลผลิตภัณฑ์ตามราคาที่กำหนด
function filterBookByPrice(products, minPrice) {
    return products.filter(function (product) { return product.price > 300 && product.genre === "fiction"; });
}
// Create function name is "discountProduct" ใช้สำหรับลดรคาสินค้า 10%
function discountBook(products) {
    return products.map(function (product) { return (__assign(__assign({}, product), { price: product.price * 0.9 })); }); //copy ทุก ๆ แถวของ array
}
//Call function
var filerBook = filterBookByPrice(books, 300);
var discountBooks = discountBook(filerBook);
//Testing the function
//console.log(filerProduct);
console.log(discountBooks);
