function one(){
    console.log( "The One is Working");
}

var two= function(){
    console.log("The Two is Working");
}

var three=() =>{
    console.log("The Three is Working");
}

var four = () =>console.log("The Four is Working..");

//above is defination and below is function calling
one();
two();
three();
four();