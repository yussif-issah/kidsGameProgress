const {remote}=require('electron')
const {ipcRender}=require('electron')
const question=require('../jscontrollers/questions')

var questionNumber=1
var score=0;
var control=0;
var timer;
var attempt=0;
function killgame(){
var win =remote.getCurrentWindow()
win.close()
}


function pop(){
    document.getElementById("pop1").play()
}


function playgame(){
    document.getElementById("play").play()
    document.getElementById("area").style.display='block'
    if(questionNumber==1){
        questionOne()
    }else if(questionNumber==2){
        questionTwo()
    }else if(questionNumber==3){
        questionThree()
    }else if(questionNumber==4){
        questionFour()
    }else if(questionNumber==5){
        questionFive()
    } 
}


function questionOne() {
    var qOne=`<div class="questionarea">
    <h1 style="color:red;">QUESTION ONE</h1>
    <p>let a=20</p>
    <p>let b=30</p>
    <p>let c=a+b</p>
    <h5>what is the value of c</h5><input type="text" placeholder="ANSWER HERE" id="inputanswere">
    <button id="btn" onclick="Answer()">ANSWER</button><span><button id="btn" onclick="checkAnswer()">CHECK ANSWER</button></span>
    <p id="checkans"></p>
    </div>`
    document.getElementById("questionsArea").innerHTML=qOne
    document.getElementById("startgame").style.display='none'
    document.getElementById("div1").style.marginTop='25%'
    document.getElementById("div1").style.marginLeft='35%'
    document.getElementById("div1").style.width='100%'
    
}


function Answer(){
  var ans=  document.getElementById("inputanswere").value;
  if(questionNumber==1){
  if(ans==50){
      correctAnswer()
      checkNumberOfQuestionAnswered(1)
  }else{
      wrongAnswer()
  }
}else if(questionNumber==2){
 if(ans==70){
     correctAnswer()
     checkNumberOfQuestionAnswered(2)
 }else{
     wrongAnswer()
 }
}else if(questionNumber==3){
    if(ans==5){
        correctAnswer()
        checkNumberOfQuestionAnswered(3)
    }else{
        wrongAnswer()
    }
}else if(questionNumber==4){
    if(ans==100){
        correctAnswer()
        checkNumberOfQuestionAnswered(4)
    }else{
        wrongAnswer
    }
}else if(questionNumber==5){
    if(ans==100){
        correctAnswer()
        checkNumberOfQuestionAnswered(5)
        congrats()
    }else{
        wrongAnswer()
    }
}
}

function congrats(){
    var q=`<div class="questionarea">
    <h1 style="color:red;">CONGRATS ,YOU HAVE COMPLETED THIS LEVEL</h1>
    </div>`
document.getElementById("questionsArea").innerHTML=q
}

function wrongAnswer(){
   document.getElementById("wrong").play()
   attempted()
}


function attempted(){
 attempt+=1
 document.getElementById("attemptvalue").innerHTML=attempt
}



function correctAnswer(){
    document.getElementById("correct").play()
    attempted()
    setTimeout(() => {
        document.getElementById("coins").play()
        increasePoints()
    },2000);
    questionNumber+=1
    playgame()
}



function increasePoints(){
    timer=setInterval(increaseScore,100)
}



function increaseScore(){
    score+=1
    control+=1
    document.getElementById("scorevalue").innerHTML=score
    if(control==10){
        clearInterval(timer)
        control=0;
    }
}


function questionTwo(){
    var qOne=`<div class="questionarea">
    <h1 style="color:blue;">QUESTION TWO</h1>
    <p>let a=100</p>
    <p>let b=30</p>
    <p>let c=a-b</p>
    <p>what is the value of c</p><input type="text" placeholder="anwere here" id="inputanswere">
    <button id="btn" onclick="Answer()">ANSWER</button><span><button id="btn" onclick="checkAnswer()">CHECK ANSWER</button></span>
    <p id="checkans"></p>
    </div>`
    document.getElementById("questionsArea").innerHTML=qOne
    document.getElementById("startgame").style.display='none'
    document.getElementById("div1").style.marginTop='25%'
    document.getElementById("div1").style.marginLeft='35%'
    document.getElementById("div1").style.width='100%'
}


function questionThree(){
    var qOne=`<div class="questionarea">
    <h1 style="color:green;">QUESTION THREE</h1>
    <p>let a=100</p>
    <p>let b=20</p>
    <p>let c=a/b</p>
    <p>what is the value of c</p><input type="text" placeholder="anwere here" id="inputanswere">
    <button id="btn" onclick="Answer()">ANSWER</button><span><button id="btn" onclick="checkAnswer()">CHECK ANSWER</button></span>
    <p id="checkans"></p>
    </div>`
    document.getElementById("questionsArea").innerHTML=qOne
    document.getElementById("startgame").style.display='none'
    document.getElementById("div1").style.marginTop='25%'
    document.getElementById("div1").style.marginLeft='35%'
    document.getElementById("div1").style.width='100%'
}


function questionFour(){
        var qOne=`<div class="questionarea">
        <h1 style="color:red;">QUESTION FOUR</h1>
        <p>let a=10</p>
        <p>let b=10</p>
        <p>let c=axb</p>
        <p>what is the value of c</p><input type="text" placeholder="anwere here" id="inputanswere">
        <button id="btn" onclick="Answer()">ANSWER</button><span><button id="btn" onclick="checkAnswer()">CHECK ANSWER</button></span>
        <p id="checkans"></p>
        </div>`
        document.getElementById("questionsArea").innerHTML=qOne
        document.getElementById("startgame").style.display='none'
        document.getElementById("div1").style.marginTop='25%'
        document.getElementById("div1").style.marginLeft='35%'
        document.getElementById("div1").style.width='100%'
}


function questionFive(){
        var qOne=`<div class="questionarea">
        <h1 style="color:yellow;">LAST QUESTION</h1>
        <p>let a=20</p>
        <p>let b=10</p>
        <p>let c=a+b</p>
        <p>let d=c-a</p>
        <p>let e=dxb</>
        <p>what is the value of e</p><input type="text" placeholder="anwere here" id="inputanswere">
        <button id="btn" onclick="Answer()">ANSWER</button><span><button id="btnans" onclick="checkAnswer()">CHECK ANSWER</button></span>
        <p id="checkans"></p>
        </div>`
        document.getElementById("questionsArea").innerHTML=qOne
        document.getElementById("startgame").style.display='none'
        document.getElementById("div1").style.marginTop='25%'
        document.getElementById("div1").style.marginLeft='35%'
        document.getElementById("div1").style.width='100%'
}


function checkNumberOfQuestionAnswered(number){
    document.getElementById("Answeredvalue").innerHTML=number+"/5"
}


function checkAnswer(){
    if(questionNumber==1){
        toggle("ANSWER=50")
    }else if(questionNumber==2){
        toggle("ANSWER=70")
    }else if(questionNumber==3){
        toggle("ANSWER=5")
    }else if(questionNumber==4){
        toggle("ANSWER=100")
    }else{
        toggle("ANSWER=100")
    }
}

function toggle(Qans){
   if(document.getElementById("checkans").innerHTML==Qans){
    document.getElementById("checkans").innerHTML="null"
    document.getElementById("checkans").style.display='none'
   }else{
    document.getElementById("checkans").innerHTML=Qans
   }
}