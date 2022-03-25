window.onload = function() {
    const list = document.querySelector('.wrapper');
    const addButton = document.querySelector('.add_Button');
    const items_area = document.querySelector('.items');

    addButton.onclick = function() {
        const items = document.querySelector('.text-items').value;
        let containers = document.createElement("div");
        containers.classList.add('container_list');

        if(!items){
            const wrap_div = document.querySelector('.wrap');
            let error = document.createElement('p');
            error.className = 'error-text';
            error.innerHTML = '<i style="color: rgb(228, 52, 52)">Adicione um item a sua lista</i>'

            for(error of document.querySelectorAll('.error-text')){
                error.remove()
            }

            wrap_div.appendChild(error);
        }

        if(items) {
            for(error of document.querySelectorAll('.error-text')){
                error.remove()
            }

            let del_button = document.createElement('button');
            del_button.className = 'del_button';
            del_button.innerHTML = 'Apagar';

            let edit_button = document.createElement("button");
            edit_button.className = "edit_button";
            edit_button.className = "edit_hover";

            edit_button.innerHTML = 'Editar'

            let div = document.createElement('div');
            div.className = 'innerButtons'
            div.appendChild(edit_button);
            div.appendChild(del_button);

            list.appendChild(containers);
            containers.innerHTML = items;
            containers.appendChild(div);

            del_button.onclick = function() {
                list.removeChild(containers)
            }

            edit_button.onclick = function() {
                let input = document.createElement('input');
                input.setAttribute("type", "text");
                input.setAttribute("placeholder", "Adicione um item ");
                input.className = 'input_edit';

                edit_button.innerHTML = 'Confirmar'
                containers.innerHTML = '';
                containers.appendChild(input);
                containers.appendChild(div);

                edit_button.onclick = function() {
                    /*edit_button.innerHTML = "Editado";
                    edit_button.classList.remove('edit_hover');
                    edit_button.classList.add('edited');*/

                    if(!input.value){
                        alert('Adicione um item !')
                    } else {
                        edit_button.innerHTML = "Editado";
                        edit_button.classList.remove('edit_hover');
                        edit_button.classList.add('edited');
                        containers.innerHTML = input.value;
                        containers.appendChild(div);
                    }


                    //containers.innerHTML = input.value;
                    //containers.appendChild(div);
                }
            }
        }
    }
}

