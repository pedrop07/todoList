const list = document.querySelector('.wrapper');
const inputForm = document.getElementById('form');

inputForm.addEventListener('submit', function(ev){
    ev.preventDefault();

    let items = document.querySelector('.text-items');
    let containers = document.createElement("div");
    containers.classList.add('container_list');

    if(!items.value.trim()){
        const wrap_div = document.querySelector('.wrap');
        let error = document.createElement('p');
        error.classList.add('error-text');
        error.innerHTML = '<i style="color: rgb(228, 52, 52)">Adicione um item a sua lista</i>';

        const presentError = document.querySelector('.error-text');
        presentError?.remove();

        wrap_div.appendChild(error);
    } else {
        let localItems = JSON.parse(localStorage.getItem('localItem'));

        if(!localItems){
            taskList = []
        } else {
            taskList = localItems;
        }

        taskList.push(items.value);
        localStorage.setItem('localItem', JSON.stringify(taskList));

        const presentError = document.querySelector('.error-text');
        presentError?.remove();

        showItem();
    }

    items.value = '';
})

function showItem() {
    let localItems = JSON.parse(localStorage.getItem('localItem'));
    if(!localItems){
        taskList = [];
    } else {
        taskList = localItems;
    }

    itemShow = document.querySelector('.wrapper');

    let html = ''
    taskList.forEach((item, index)=> {
        html +=
            `<div class="container_list">
                ${item}
                <button class="del-button" onClick="deleteItem(${index})">Apagar</button>
            </div>`;
    });

    itemShow.innerHTML = html;
}

showItem();

function deleteItem(index){
    taskList.splice(index, 1);
    localStorage.setItem('localItem', JSON.stringify(taskList));
    showItem();
}
