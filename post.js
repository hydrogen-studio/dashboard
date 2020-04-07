  var x = document.forms["prefixform"]["ownerkey"].value;
  var y = document.forms["prefixform"]["prefix"].value;
  
  xhttp.open("POST", "http://api.hydrogenbot.xyz/v1/ssddpre", true);
    xhttp.setRequestHeader("ownerkey", x);
    xhttp.setRequestHeader("prefix", y);
    xhttp.send("test")
  

  
