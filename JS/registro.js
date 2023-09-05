import { User } from "./clases.js";

let all_users =JSON.parse(localStorage.getItem('users')) ||[];

const save_users=()=>{
    let user_name = document.getElementById('newUser').value;
    let user_email = document.getElementById('newEmail').value;
    let user_pass = document.getElementById('newPass').value;
    let user_nn = new User (user_name,user_email,user_pass);
    all_users.push(user_nn);
    localStorage.setItem('users',JSON.stringify(all_users));
    document.querySelector('form').reset();
    window.location.href="Pages/adminUser.html";
}

document.getElementById('formRegister').addEventListener('submit',save_users);
// creando tabla usuarios:

let tableUsers = document.getElementById('tableUsers');
function cargar_tabla_usuarios(){
    tableUsers.innerHTML = "";
    all_users.forEach((user,index)=>{
        let filaUser = document.createElement('tr');
        let celdaUser = `<td>${user.userName}</td>
        <td>${user.userEmail}</td>
        <td ><button class="btn btn-danger fw-bold my-2 me-2" onclick="userDelete(${index})"><i class="bi bi-trash3-fill"></i> </button></td>`
        filaUser.innerHTML=celdaUser;
        tableUsers.appendChild(filaUser);
    })
}

// window.userDelete = (index)=>{
// let userValidate = confirm(`Desea eliminar al usuario:${all_users[index].userName.toUpperCase()} \n email:${all_users[index].userEmail.toUpperCase()}`);
// if(userValidate){
//     all_users.splice(index,1);
//     alert('El usuario ha sido eliminado de la lista.');
//     localStorage.setItem('users',JSON.stringify(all_users));
//     tablaUsuarios();
// }
// }



