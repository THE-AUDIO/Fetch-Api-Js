// let promise = fetc(url, option)
// url = url cible et option[parametre facultatif]


//let response = await fetch(url);

//if (response.ok) { // if HTTP-status is 200-299
// obtenir le corps de réponse (la méthode expliquée ci-dessous)
//let json = await response.json();
//} else {
//alert("HTTP-Error: " + response.status);
//}

let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
let response = await fetch(url);

let commits = await response.json(); // lire le corps de réponse et analyser en JSON

alert(commits[0].author.login);