// - # Les conditions - introduction

// 1. ### Via un console.log() vérifie l'egalité entre 1 et "1"

if (1 == 1) {
    console.log("oui");
}

// 2. ### Via un console.log() vérifie l'egalité STRICTE entre 1 et "1"

if (1 === 1) {
    console.log("oui!");
}
// 3. ### Créer un programme qui demande le prénom d'une personne, si le prénom de la personne comporte moins de 5 caractères, affichée une alerte avec comme message " Ton nom est trop court "

// let nom = prompt("Nom?");

// if (nom.length < 5) {
//     alert("yanamestooshortdaahhling");
// }

// 4. ### Affiche une addition a l'utilisateur et demande lui de résoudre l'addition, si il répond juste, félicitez le, sinon dite lui que c'est incorrect.

// let addi = prompt("4 + 4 = ?");

// if (addi == 8) {
//     console.log("youpi");
// } else {
//     console.log("bouuu");
// }

// 5. ### Affiche une multiplication à l'utilisateur et demande lui de la résoudre, si il répond juste félicitez le "la réponse était bien xx" sinon dite lui, à combien d'unité il était de la réponse exemple si la réponse etait 35 et qu'il répont 40 renvoyez lui une alerte avec "C'est dommage, tu n'étais qu'a 5 unité de la bonne réponse"

// let multi = prompt("6 x 6 = ?");

// if (multi == 36) {
//     console.log("bien uej a drari la rep était bien 36");
// } else {
//     parseInt(multi);
//     console.log(`ewa dréré encore ${Math.abs(36 - multi)} unités et t'étais bon`);
// }

// 6. ### Créer un programme qui permet d'ajouter des elements dans un tableau via des prompts quand le tableau contient 3 éléments, renvoyez une alerte avec le contenu du tableau

// let tablo = [];


// if (tablo.length != 3) {
//     tablo.push(prompt("gimme more"));
//     tablo.push(prompt("mooaar"));
//     tablo.push(prompt("aaaaaa"));

// } else if (tablo.length == 3) {
//     alert(tablo);
// }


// 7. ### Créer un programme qui permet a l'utilisateur de mettre des chiffres dans des bacs, si le chiffre est plus grand ou égal à 12 il va dans le bac "grandNombres" si il est plus petit que 12 il va dans le bac "petitNombres" affiche ensuite une seule alerte avec le contenu des deux bacs

// let chiffr = prompt("gimme numbo");
// parseInt(chiffr);

// let grandNombres = [];
// let petitNombres = [];

// if (chiffr < 12) {
//     petitNombres.push(chiffr);
// } else if (chiffr >= 12) {
//     grandNombres.push(chiffr);
// }

// alert(`${petitNombres} ${grandNombres}`);

// 8. ### Invente un exercice avec ce que tu as appris en Javascript jusqu'a maintenant en incluent des conditions

// 9.

// Créer un programme qui permet aux étudiants de MolenGeek de savoir leurs jours d'e-learning et les jours en présentielle.
// Via un prompt, demandez à l'étudiant le jour en question(lundi, mardi, mercredi, jeudi, vendredi).
// Si l'étudiant répond lundi ou mardi ou mercredi, le programme lui répond via une console.log qu'il est en e-learning.
// S'il répond jeudi et vendredi, le programme lui répond via une console.log qu'ils sont en présentielle.
// S'il répond autre chose que ces 5 propositions, le programme lui répond que sa demande est érronée.

//