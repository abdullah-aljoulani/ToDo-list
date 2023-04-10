let name = prompt("enter your name" );

let gender = prompt("enter your gender.(male or female)");

let age = prompt("enter your age");

let call = "";

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
    alert(`Welcome ${call} ${name} `)
}