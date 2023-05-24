const btn = document.getElementById('btn');
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const numberInput = document.querySelector('#number');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// btn.addEventListener('click', myFunction); 

// function myFunction(e) {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('#item').lastElementChild.textContent = 'Slow down';
//     document.querySelector('#item').style.background = 'green'
//     document.querySelector('#item').style.color = 'black';
// }


myForm.addEventListener('submit', onSubmit);


function onSubmit(event) {
    event.preventDefault();

    // Delete button
    const deleteBtn = document.createElement('input');
    deleteBtn.type = 'button';
    deleteBtn.value = 'Delete';

    // Edit button
    const editBtn = document.createElement('input');
    editBtn.type = 'button';
    editBtn.value = 'Edit'


    const name = nameInput.value;
    const email = emailInput.value;
    const number = numberInput.value;
    // localStorage.setItem('Name', name);
    // localStorage.setItem('Email' ,email);
    // localStorage.setItem('number' , number);

    const StorageData = {
        name,
        email,
        number
    };

    localStorage.setItem(StorageData.email, JSON.stringify(StorageData));


    if (nameInput.value === '' || emailInput.value === '' || numberInput.value === '') {
        msg.style.background = 'red';
        msg.innerHTML = 'Please feel all the fields';
        setTimeout(() => msg.remove(), 5000);
    }
    else {

        const li = document.createElement('li');

        li.appendChild(document.createTextNode(`${nameInput.value} - ${emailInput.value} - ${numberInput.value} - `));
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
        userList.append(li);

        // setTimeout(() => li.remove(), 10000)
        //  delete button
        deleteBtn.onclick = () => {
            localStorage.removeItem(StorageData.email);
            userList.removeChild(li);
        }

        // Edit button 
        editBtn.onclick = () => {
            nameInput.value = StorageData.name;
            emailInput.value = StorageData.email;
            numberInput.value = StorageData.number;
            localStorage.removeItem(StorageData.email);
            userList.removeChild(li);


        }



    }


}


// Object in localStorage

// let myobj = {
//     name : "Chintu",
//     age : 21
// };

// let myobj_serialized = JSON.stringify(myobj);

// localStorage.setItem("myObj" , myobj_serialized);


// let myobj_deserialized = JSON.parse(localStorage.getItem("myObj"));

// console.log(myobj_deserialized);