const form=document.querySelector('.form');
const list_of_todos=document.querySelector('.listoftodos');


form.addEventListener('submit',e=>{
    e.preventDefault();
    const formvalue=form.add.value.trim();
    if(formvalue===''){
        alert("you cant add a blank item!");
    }else{
    const newitem=document.createElement('p');
    newitem.innerText=form.add.value;
    list_of_todos.appendChild(newitem)
    form.add.value=''
}

});



list_of_todos.addEventListener('click',e=>{
    if (e.target.tagName==='P'){
        e.target.remove();
    }
})