let addNote = document.querySelector('.add-notes')
let popupBox = document.querySelector('.popup-Add')
let closeIcon = document.querySelector('.head')
let addButton = document.querySelector('button')
let titleInput = document.querySelector('.titleInput')
let descInput = document.querySelector('.discInput')
popupTitle = document.querySelector('.head p')
let search = document.querySelector('.search input')
let isupdate = false   , updateID


notes = JSON.parse(localStorage.getItem("note") || '[]')
// let notes1 = Object.entries(notes)

months = ["january", "february", "march", "april", "may", "jun", "july", "august", "saptember", "october", "november", "december",]
// console.log(notes)
// let notes = JSON.parse(localStorage.getItem("notes") || "[]");
showNotes();

search.addEventListener('input',function(){
    let searchValue = search.value

    
    let notetitle = document.querySelectorAll(".title")
    let notecontent = document.querySelectorAll(".discription")
    // if (notetitle.includes(search.value)){
    //     console.log('hey')
    // }
        
            notecontent.forEach(function(notecontent,index){
                // console.log(notetitle.innerText)
                let text1 = notecontent.innerText
                // console.log(index)
                // let text2 = notecontent.innerText
                if(text1.includes(search.value)){
                    let note1 = document.querySelectorAll('.notes')[index]
                    console.log(note1)
                    note1.style.display = "block"
                    
                }else{
                    let note1 = document.querySelectorAll('.notes')[index]
                    note1.style.display = "none"
                }
        })
    
    
    // console.log(notecontent)

    
})


addNote.addEventListener("click", function () {
    popupBox.classList.add('show')

})

closeIcon.addEventListener('click', function () {
    titleInput.value = "";
    descInput.value = "";

    popupBox.classList.remove('show')
})

addButton.addEventListener("click", function (e) {
    let div = document.querySelectorAll('.notes')
    console.log(div)
    div.forEach((_div1,index) => {
       div[index].remove()
        // console.log(z)
    })
    // div[0].remove();
    console.log(e)
    e.preventDefault();
    noteTitle = titleInput.value
    noteDesc = descInput.value
    let dateObj = new Date();

     month = months[dateObj.getMonth()]
    day = dateObj.getDate();
    year = dateObj.getFullYear();

    let noteInfo = {
        Title: noteTitle, Discrioption: noteDesc,
        date: `${month} ${day} ${year}`

    }

    if(!isupdate){
        notes.push(noteInfo)

    }else{
        notes[updateID] = noteInfo
        isupdate = false
    }
   
    
    localStorage.setItem("note", JSON.stringify(notes))
    
    showNotes();
    closeIcon.click()
    

})

function showNotes(){
    let div = document.querySelectorAll('.notes')
console.log(div)
div.forEach((_div1,index) => {
   div[index].remove()
    // console.log(z)
})
    
    notes = JSON.parse(localStorage.getItem("note"))
    
    
    notes.forEach((notes,index) =>{

        
        
        let html = `<li class="notes">
        <div class="header">
        <ul>
               <li class="title"><p>${notes.Title}</p></li>
               <li class="discription"><p>${notes.Discrioption}</p></li>
               </ul>
       </div>
       <div class="footer">
       <span class="Date">${notes.date}</span>
           <div class="menu">
               <i class="uil uil-ellipsis-h"></i>
               
               <div class="setting">
               <i  onclick = "editNote('${notes.Title}','${notes.Discrioption}','${index}')" class="uil uil-edit-alt">Edit</i>
               <i onclick = "deleteNote(${index})"class="uil uil-trash-alt">Delete</i>
                   
               </div>
               </div>
               </div>
             
           </li>`
           
           
           addNote.insertAdjacentHTML('afterend', html)
     } )
    


}


        // ******************delete menu******************
        function deleteNote(deleteId){
            notes.splice(deleteId, 1);
            localStorage.setItem("note",JSON.stringify(notes))
            showNotes();


            // console.log(elem)
            // notes = notes.splice(elem, 1)
            // console.log(notes)
            // localStorage.setItem("note", JSON.stringify(notes))
            // showNotes()
            
        }
        // onclick = "editNote(${notes.Title}, ${notes.Discrioption}, ${notes.date})"
        function editNote(title,desc,index){
            isupdate = true
            updateID = index
            // console.log('hey')
            titleInput.value = title;
            descInput.value = desc;
           addButton.innerText = 'Updart Note'
           popupTitle.innerText = 'Update a note'
            popupBox.classList.add('show')



        }



    //     <div class="setting">
    //     <i class="uil uil-edit-alt">Edit</i>
    // <i class="uil uil-trash-alt">Delete</i>

    // </div>


        
  
                                           
                                               



