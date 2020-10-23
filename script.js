let butt = document.querySelectorAll('.content button');

butt.forEach(myfunction)

function myfunction(button){
    button.addEventListener('click', () => {
        let content = {}
        let name = button.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML;
       
        content.name = name;
        let price = button.previousSibling.previousSibling.innerHTML
        
        content.price = price;
        let img = button.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.src
        content.img = img
        addToLocaleStorage(content)


        
    })
}


function addToLocaleStorage(todo){
    let todos;
    if (localStorage.getItem('todos') === null){
        todos=[]
    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo)

    localStorage.setItem('todos', JSON.stringify(todos))
}



 
