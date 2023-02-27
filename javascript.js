
main();

function main() {
    var random_number1=attribute_change_player1();
    var random_number2=attribute_change_player2();
    console.log(random_number1);
    console.log(random_number2);
    if (random_number1<random_number2){

        
        document.querySelector(".title").innerHTML="Player2 wins";
    } else if(random_number2<random_number1) {
        document.querySelector(".title").innerHTML="Player1 wins";
    } 
    else {
        document.querySelector(".title").innerHTML="It is a draw";
    }

    


}

function attribute_change_player1() {
  var img = document.getElementsByClassName("diceimg1");
  console.log(img);
  var randomarray = randomnumgen();
  console.log(randomarray);
  img[0].setAttribute("src", randomarray[1]);
  return randomarray[0]
}

function attribute_change_player2() {
    var img = document.getElementsByClassName("diceimg2");
    console.log(img);
    var randomarray = randomnumgen();
    console.log(randomarray);
    img[0].setAttribute("src", randomarray[1]);
    return randomarray[0]
  }

function randomnumgen() {
  var random = Math.floor(Math.random() * 6 + 1);

  var randomimg = "/images/dice" + random + ".png";

  var randomarray = [random, randomimg];
  return randomarray;
}


