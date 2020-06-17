var quesEntered = [];
var opt1Entered = [];
var opt2Entered = [];
var opt3Entered = [];
var opt4Entered = [];
var ansEntered  = [];
var counter = 1;
var TestName;
var Theme;
var Score;
var Totalscore;
var Time;
var Totaltime;



function Saveinfo() {
    TestName = document.getElementById('testname').value;

    selectElement1 = document.querySelector('#theme-dd'); 
    Theme = selectElement1.value; 
    
    Score = document.getElementById('score').value;
    Totalscore = Score*3;

    selectElement2 = document.querySelector('#time-dd'); 
    Time = selectElement2.value; 
    Totaltime = Time*3;
    
    if(TestName === '' || Theme === '' || Score === '' || Time === ''){

        alert("Please fill all fields.");

    }else{

        document.getElementById("info-blank").style.visibility="hidden";
        document.getElementById("node-blank").style.visibility="visible";
        document.getElementById("node-blank").style.top= "-550px";
    }

    
}    



function Savenode() {
    
    quesEntered[counter] = document.getElementById('ques').value;
    opt1Entered[counter] = document.getElementById('opt1').value;
    opt2Entered[counter] = document.getElementById('opt2').value;
    opt3Entered[counter] = document.getElementById('opt3').value;
    opt4Entered[counter] = document.getElementById('opt4').value;
    ansEntered[counter] = document.getElementById('ans').value;
    
    if(quesEntered[counter] === '' || opt1Entered[counter] === '' || opt2Entered[counter] === '' ||  opt3Entered[counter] === '' ||  opt4Entered[counter] === '' || ansEntered[counter] === ''){
        alert("Please fill all fields.");
    }else
    {
        counter++;

        document.getElementById("queno").innerHTML ='Question '+ counter +'.';

        document.getElementById('ques').value = '';
        document.getElementById('opt1').value = '';
        document.getElementById('opt2').value = '';
        document.getElementById('opt3').value = '';
        document.getElementById('opt4').value = '';
        document.getElementById('ans').value = '';
    }

    if(counter === 4){
        document.getElementById("node-blank").style.visibility="hidden";
        document.getElementById("savetestbtn").style.visibility="visible";
  
    }
    
}

function Savetest() {
    document.getElementById("savetestbtn").style.visibility="hidden";
    document.getElementById("node-blank").style.visibility="hidden";
    document.getElementById("node-list").style.visibility="visible";
    document.getElementById("node-list").style.top="-1150px";

    document.getElementById("TName").innerHTML = 'TEST NAME : '+ TestName;
    document.getElementById("Ttheme").innerHTML = 'Theme : '+ Theme;
    document.getElementById("totaltime").innerHTML = 'Total Time alloted : '+ Totaltime +' Minutes';
    document.getElementById("totalscore").innerHTML = 'Maximum Marks : '+ Totalscore;

    document.getElementById("question1").innerHTML ='1.'+ quesEntered[1];
    document.getElementById("1option1").innerHTML = opt1Entered[1];
    document.getElementById("1option2").innerHTML = opt2Entered[1];
    document.getElementById("1option3").innerHTML = opt3Entered[1];
    document.getElementById("1option4").innerHTML = opt4Entered[1];
    document.getElementById("1answer").innerHTML = 'Answer: ' + ansEntered[1];

    document.getElementById("question2").innerHTML ='2.'+ quesEntered[2];
    document.getElementById("2option1").innerHTML = opt1Entered[2];
    document.getElementById("2option2").innerHTML = opt2Entered[2];
    document.getElementById("2option3").innerHTML = opt3Entered[2];
    document.getElementById("2option4").innerHTML = opt4Entered[2];
    document.getElementById("2answer").innerHTML = 'Answer: ' +  ansEntered[2];

    document.getElementById("question3").innerHTML ='3.'+ quesEntered[3];
    document.getElementById("3option1").innerHTML = opt1Entered[3];
    document.getElementById("3option2").innerHTML = opt2Entered[3];
    document.getElementById("3option3").innerHTML = opt3Entered[3];
    document.getElementById("3option4").innerHTML = opt4Entered[3];
    document.getElementById("3answer").innerHTML = 'Answer: ' +  ansEntered[3];

}

function cancel(){
    document.getElementById('testname').value = '';
    document.getElementById('score').value = '';
}

function Resetinfo(){
        document.getElementById('ques').value = '';
        document.getElementById('opt1').value = '';
        document.getElementById('opt2').value = '';
        document.getElementById('opt3').value = '';
        document.getElementById('opt4').value = '';
        document.getElementById('ans').value = '';
}

function clearques(){
    document.getElementById('ques').value = '';
}

function clearopt1(){
    document.getElementById('opt1').value = '';
}

function clearopt2(){
    document.getElementById('opt2').value = '';
}

function clearopt3(){
    document.getElementById('opt3').value = '';
}

function clearopt4(){
    document.getElementById('opt4').value = '';
}

function clearans(){
    document.getElementById('ans').value = '';
}