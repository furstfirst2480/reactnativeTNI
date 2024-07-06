//กำหนด Enum สำหรับสินค้า
interface Book
{
    title: string;
    genre: 'fiction'| 'non-fiction'|'educational';
    price: number;
};

//กำหนด array ของสินค้าใช้ชนิดข้อมูล any
const books: Book[] = 
[
    {title: "The Great Gatsby", genre: "fiction", price: 320},
    {title: "War and Peace", genre: "fiction", price: 250},
    {title: "Economics 101", genre: "educational", price: 480},
    {title: "In Cold Blood", genre: "non-fiction", price: 300},
    {title: "In Catcher in the Rye", genre: "fiction", price: 400}   
]

// Create function name is "filterPrductByPrice" สำหรับกรองข้อมูลผลิตภัณฑ์ตามราคาที่กำหนด
function filterBookByPrice(products: Book[],minPrice:number)
{
    return products.filter(product=>product.price>300 &&product.genre==="fiction");
}   

// Create function name is "discountProduct" ใช้สำหรับลดรคาสินค้า 10%
function discountBook(products: Book[]):Book[]
{
    return products.map(product=>({...product, price:product.price*0.9})); //copy ทุก ๆ แถวของ array
}

//Call function
let filerBook = filterBookByPrice(books,300);
let discountBooks = discountBook(filerBook);

//Testing the function
//console.log(filerProduct);
console.log(discountBooks);
