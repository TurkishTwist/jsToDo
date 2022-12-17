const toggleSwitch = document.querySelector('input[type="checkbox"]');
const form = document.querySelector('#add-item');
const input = document.querySelector('#item');
const groceryList = document.querySelector('#grocery-list');


groceryList.addEventListener('click', function(e){
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    }
    else if (e.target.tagName === 'LI'){
        e.target.classList.toggle('selected');
    }
});

form.addEventListener('submit', function(e){
    e.preventDefault();
    const newItem = document.createElement('li');
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    newItem.innerText = input.value + " ";
    newItem.appendChild(removeBtn);
    input.value = '';
    groceryList.appendChild(newItem);
});
