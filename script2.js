
(function getTodos(){
    let table = document.getElementById('tables')
    
    let todos;
    if (localStorage.getItem('todos') === null){
        todos=[]
    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    
    
// loading data from local storage into table
todos.forEach(item => {
    let td = []
    
    
    // creating individual tables
    for(let i = 0; i < 4; i++){
        td[i]  = document.createElement('td');
    };
    
    td[1].innerHTML = `${item[0]}`
    
    td[2].innerHTML = `${item[1]}`
    td[3].innerHTML =  `<a href=# class="delete">delete</a>`
    let row = document.createElement('tr');
    td.forEach(tds => {
        row.appendChild(tds)
        
    })

    
    table.appendChild(row)
    
    
    
});

})();


// delete item from local storage

let clear = document.querySelectorAll('.delete')
clear.forEach(item => {
    item.addEventListener('click', () => {
        let del_item = []
        
           let name = item.parentElement.previousSibling.previousSibling.innerHTML
           del_item.push(name)
           let price = item.parentElement.previousSibling.innerHTML
           del_item.push(price)
           removeFromStoreage(del_item)
        //    console.log(del_item)

        
    } )
})


function removeFromStoreage(todo){
    let todos;
    if (localStorage.getItem('todos') === null){
        todos=[]
    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    // console.log(todos.indexOf('[["dm", "458"]]'))
    console.log(todos)
    // console.log(typeof(todo))

    // todos.forEach(tod => {
    //     console.log(typeof(tod))
    // })
    // console.log(todos[0])
    // console.log(todos[1])
    // console.log(todo)
    // console.log(todos)
    // let found = todos.prototype.includes(todo)
    // console.log(found)

}


