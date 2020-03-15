const {remote}=require('electron')
const {ipcRenderer}=require('electron')
var questionNumber=1
var score=0;
var control=0;
var timer;
var attempt=0;
var answered=0;
var performance;
function killgame(){
var win =remote.getCurrentWindow()
win.close()
}

 document.getElementById("noise").addEventListener('click',()=>{
     var box=document.getElementById('noise')
     if(box.checked==true){
         document.getElementById("backgroundsong").pause()
         document.getElementById("fornoise").innerHTML="play music"
     }else{
        document.getElementById("backgroundsong").play()
        document.getElementById("fornoise").innerHTML="stop music"
     }
 })


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
    <h1 style="color:red;" id="head">QUESTION ONE</h1>
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
      answered+=1
      checkNumberOfQuestionAnswered(1)
      calculatePerformance()
  }else{
      wrongAnswer()
      calculatePerformance()
  }
}else if(questionNumber==2){
 if(ans==70){
     correctAnswer()
     answered+=1
     checkNumberOfQuestionAnswered(2)
     calculatePerformance()
 }else{
     wrongAnswer()
     calculatePerformance()
 }
}else if(questionNumber==3){
    if(ans==5){
        correctAnswer()
        answered+=1
        checkNumberOfQuestionAnswered(3)
        calculatePerformance()
    }else{
        wrongAnswer()
        calculatePerformance()
    }
}else if(questionNumber==4){
    if(ans==100){
        correctAnswer()
        answered+=1
        checkNumberOfQuestionAnswered(4)
        calculatePerformance()
        
    }else{
        wrongAnswer()
        calculatePerformance()
    }
}else if(questionNumber==5){
    if(ans==100){
        correctAnswer()
        answered+=1
        checkNumberOfQuestionAnswered(5)
        calculatePerformance()
        congrats()
    }else{
        wrongAnswer()
    }
}
}

function congrats(){
    var q=`<div class="questionarea">
    <h1 style="color:red;">CONGRATS ,YOU HAVE COMPLETED THIS LEVEL</h1>
    <img src="../resources/images/school1.gif" alt="pic">
    <button id="btn" onclick="nextLevel()">GO TO NEXT LEVEL</button>
    </div>`
document.getElementById("questionsArea").innerHTML=q
}

function wrongAnswer(){
   document.getElementById("wrong").play()
   document.getElementById("head").innerHTML="WRONG ANSWER ,TRY AGAIN"
   attempted()
}


function attempted(){
 attempt+=1
 document.getElementById("attemptvalue").innerHTML=attempt
}

function calculatePerformance(){
    performance=(answered/attempt)*100
    document.getElementById("performance").innerHTML=performance.toFixed(0)+"%"
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
    <h1 style="color:blue;" id="head">QUESTION TWO</h1>
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
    <h1 style="color:green;" id="head">QUESTION THREE</h1>
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
        <h1 style="color:red;" id="head">QUESTION FOUR</h1>
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
        <h1 style="color:yellow;" id="head">LAST QUESTION</h1>
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
       answered+=1
    document.getElementById("checkans").innerHTML="null"
    document.getElementById("checkans").style.display='none'
   }else{
    document.getElementById("checkans").innerHTML=Qans
   }
}

function nextLevel(){
    var values={"attempt":attempt,"score":score,"answers":answered}
    ipcRenderer.send("nextLevel",values)
}