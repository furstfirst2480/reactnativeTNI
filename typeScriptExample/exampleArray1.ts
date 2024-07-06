//สร้างและเข้าถึง Array
let numbers : number[]=[10,20,30,40,50];
console.log(numbers[2]);//30

// การใช้งาน loop ร่วมกับ array
let names:string[]=['Alice','Bob','Charlie'];
for(let name of names){
console.log(name);
}
//การเพิ่มและลบข้อมูลใน Array(function)
let fruits:string[]=["Apple","Banana"];
fruits.push("Cherry");
fruits.pop();
console.log(fruits);