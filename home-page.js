// When the user clicks on div, open the popup
function myFunction() {
 var popup = document.getElementById("myPopup");
 popup.classList.toggle("show");
}


function myFunction2() {
 var popup = document.getElementById("myPopup2");
 popup.classList.toggle("show");
}


/* When the user clicks on the Locations link,
toggle between hiding and showing the dropdown content */
function myFunction3() {
 document.getElementById("myDropdown3").classList.toggle("show");
}

function filterFunction() {
 var input, filter, ul, li, a, i;
 input = document.getElementById("myInput");
 filter = input.value.toUpperCase();
 div = document.getElementById("myDropdown3");
 a = div.getElementsByTagName("a");
 for (i = 0; i < a.length; i++) {
   txtValue = a[i].textContent || a[i].innerText;
   if (txtValue.toUpperCase().indexOf(filter) > -1) {
     a[i].style.display = "";
   } else {
     a[i].style.display = "none";
   }
 }
}


function myFunction4() {
 document.getElementById("myDropdown4").classList.toggle("show");
}

function filterFunction() {
 var input, filter, ul, li, a, i;
 input = document.getElementById("myInput");
 filter = input.value.toUpperCase();
 div = document.getElementById("myDropdown4");
 a = div.getElementsByTagName("a");
 for (i = 0; i < a.length; i++) {
   txtValue = a[i].textContent || a[i].innerText;
   if (txtValue.toUpperCase().indexOf(filter) > -1) {
     a[i].style.display = "";
   } else {
     a[i].style.display = "none";
   }
 }
}



function myFunction5() {
 document.getElementById("myDropdown5").classList.toggle("show");
}

function filterFunction() {
 var input, filter, ul, li, a, i;
 input = document.getElementById("myInput");
 filter = input.value.toUpperCase();
 div = document.getElementById("myDropdown5");
 a = div.getElementsByTagName("a");
 for (i = 0; i < a.length; i++) {
   txtValue = a[i].textContent || a[i].innerText;
   if (txtValue.toUpperCase().indexOf(filter) > -1) {
     a[i].style.display = "";
   } else {
     a[i].style.display = "none";
   }
 }
}



function myFunction6() {
 document.getElementById("myDropdown6").classList.toggle("show");
}

function filterFunction() {
 var input, filter, ul, li, a, i;
 input = document.getElementById("myInput");
 filter = input.value.toUpperCase();
 div = document.getElementById("myDropdown6");
 a = div.getElementsByTagName("a");
 for (i = 0; i < a.length; i++) {
   txtValue = a[i].textContent || a[i].innerText;
   if (txtValue.toUpperCase().indexOf(filter) > -1) {
     a[i].style.display = "";
   } else {
     a[i].style.display = "none";
   }
 }
}