
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
    
    td[1].innerHTML = `${item.name}`
    
    td[2].innerHTML = `${item.price}`
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
        let del_item = {}

        let name = item.parentElement.previousSibling.previousSibling.innerHTML

        del_item.name = name
        let price = item.parentElement.previousSibling.innerHTML
        del_item.price = price
        let removed = item.parentElement.parentElement
        removed.classList.add('hide');
        


        console.log(typeof(del_item))
        removeFromStoreage(del_item)

        
    } )
})


function removeFromStoreage(todo){
    let todos;
    if (localStorage.getItem('todos') === null){
        todos=[]
    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
      
    }
    
 
    let undeleted_items = todos.filter(x => x.name !== todo.name)
  
    
    localStorage.setItem('todos', JSON.stringify(undeleted_items))

 

}


