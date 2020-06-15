




$(".info").click(function(e){
    let TestName = $("#testname").val();

let Score = $("score").val();

    selectElement =document.querySelector('#time'); 
    Time = selectElement.options[selectElement.selectedIndex].value; 
    
console.log(Time);
console.log(Score);
console.log(TestName);
});