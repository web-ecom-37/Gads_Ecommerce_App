console.log('prince');

let butt = document.querySelectorAll('.content button');

// let table = document.querySelector('#tables')
// console.log(table.childNode[1])

butt.forEach(myfunction)

function myfunction(button){
    button.addEventListener('click', () => {
        let content = {}
        let name = button.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML;
        console.log(name)
        // content.push(name)
        content.name = name;
        let price = button.previousSibling.previousSibling.innerHTML
        // console.log(name)
        // content.push(price)
        // console.log(content)
        content.price = price;
        
        console.log(content)
        // console.log(content.length)
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



 
