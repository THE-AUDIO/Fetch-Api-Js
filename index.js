const userName = document.getElementById('nameUser');
const email = document.getElementById('emailUser');
const password = document.getElementById('passwordUser');
const formulaire = document.querySelector('form');

// document.querySelector('button').addEventListener('click',()=>console.log('teste'))
let dataPost = {username: "test"}
formulaire.addEventListener('submit',(e)=>{
    e.preventDefault();
    let dataPostForm = {
        username : userName.value,
        useremail : email.value,
        userpassword: password.value    
    }   
    const newData = Object.assign(dataPost, dataPostForm)
    console.table(dataPost)
    console.table(newData)
    document.getElementById('form').reset()
})
//  post 
    fetch('url',{
        method:  `POST`,
        headers:{'content-type':'application/json'},
        body: JSON.stringify(dataPost)    
    })
    .then(response => response.json())
    .then((data)=>{
        fetch('url')// cet ici qu'on get les donné qu'on a posté en haut
        .then(res => res.json())
        .then((data)=> console.table(data))
        .catch((err)=>console.log(err))
    })
    .catch((er) =>console.log(er))