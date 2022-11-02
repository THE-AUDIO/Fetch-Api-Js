###  Thème de stage de découverte : FETCH API EN JAVASCRIPT
[1]Fetch Api  fournit une définition pour trois interfaces à avoir Request , Response et Header et implémente       le mixin Body  qu’on va pouvoir utiliser à nos requêtes.

[2]Request et la response  == c’est le requête et la réponse.

[3]Headers == l’en-tête de requête et la réponse.

[4]Body  == fournit un ensemble de méthode nous permettant de gerer le corps de la request et de la response,


## Méthode global de fetch Api

[Syntaxe] fetch() == coeur de celle ci

[rôle] permet l'echange de donné avec le serveur de manière asynchrone

* Methode fetch prend en unique argument obligatoire c'est le chemin de la resource qu'on souhaite recuperer,

* Mais il aussi une autre argument faculatif{
    un liste d'option sous forme d'objet litteral pour preciser
     le methode d'envoye, les en-tête,.. etc,
}

** la Methode fetch() renvoie une promesse (objet de type promise)
    qui va se resoudre avec l'objet response (Nb le promise va etre resolu dès que le serveur renvoie l'en-têtes HTTP cad avant même qu'on ait le corps)

[Rq] promise rompue si la requete HTTP n'a pas pu effectué,

En revanche l'envoie d'erreur HTTP par le serveur comme un statut code 404 ou 500 vont être considerer comme 


normale et ne pas empecher la prommesse d'être tenue 


[Verification] utliser le propriete OK  et Statut de l'objet Response envoyer 

[OK] contient un boolean true or false de code HTTP de la  response et compris entre 200 et 209, false si non 

[status] renvoye le statu code HTTP de la response (la valeur numerique lié a ce status comme 200, 301,404,500)

### Recuperation du corps de la reponse

Methode text() donne une chaine de caractere
        json donne un objet JSON
        formData donne un objet en FormData
        arraybuffer donne un objet en ArrayBuffer
        blob() donne un objet Blob (blob c'est une fichier brute et on peut pas modifier ça valeur)