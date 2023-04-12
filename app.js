let names = prompt("enter your name" );

let gender = prompt("enter your gender.(male or female)");

let age = prompt("enter your age");

let call = "";

let qus1 = prompt("do you like the website ? (yes / No)");
let qus2 = prompt("do you want to continue? (yes / No)");
let qus3 = prompt("do you have any questions ? (yes / No)");


if (gender === "male" ){
    call = "Mr "
}else if (gender === "female"){
    call = "Ms "
}else{
    call = ""
}

if(age <= 0){
    alert("not allowed")
}

if(confirm("skip welcome message")=== false) {
    alert(`Welcome ${call} ${names} `)
};

function invalidAnswer (inv){
    if (inv === "yes"){
        inv= "yes";
    }else if(inv === "no"){
        inv= "no"
    }else{
        inv = "invalid"
    }
    return inv;
}

invalidAnswer(qus1)
invalidAnswer(qus2)
invalidAnswer(qus3)

let arr = [];

arr.push(invalidAnswer(qus1),invalidAnswer(qus2),invalidAnswer(qus3))


function traverse(t){
    for(let i = 0; i < t.length; i ++){
        console.log(t[i])
    }
}

traverse(arr);