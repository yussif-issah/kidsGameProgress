const{ipcRenderer,remote}=require("electron")

var questionNumber=1
var score=0;
var control=0;
var timer;
var attempt=0;
var answered=0;
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
    <h1 id="head" style="color:red;">QUESTION ONE</h1>
    <p>let a=20</p>
    <p>let c=any number</p>    
    <p id="hint">if(c>a){</p>
    <p id="hint">print("christiano ronaldooooo")</p>
    <p id="hint">}else{</p>
    <p id="hint">print("leonel messiiii")</p>
    <p id="hint">}</p>
    <h5>if the program printed "christiano ronaldooooo" what is the appropriate value of c</h5><input type="text" placeholder="ANSWER HERE" id="inputanswere">
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
  if(ans>20){
      correctAnswer()
      checkNumberOfQuestionAnswered(1)
  }else{
      wrongAnswer()
  }
}else if(questionNumber==2){
 if(ans!=20){
     correctAnswer()
     answered+=1
     checkNumberOfQuestionAnswered(2)
     calculatePerformance()
 }else{
     wrongAnswer()
     calculatePerformance()
 }
}else if(questionNumber==3){
    if(ans=='a'||ans=='A'){
        correctAnswer()
        answered+=1
        checkNumberOfQuestionAnswered(3)
        calculatePerformance()
    }else{
        wrongAnswer()
        calculatePerformance()
    }
}else if(questionNumber==4){
    if(ans=='b'||ans=='B'){
        correctAnswer()
        answered+=1
        checkNumberOfQuestionAnswered(4)
        calculatePerformance()
    }else{
        wrongAnswer
        calculatePerformance()
    }
}else if(questionNumber==5){
    if(ans=='a'||ans=='A'){
        correctAnswer()
        answered+=1
        checkNumberOfQuestionAnswered(5)
        calculatePerformance()
        congrats()
    }else{
        wrongAnswer()
        calculatePerformance()
    }
}
}

function congrats(){
    var q=`<div class="questionarea">
    <h1 style="color:red;">CONGRATS ,YOU HAVE COMPLETED THIS LEVEL</h1>
    <img src="../resources/images/applaud.gif" alt="pic">
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
    <h1 id="head" style="color:blue;">QUESTION TWO</h1>
    <p>let a=20</p>
    <p>let c=any number</p>    
    <p id="hint">if(c==a){</p>
    <p id="hint">print("christiano ronaldoooo")</p>
    <p id="hint">}else{</p>
    <p id="hint">print("leonel messiiii")</p>
    <p id="hint">}</p>
    <p>what is the appropriate value of c if the program printed "leonel messiiii"</p><input type="text" placeholder="anwere here" id="inputanswere">
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
    <h1 id="head" style="color:green;">QUESTION THREE</h1>
    <p>let a=20</p>
    <p>let c=100</p>    
    <p id="hint">if(condition){</p>
    <p id="hint">print("christiano ronaldoooo")</p>
    <p id="hint">}else{</p>
    <p id="hint">print("leonel messiiii")</p>
    <p id="hint">}</p>
    <p>what condition statement will make the program print "christiano ronaldooo"</p>
    <h3>A: c>a</h3>
    <h3 style="margin:5px">B: c==a</h3>
    <input type="text" placeholder="anwere here" id="inputanswere">
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
    <h1 id="head"  style="color:red;">QUESTION FOUR</h1>
    <p>let a=100</p>
    <p>let c=100</p>    
    <p id="hint">if(condition){</p>
    <p id="hint">print("christiano ronaldoooo")</p>
    <p id="hint">}else{</p>
    <p id="hint">print("leonel messiiii")</p>
    <p id="hint">}</p>
    <p>what condition statement will make the program print "christiano ronaldooo"</p>
    <h3>A: c>a</h3>
    <h3 style="margin:5px">B: c==a</h3>
    <input type="text" placeholder="anwere here" id="inputanswere">
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
        <h1 id="head" style="color:yellow;">LAST QUESTION</h1>
        <p>let a=200</p>
        <p>let b=100</p>  
        <p>which of the following conditions will evaluate to true</p> 
        <h5>A: a>b</h5>
        <h5>B: a'<'b</h5>
        <h5>C: a==b</h5>
        </p><input type="text" placeholder="anwere here" id="inputanswere">
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
        toggle("ANY NUMBER GREATER THAN 20 eg 30,40 etc")
    }else if(questionNumber==2){
        toggle("ANY NUMBER APART FROM 20 eg 1,0,50")
    }else if(questionNumber==3){
        toggle("A")
    }else if(questionNumber==4){
        toggle("B")
    }else{
        toggle("A")
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

function nextLevel(){
    ipcRenderer.send("nextLevel")
}

ipcRenderer.on("values",(error,args)=>{
    score=args.score
    attempt=args.attempt
    answered=args.answers
    document.getElementById("attemptvalue").innerHTML=attempt
    document.getElementById("scorevalue").innerHTML=score
    document.getElementById("performance").innerHTML=((answered/attempt)*100).toFixed(0)+"%"
})

function loaded(){
    ipcRenderer.send('loaded')
}

function calculatePerformance(){
    performance=(answered/attempt)*100
    document.getElementById("performance").innerHTML=performance.toFixed(0)+"%"
}