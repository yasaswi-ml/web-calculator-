let display="";
function appendToDisplay(value){
    display += value;
    document.getElementById("display").value =display;
} 
function clearDisplay(value){
    display="";
    document.getElementById("display").value=display;
}
function Del(value){
    display= display.slice(0,-1);
      document.getElementById("display").value=display;

}function calculate (value){
    try{
        display = eval(display);
        document.getElementById("display").value=display;
    }
    catch(error ){
        document.getElementById("display").value= error ;

    }
    
}

const toggleBtn =document.querySelector(".toggle");
toggleBtn.addEventListener('click',() => {
  if(document.body.classList.contains('dark')){
    document.body.classList.remove('dark');
    document.body.classList.add('light');
  }else {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
  }
});
