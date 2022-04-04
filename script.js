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

function addPage(type){
  switch(type){
    case 'duplicate':
      var firstPage = document.getElementById('paper');
      var newPage = firstPage.cloneNode(true);
      var container = document.getElementById('userContent');
      newPage.id = "";
      container.appendChild(newPage);
      break;
    case 'empty':
    default:
      var newPage = document.createElement('div');
      newPage.id = "paper2";
      newPage.classList = "paper";
      newPage.addEventListener("onkeyup", function(){
        saveData();
      });

      var newPageHeader = document.createElement('div');
      newPageHeader.classList = "paperHeader";

      var newPageContent = document.createElement('div');
      newPageContent.classList = "paperContent";
      var newPageContent2 = document.createElement('div');
      newPageContent2.contentEditable = 'true';
      var newPageContentText = document.createElement('p');
      newPageContentText.textContent = "Here you can write something...";
      newPageContent2.appendChild(newPageContentText);
      newPageContent.appendChild(newPageContent2);

      var newPageFooter = document.createElement('div');
      newPageFooter.classList = "paperFooter";

      var newPageField1 = document.createElement('p');
      newPageField1.textContent = "Text";
      newPageField1.contentEditable = 'true';
      newPageHeader.appendChild(newPageField1);

      var newPageField2 = document.createElement('p');
      newPageField2.textContent = "Text";
      newPageField2.contentEditable = 'true';
      newPageHeader.appendChild(newPageField2);

      var newPageField3 = document.createElement('p');
      newPageField3.textContent = "Text";
      newPageField3.contentEditable = 'true';
      newPageHeader.appendChild(newPageField3);

      var newPageField4 = document.createElement('p');
      newPageField4.textContent = "Text";
      newPageField4.contentEditable = 'true';
      newPageFooter.appendChild(newPageField4);

      var newPageField5 = document.createElement('p');
      newPageField5.textContent = "Text";
      newPageField5.contentEditable = 'true';
      newPageFooter.appendChild(newPageField5);

      var newPageField6 = document.createElement('p');
      newPageField6.textContent = "Text";
      newPageField6.contentEditable = 'true';
      newPageFooter.appendChild(newPageField6);

      newPage.appendChild(newPageHeader);
      newPage.appendChild(newPageContent);
      newPage.appendChild(newPageFooter);
      document.getElementById('userContent').appendChild(newPage);
      break;
  }
}
