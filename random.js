const Kilograms_1 = document.getElementById("Kilograms_1");
const Pounds_1 = document.getElementById("Pounds_1");

Kilograms_1.addEventListener("input", function(){
    let a = Kilograms_1.value
    Pounds_1.value =  a*2.2
})
Pounds_1.addEventListener("input",function(){
    let a = Pounds_1.value
    Kilograms_1.value = a/2.2
})