window.addEventListener('DOMContentLoaded', () => {
    let elForm = document.getElementById('form')
    let elInputPassword = document.getElementById('password')
    let elInputEmail = document.getElementById('email')
    let list = document.getElementById('list');
    let arr = []



    const renderTodos = (todoData, todoList) => {


        // let user = []
        todoData.forEach(todo => {

            // user.push(todo)
            // console.log(user);
            // Checked Elements
            let newLi = document.createElement('li')
            let newText = document.createElement('p')
            let newText2 = document.createElement('p')
            let newBtn = document.createElement('button')
            let newBtn2 = document.createElement('button')
            let newDiv = document.createElement('div')
            let btnGroup = document.createElement('div')


            newText.setAttribute('class', 'text-gray-600');
            newText2.setAttribute('class', 'text-gray-600');
            newDiv.setAttribute('class', 'flex flex-col text-start')
            btnGroup.setAttribute('class', 'flex flex-row text-start')
            newBtn.setAttribute('class', 'delete-btn fa-solid fa-trash-can text-[18px] p-2 hover:text-red-400');
            newBtn2.setAttribute('class', 'edit-btn fa-solid fa-user-pen text-[18px] p-2 hover:text-green-400');
            newLi.setAttribute("class", "item text-start flex align-center justify-between px-3 py-2 rounded-md text-gray-300 mt-4 hover:bg-green-100");

            newDiv.appendChild(newText)
            newDiv.appendChild(newText2)
            newLi.appendChild(newDiv)
            btnGroup.appendChild(newBtn2)
            btnGroup.appendChild(newBtn)
            newLi.appendChild(btnGroup);
            todoList.appendChild(newLi);

            newText.innerHTML = `<span class='text-sky-400'>Email:</span> ${todo.email}`;
            newText2.innerHTML = `<span class='text-sky-400'>Password:</span> ${todo.password}`;
            newBtn.dataset.todoId = todo.id;
        });


    }


    elForm.addEventListener('submit', e => {
        e.preventDefault()
        list.innerHTML = null
        let todo = {
            id: arr[arr.length - 1]?.id + 1 || 1,
            email: elInputEmail.value,
            password: elInputPassword.value
        }


        list.addEventListener("click", (evt) => {
            if (evt.target.matches(".delete-btn")) {
                let todoBtnId = Number(evt.target.dataset.todoId)

                const foundIndex = arr.findIndex(todo => {
                    return todo.id === todoBtnId
                })

                arr.splice(foundIndex, 1)
                list.innerHTML = null
                renderTodos(arr, list)
            }
            if (evt.target.matches(".edit-btn")) {
                let todoBtnId = Number(evt.target.dataset.todoId)
                list.innerHTML = null

                let newLi2 = document.createElement('li')
                let newInput = document.createElement('input')
                newLi2.appendChild(newInput)
                newLi2.setAttribute("class", "text-start flex align-center justify-between text-gray-300 ");
                newInput.setAttribute('placeholder', 'Edit input...')
                newInput.setAttribute('class', 'edit-input w-full border-2 border-sky-600 py-1.5 px-2 rounded-sm shadow-md text-sky-400 focus: outline-none focus:shadow-lg focus:border-2 focus:border-sky-400')
                list.appendChild(newLi2);
                // if (evt.keyCode == 13) {
                //     console.log(todo.email); 
                // }
                const foundIndex = arr.findIndex(todo => {
                    return todo.id === todoBtnId
                })

                renderTodos(arr, list)
            }
        })
        
        localStorage.setItem('user', JSON.stringify(todo))

        elInputPassword.value = null
        elInputEmail.value = null
        arr.push(todo)
        renderTodos(arr, list)
    })



    renderTodos(arr, list)
})



