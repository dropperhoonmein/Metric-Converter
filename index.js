//Theme
const themebtn = document.querySelector(".theme");
themebtn.addEventListener('click', () =>{
    document.body.classList.toggle('body-theme');
} );


//length
const cm_1 = document.getElementById("Cm_1");
const feets_1 = document.getElementById("Feets_1");

cm_1.addEventListener("input",function(){
    let a = cm_1.value
    feets_1.value = (Math.round((a*100)/30.48))/100
});
feets_1.addEventListener("input",function(){
    let a = feets_1.value
    cm_1.value = a*30.48
});

const km_2 = document.getElementById("Km_2");
const mile_2 = document.getElementById("Mile_2");

km_2.addEventListener("input", function(){
    let a = km_2.value
    mile_2.value = (Math.round((a*0.621371*100)))/100
});
mile_2.addEventListener("input", function(){
    let a = mile_2.value
    km_2.value = (Math.round((a*1000)/0.621371))/1000
})

const cm_3 = document.getElementById("Cm_3");
const inches_3 = document.getElementById("Inches_3");

cm_3.addEventListener("input",function(){
    let a = cm_3.value
    inches_3.value = Math.round((a*1000)/2.54)/1000
})
inches_3.addEventListener("input", function(){
    let a = inches_3.value
    cm_3.value = a*2.54
})

const meter_4 = document.getElementById("Meter_4");
const mm_4 = document.getElementById("mm_4");

meter_4.addEventListener("input", function(){
    let a = meter_4.value
    mm_4.value = a*1000
})
mm_4.addEventListener("input",function(){
    let a = mm_4.value
    meter_4.value = a/1000
})


const Meter_5 = document.getElementById("Meter_5");
const Micrometer_5 = document.getElementById("Micrometer_5");

Meter_5.addEventListener("input", function(){
    let a = Meter_5.value
    Micrometer_5.value = a*1000000
})
Micrometer_5.addEventListener("input",function(){
    let a = Micrometer_5.value
    Meter_5.value = a/1000000
})


const Meter_6 = document.getElementById("Meter_6");
const Nanometers_7 = document.getElementById("Nanometers_7");

Meter_6.addEventListener("input", function(){
    let a = Meter_6.value
    Nanometers_7.value = a*1000000000
})
Nanometers_7.addEventListener("input",function(){
    let a = Nanometers_7.value
    Meter_6.value = a/1000000000
})

const Meter_7 = document.getElementById("Meter_7");
const Angstrom_7 = document.getElementById("Angstrom_7");

Meter_7.addEventListener("input", function(){
    let a = Meter_7.value
    Angstrom_7.value = a*10000000000
})
Angstrom_7.addEventListener("input",function(){
    let a = Angstrom_7.value
    Meter_7.value = a/10000000000
})

const Meter_8 = document.getElementById("Meter_8");
const Picometer_8 = document.getElementById("Picometer_8");

Meter_8.addEventListener("input", function(){
    let a = Meter_8.value
    Picometer_8.value = a*1000000000000
})
Picometer_8.addEventListener("input",function(){
    let a = Picometer_8.value
    Meter_8.value = a/1000000000000
})

const Meter_9 = document.getElementById("Meter_9");
const Fermi_9 = document.getElementById("Fermi_9");

Meter_9.addEventListener("input", function(){
    let a = Meter_9.value
    Fermi_9.value = a*1000000000000000
})
Fermi_9.addEventListener("input",function(){
    let a = Fermi_9.value
    Meter_9.value = a/1000000000000000
})

const Meter_10 = document.getElementById("Meter_10");
const Light_10 = document.getElementById("Light_10");

Meter_10.addEventListener("input", function(){
    let a = Meter_10.value
    Light_10.value = a/9.461e+15
})
Light_10.addEventListener("input",function(){
    let a = Light_10.value
    Meter_10.value = a*9.461e+15
})

const Meter_12 = document.getElementById("Meter_12");
const Parsec_12 = document.getElementById("Parsec_12");

Meter_12.addEventListener("input", function(){
    let a = Meter_12.value
    Parsec_12.value = a/3.086e+16
})
Parsec_12.addEventListener("input",function(){
    let a = Parsec_12.value
    Meter_12.value = a*3.086e+16
})


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