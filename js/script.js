function discordChecker() {
  let usn = "rximbow";
  let id = "1230186060093591592";
  let result
  let entry = document.getElementById("discordinput").value;
  if (entry == usn || entry == id){
    result = "It's the RIGHT account"
  }else{
    result = "It's NOT my account"
  }
  document.getElementById("discordinput").value = result
}
function feeChecker() {
  let rate = 4/100;
  var ammountEntry = document.getElementById("feeinput").value;
  var entryRegex = /^[0-9]+$/;
  if (!entryRegex.test(ammountEntry)) {
    document.getElementById("feeinput").value = "";
  } else{
    if(ammountEntry<250){
      document.getElementById("feeinput").value = "The Fee will be "+"$"+10
    } else{    
      document.getElementById("feeinput").value = "The Fee will be "+"$"+rate*ammountEntry;
    }
  }
}
