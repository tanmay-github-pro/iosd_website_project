function fnc() {
    myVar = setTimeout(showPage, 5000);
  }
  function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main").style.display = "block";
  }

  /*function myFunction() {
    myVar = setTimeout(showPage, 3000);
  }
  
  /*loader function*/
  /*setTimeout(function(){
    window.location.href = '../sign-in.html';
 }, 5000); */