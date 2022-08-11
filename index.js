// write code here, dont change anything in HTML and css files
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks
document.querySelector("form").addEventListener("submit", submitReport);

var th = document.createElement("th");
th.innerText = "Delete";
document.querySelector("thead tr").append(th);
function submitReport(e) {
  e.preventDefault();
  var name1 = document.getElementById("name").value;
  var batch = document.getElementById("batch").value;
  var DSA = document.getElementById("dsa").value;
  var skillathon = document.getElementById("cs").value;
  var coading = document.getElementById("coding").value;
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  var td5 = document.createElement("td");
  var td6 = document.createElement("td");
  var td7 = document.createElement("td");
  var td8 = document.createElement("td");
  var per =
    Number((Number(DSA) + Number(skillathon) + Number(coading)) / Number(30)) *
    Number(100);
  td1.innerText = name1;
  td2.innerText = batch;
  td3.innerText = DSA;
  td4.innerText = skillathon;
  td5.innerText = coading;
  td6.innerText = per;
  if (per > 50) {
    td7.innerText = "Regular";
    td7.style.backgroundColor = "Green";
  } else {
    td7.innerText = "Async";
    td7.style.backgroundColor = "red";
  }
  td8.innerText = "Delete";
  tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
  document.querySelector("tbody").append(tr);
  td8.addEventListener("click", deleteData);
}
function deleteData(e) {
  e.target.parentNode.remove();
}
