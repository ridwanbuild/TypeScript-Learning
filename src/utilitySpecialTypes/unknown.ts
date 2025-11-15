let box : any = "magics box";


let box1 : unknown = "Hello"; 

box1 = "box"

if (typeof box1 === "string") {
    console.log(box1.toUpperCase());

}
else {
    console.log('this is any types ');
    
}