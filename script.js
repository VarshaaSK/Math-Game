const user_ans = document.getElementById("user_ans");

const reset = document.getElementById("clear");

const guess = document.getElementById("guess");

const restart = document.getElementById("referesh");
const select = document.querySelector("#select1");
const aio = document.querySelector("#check");
const first = document.getElementById("first_step");
const start = document.querySelector(".start");
const second_div = document.getElementById("second_step");
const result = document.getElementById("result");
const result1 = document.getElementById("result1");
const lives = document.querySelectorAll("#life-line");

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");

function start_the_game(){
    if(select.value == "--Choose the Level--"){
        alert("Choose a Level to Play!")
    }
    var x = document.getElementById("second_step");
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("first_step").style.display = "none";
      } else {
        x.style.display = "none";
      }
}

var general_value = 0;

function assume_number(){
    // return Math.random() * (max - min) + min;
    if(select.value == "level1"){
        general_value = Math.random() * (10 - 0) + 0
        general_value = general_value.toFixed(0);
        return general_value;
    }
    else if(select.value == "level2"){
        general_value = Math.random() * (50 - 0) + 0
        general_value = general_value.toFixed(0);
        return general_value;
    }
    else if(select.value == "level3"){
        general_value = Math.random() * (100 - 0) + 0;
        general_value = general_value.toFixed(0);
        return general_value;
    }
}

var life = 5;
var final_assumed_value;
var output;
var score = 100;

function guess_the_number(){

    console.log(lives);

    if(select.value == "level1"){
        document.getElementById("hint").innerHTML = "Guess your Value between 0 - 10";
    }
    else if(select.value == "level2"){
        document.getElementById("hint").innerHTML = "Guess your Value between 0 - 50";
    }
    else if(select.value == "level3"){
        document.getElementById("hint").innerHTML = "Guess your Value between 0 - 100";
    }

    console.log("user:"+user_ans.value);
    console.log("guess value :"+general_value);

    if(user_ans.value == ""){
        final_assumed_value = assume_number();
        guess.innerHTML = "Guess";
        user_ans.readOnly = false;
        alert("You are ready to play the Game!");
    }
    else{
        if(life == 1 ){
            output = "Sorry, Game Over !😢";
            result.style.display = "block";
            result1.innerHTML = output + " Actual Value is " + final_assumed_value;
            second_div.style.display = "none";
        }
        else if(user_ans.value < final_assumed_value && life > 0){
            life -= 1;
            score -= 20;
            console.log(life);
            output = "Your value is lesser than Actual Number!";
        }
        else if(user_ans.value > final_assumed_value && life > 0){
            life -= 1;
            score -= 20;
            console.log(life);
            output = "Your value is greater than Actual Value";
        }
        else if(user_ans.value == final_assumed_value && life > 0){
            output = "Success, You have Guessed the number 🙌🎉!";
            result.style.display = "block";
            result1.innerHTML = output + " " + "Score is : " + score;
            second_div.style.display = "none";
        }
        
        document.querySelector(".output").innerHTML = output;

    }
    
}

function clear_box(){
    user_ans.value ="";
    document.querySelector(".output").innerHTML = "";
    console.log(select.value);
}

restart.onclick = () => {
    window.location.reload();
}