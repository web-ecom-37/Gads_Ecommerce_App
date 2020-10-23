
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
    td[0].innerHTML = `<img src="${item.img}" alt="model">`
    td[1].innerHTML = `${item.name}`
    
    td[2].innerHTML = `${item.price}`
    td[3].innerHTML =  `<a href=# class="delete">delete</a>`
    let row = document.createElement('tr');
    td.forEach(tds => {
        row.appendChild(tds)
        
    })

    
    
    table.appendChild(row)
    
    
    
    
});
    //calculate total amount
    let amount = []
    todos.forEach(todo =>{
        amount.push(todo.price)
    })
    
   

    total(todos, amount, getSum, table)

    


})();

// calculating total amount
function getSum(total, num){
    return total + Math.round(num)
}



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

        removeFromStoreage(del_item)

        
    } )
})


let total_items = document.querySelector('.total_items')
let total_price = document.querySelector('.total_price')


function removeFromStoreage(todo){
    let todos;
    if (localStorage.getItem('todos') === null){
        todos=[]
    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
      
    }
    
 
    let undeleted_items = todos.filter(x => x.name !== todo.name)
    localStorage.setItem('todos', JSON.stringify(undeleted_items))



// setting current items and price
    let remaining_amount = []
    undeleted_items.forEach(amount =>{
        remaining_amount.push(amount.price)
    })
  
    
    total_items.innerHTML = undeleted_items.length
    total_price.innerHTML = remaining_amount.reduce(getSum, 0)

 

}


function total(todos,amount, getSum, table){

    let total_row = document.createElement('tr');
    let total_items  = document.createElement('td');
    let total_items_num  = document.createElement('td');
    let total_price  = document.createElement('td');
    let total_price_num  = document.createElement('td');
    total_items.innerHTML = `Total Items`
    total_items_num.innerHTML = todos.length
    total_price.innerHTML = `Total Price`
    total_price_num.innerHTML = amount.reduce(getSum, 0)
    total_row.appendChild(total_items)
    total_row.appendChild(total_items_num)
    total_row.appendChild(total_price)
    total_row.appendChild(total_price_num)
    
    table.appendChild(total_row)

    total_items_num.classList.add('total_items')
    total_price_num.classList.add('total_price')


}


