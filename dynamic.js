
let inputTaskEle = document.getElementById('inputTask');
    let btnAddEle = document.getElementById('btnAdd');
    let listsEle = document.getElementById('Lists'); // Moved this outside the click event listener
    let showLists = document.createElement('div');
    let btnDeleteAll = document.createElement('button');
    let TitleEle = document.createElement('h2');
                TitleEle.className = "text-center font-bold text-2xl text-body mb-4";
                TitleEle.innerHTML="My Lists...";
                showLists.append(TitleEle);

    btnAddEle.addEventListener("click", function() {
        if (inputTaskEle.value === "") {
            inputTaskEle.focus(); 
            alert('Please Enter Your Task');
        } else {
            // Create a new task element
            let contentTasksEle = document.createElement('div');
            contentTasksEle.className = "bg-green py-2 px-4 rounded-3xl mb-2  flex justify-between items-center";
            
            let TasksEle = document.createElement('p');
            let checkBoxInputEle = document.createElement('input');
            checkBoxInputEle.type = "checkbox"; // Added the type attribute
            let labelCheckBoxInputEle = document.createElement('label');
            labelCheckBoxInputEle.className = "ml-2";
            let IconDelete = document.createElement('i');
            IconDelete.className = "fa-solid fa-trash-can cursor-pointer";

            labelCheckBoxInputEle.innerHTML = `${inputTaskEle.value}`;
            checkBoxInputEle.className = "ml-2 checked:accent-darkGreen ";
           
            TasksEle.append(checkBoxInputEle, labelCheckBoxInputEle);
            contentTasksEle.append(TasksEle, IconDelete);
         
            listsEle.appendChild(showLists);
            showLists.append( contentTasksEle, btnDeleteAll)
            inputTaskEle.value = "";

            IconDelete.addEventListener("click", function() {
                this.parentElement.remove();
            });

            checkBoxInputEle.addEventListener("click", function() {
                contentTasksEle.style.backgroundColor = "#617A55";
                IconDelete.style.color ='#fff';
                labelCheckBoxInputEle.style.color ='#fff';
            });
        }
    });

   
    btnDeleteAll.className = "mt-4 bg-darkGreen text-background py-2 px-4 rounded-3xl font-bold cursor-pointer";
    btnDeleteAll.innerHTML = "Delete All";
  
    btnDeleteAll.addEventListener("click", function() {
         listsEle.innerHTML = ""; // Remove all tasks when "Delete All" is clicked
         showLists.innerHTML = ""
        
    });
    