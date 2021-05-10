var x = document.getElementById("MyButtonVar3");
var newanswer=1
var keyjavascript;
var results=0
var keylist = [];
var option1="fish"
var option2="caviar"
var option3="Tours"
var x = document.getElementById("MyButtonVar3");

function calculate_this() {
 newanswer = 2
 next_question()
}
function calculate_this2(){
 newanswer = 1
 next_question()
}
function calculate_this3(){
newanswer = 3
 next_question()
}
function shop(){
  window.open("https://www.marshallbergfarm.com/")
 
}
function restart(){
newanswer=1
keyjavascript;
results="What are you looking for?"
keylist = [];
option1="Fish"
option2="Caviar"
option3="Tours"
document.getElementById('Question').innerHTML = results;
document.getElementById("MyButtonVar").value=option1;
document.getElementById("MyButtonVar2").value=option2;
}
function next_question(){
    keylist.push(newanswer);
    var results=keylist
    if (results=="3"){
    alert("The product that we think is best suited for you is being opened.")
      window.open("https://thecaviarfarm.com/shop/caviar-farm-tour/")
        document.writeln("Please continue in the opened window or reload the page to go again.")
    }
    if (results=='2'){
     results = "What kind of sturgeon do you want?"
        option1= "Smoked"
        option2= "Unsmoked"
        option3="0"
        }
    if (results=='1'){
     results = "How many people is this for?"
        option1= "1-3."
     option2= "4 or more."
        option3="0"
        }
    if (results=='1,2'){
     results = "Have you ever had caviar before?"
        option1= "Yes"
        option2= "No"
        option3="0"
        }
    if (results=='1,1'){
     results = "Would you be interested in pairing it with sturgeon?"
        option1= "Yes"
      option2= "No"
        option3="0"
        }
    if (results=='2,2'){
     results = "What do you want it for?"
        option1= "As a sample"
        option2= "For a party"
        option3= "For a small group"
        }
    if (results=='2,1'){
     results = "Would you be interested in pairing it with caviar?"
        option1= "Yes"
     option2= "No"
        option3="0"
        }
        if (results=='1,1,1'){
        alert("The product that we think is best suited for you is being opened.")
      window.open("https://thecaviarfarm.com/shop/classic-osetra-caviar/")
        document.writeln("Please continue in the opened window or reload the page to go again.")
        }
    if (results=='1,1,2'){
      alert("The product that we think is best suited for you is being opened.")
        document.writeln("Please continue in the opened window or reload the page to go again.")
        window.open("https://thecaviarfarm.com/shop/dinner-party-duo/")
        }
    if (results=='1,2,1'){
     results = "How high quality do you want it?"
        option1= "Superior"
        option2= "Classic"
        option3="0"
        }
    if (results=='1,2,2'){
     results = "How high quality would you like?"
        option1= "Superior"
     option2= "Everyday"
        option3="classic"
        }
    if (results=='2,1,1'){
     alert("The product that we think is best suited for you is being opened.")
        document.writeln("Please continue in the opened window or reload the page to go again.")
        window.open("https://thecaviarfarm.com/shop/dinner-party-duo/")
        }
    if (results=='2,1,2'){
      alert("The product that we think is best suited for you is being opened.")
        document.writeln("Please continue in the opened window or reload the page to go again.")
        window.open("https://thecaviarfarm.com/shop/dinner-party-duo/")
        }
    if (results=='2,2,3'){
     alert("The product that we think is best suited for you is being opened.")
        document.writeln("Please continue in the opened window or reload the page to go again.")
        window.open("https://www.marshallbergfarm.com/product-page/smoked-sturgeon-loin-1lb")
        }
    if (results=='2,2,1'){
      alert("The product that we think is best suited for you is being opened.")
        document.writeln("Please continue in the opened window or reload the page to go again.")
        window.open("https://www.marshallbergfarm.com/product-page/smoked-sturgeon-filet")
        }
    if (results=='2,2,2'){
      alert("The product that we think is best suited for you is being opened.")
        document.writeln("Please continue in the opened window or reload the page to go again.")
        window.open("https://www.marshallbergfarm.com/product-page/smoked-sturgeon-filet")
        }
     if (results=='1,2,1,2'){
     alert("The product that we think is best suited for you is being opened.")
     document.writeln("You should buy the 50 gram superior oestra caviar.")
     window.open("https://thecaviarfarm.com/shop/superior-osetra-caviar/", "_blank");
        }
     if (results=="1,2,1,1"){
     alert("The product that we think is best suited for you is being opened.")
     document.writeln("You should buy the 50 gram classic oestra caviar.")
     window.open("https://thecaviarfarm.com/shop/classic-osetra-caviar/", "_blank");

        }
         
          if (results=='1,2,2,3'){
     if(window.confirm("Loading shop.")==true){
     restart()
     results="Which do you prefer?"
     window.open("https://thecaviarfarm.com/shop/classic-osetra-caviar/", "_blank");
     alert("Thank you for playing the caviar quiz.")
     }else{
     restart()
     results="Which do you prefer?"
     }
        }
         
         if (results=='1,2,2,2'){
     if(window.confirm("Loading shop.")==true){
     restart()
     results="Which do you prefer?"
     window.open("https://thecaviarfarm.com/shop/superior-osetra-caviar/", "_blank");
     alert("Thank you for playing the caviar quiz.")
     }else{
     restart()
     results="Which do you prefer?"
     }
        }
     if (results=="1,2,2,1"){
     if(window.confirm("Loading shop.")==true){
     restart()
     results="Which do you prefer?"
     window.open("https://thecaviarfarm.com/shop/everyday-osetra-caviar/", "_blank")
     alert("Thank you for playing the caviar quiz.")
     }else{
     restart()
     results="Which do you prefer?"
     }
        }
    var x = document.getElementById("MyButtonVar3");
   if ("0" === option3) {
    x.style.display = "none";
   } else {
     x.style.display = "block";
  }
   document.getElementById('Question').innerHTML = results;
    document.getElementById("MyButtonVar").value=option1;
    document.getElementById("MyButtonVar2").value=option2;
    document.getElementById("MyButtonVar3").value=option3;

}
  function myfunction(){
  window.confirm('Developer note (This will be erased in the final version) This tempate for the answers is easily changeable and can be replaced with a different tree. The fonts are also changeable.')
  }