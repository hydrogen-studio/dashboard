  var x = document.forms["prefixform"]["ownerkey"].value;
  var y = document.forms["prefixform"]["prefix"].value;
var ok;
  if (x === "" || y === "") {
    alert("Both field must be filled out");
    ok = false
  }else{
    ok = true
  }

  if(ok === true){
    xhttp.open("POST", "http://api.hydrogenbot.xyz/v1/developer/prefix", true);
    xhttp.setRequestHeader("ownerkey", x);
    xhttp.setRequestHeader("prefix", y);
    xhttp.send()
  }

  
