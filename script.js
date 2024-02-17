function validate(){
  var mail = document.getElementById("text").value;
  var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+.([a-z]+)(.[a-z]+)?$/
  if(regx.text(mail)){
    alert("You have provided a valid E-mail ID")
    return true
  }
  else{
    alert("Sorry!...Incorrect E-mail ID")
    return false;
  }
}