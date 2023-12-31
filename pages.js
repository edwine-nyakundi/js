
/*function paragraphInserter(){
    document.getElementById("p").innerHTML="POWERED BY ARIEL TECHNOLOGIES AT";

}
function company(){
    document.write("POWERED BY ARIEL TECHNOLOGIES");
}
function square(x){
    return x*x;
    
}
document.getElementById("square").innerHTML=square(5);
function objects(){
    var car={
        name:"audi", 
        price:7000000,
        owner:"edwine",
        fullCarDetails:function (){
            return this.name+" "+this.owner+" "+this.price;
        }
    }
    document.getElementById("obj").innerHTML="car details are :"+car.fullCarDetails();
}*/
var numbers = [1, 4, 67, 4, 75, 45, 75];
document.getElementById("sorts").innerHTML = numbers;
function sortArray() {
    var x = numbers; document.getElementById("sorts").innerHTML = x;
    numbers.sort(function (a, b) { return a - b });
    document.getElementById("sorts").innerHTML = numbers;


}