let loggedArray;
(() => {

    let userLogged = localStorage.getItem('user')
    console.log(userLogged)


    loggedArray = JSON.parse(userLogged)


    if(!userLogged){
    window.location.href = '../../index/Register/Regsiter.html'
    }

})()

console.log(loggedArray)

document.getElementById('name').innerHTML = loggedArray.firstName

