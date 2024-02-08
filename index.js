let objectPerson={
    firstName : "Sai Krishna",
    lastName:"kamatham"
}

console.log(objectPerson);

function fullname(){
    console.log(objectPerson.firstName+objectPerson.lastName);
}

function onButtonClick(){
    console.log("Button Clicked");
}

function oninputchange(e){
    console.log(e.value);
}

function onkeyDown(e){
    console.log(e.value);
}

function onkeyUp(e){
    console.log(e.value);
}