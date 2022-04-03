function updateDate(){
  const dateTime = new Date();
  var day = dateTime.getDate();
  var month = dateTime.getMonth() + 1;
  var year = dateTime.getFullYear();
  if(day.toString().length < 2) day = "0" + day;
  if(month.toString().length < 2) month = "0" + month;
  var date = day + "." + month + "." + year;
  document.getElementById('dateTxt').textContent = date;
}

function update(){
  document.title = document.getElementById('topic').textContent + " - Workpaper";
}

function saveData(){
  var data = document.getElementById('userContent').innerHTML;
  var saveState = document.getElementById('saveState');
  saveState.textContent = "Saving...";
  localStorage.setItem("data", data);
  console.log("Succesfully saved your data.");
  setTimeout(function(){
          saveState.textContent = "Saved!";
  }, 1000);
}

function loadData(){
  var data = localStorage.getItem("data");
  if(data !== null){
    document.getElementById('userContent').innerHTML = data;
    console.log("Succesfully restored your data.");
    var saveState = document.getElementById('saveState');
    saveState.textContent = "Restored succesfully - welcome back!";
  }
}

function deleteData(){
  localStorage.removeItem("data");
  if(confirm("Are you sure you want to delete anything you created? :-C") == true){
    localStorage.removeItem("data");
    alert("Your data is deleted, the site will reload.");
    location.reload();
  }
}

function openEditor(){
  document.getElementById('workspace').style.display = "block";
  document.getElementById('introduction').style.display = "none";
}

function addPage(){
  var firstPage = document.getElementById('paper');
  var newPage = firstPage.cloneNode(true);
  var container = document.getElementById('userContent');
  newPage.id = "";
  container.appendChild(newPage);
}
