

let form = document.querySelector("#order-form");
let list = document.querySelector("#order-list");


form.addEventListener("submit", function (e) {
alert("form working");

 let name = document.querySelector("#name").value;
 let address = document.querySelector("#address").value;
 let phone= document.querySelector("#phone").value;
 let orderCost = document.querySelector("#orderCost").value;
 let hst = document.querySelector("#hst").value;
 let orderTotal = document.querySelector("#orderTotal").value;
 
 addOrderToList(name, address, phone, orderCost, hst, orderTotal);
 clearFields();
 e.preventDefault();
});


function addOrderToList(a, b, c, d, e, f) {
 if (a === "" || b === "" || c === "" || d === "" || e === "" || f === "") {
   showAlert("Please Fill in All boxes", "error");
 } else {
   let row = document.createElement("tr");
   row.innerHTML = `<td>${a}</td>
  <td>${b}</td><td>${c}</td><td>${d}</td><td>${e}</td><td>${f}</td>   
  <td><a href="#" class="delete">Delete</a></td>`;
   list.appendChild(row);
   showAlert("New order added", "success");
 }
}


function clearFields() {
 document.querySelector("#name").value = "";
 document.querySelector("#address").value = ""; 
 document.querySelector("#phone").value = ""; 
 document.querySelector("#orderCost").value = "";
 document.querySelector("#hst").value = ""; 
 document.querySelector("#orderTotal").value = ""; 
}


function showAlert(message, className) {
 let div = document.createElement("div");
 let container = document.querySelector(".container");
 div.innerText = message;
 div.className = className;
 div.id = "box";
 container.insertBefore(div, form);

 setTimeout(function () {
   document.querySelector("#box").remove();
   document.querySelector("name", "address", "phone", "orderCost", "hst", "orderTotal").remove();
 }, 3000);
}


document.querySelector("#order-list").addEventListener("click", function (e) {
 deleteTask(e.target);
 e.preventDefault();
});


function deleteTask(elementToDelete) {
 if (elementToDelete.className === "delete") {
   elementToDelete.parentElement.parentElement.remove();
   showAlert("Order removed", "success");
 } else {
  showAlert("Don't clicked There ", "error");
 }
}

