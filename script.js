
Verifier_formulaire = (formulaire) => {

    var x, saisie, text;


    x = formulaire.code.value;
    saisie = formulaire.saisie.value;
    console.log("saisie: " + saisie);
    console.log("value: " + x);
    console.log("est integer: " + Number.isInteger(x));

    if (isNaN(x) || x < 1 || x > 25) {

        if (saisie == "") {
            text = "Veillez remplir le champs du message ,le code doit être un entier compris entre 1 et 25 !";
        }
        else {
            text = "Le code doit être un entier compris entre 1 et 25 !";
            console.log("value: " + x);

        }

    } else {// si le code est bien compris entre 1 et 25
        if (saisie == "") {
            text = "Veillez remplir le champs du message !";
        } else
            if ((parseFloat(x) == parseInt(x)) && !isNaN(x)) {

                // si tout est bien remplir
                text = "";
                //console.log("value: "+x);
                document.getElementById("demo").innerHTML = text;
                if (text == "") {
                    return 1; // correcte
                }

            } else {
                text = "Le code doit être un entier compris entre 1 et 25 !";
            }


    }
    document.getElementById("demo").innerHTML = text;
    return 0;

}

GenerateAlphabet = (code) => {
    var alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var alcry = []; // variable pour l'alphabet de cesar en fonction du code
    var ind = 26 - code;
    var inc = 0;// le 1ere indice du var alcry=[];
    for (var i = ind; i <= 25; i++) {
        alcry[inc] = alpha[i];
        inc = inc + 1;
    }

    var il = 0;// le 1ere indice de l'alphabet;
    for (var i = code; i < 26; i++) { // on remplit le reste des champs avec l'alphabet en clair
        alcry[i] = alpha[il];
        il += 1;
    }
    console.log(" alpha cesar:" + alcry + " le code :" + code);
    return alcry;


}


/* fonction de cryptage*/
CesarCrypt = (saisieClavier, alphabetCesar) => {
    var saisie = saisieClavier.trim();
    var indice = 0;
    var crypt = [];
    console.log("AlCESAR=" + alphabetCesar);
    var alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for (var i = 0; i < saisie.length; i++) {
        console.log("Saisie:===>" + saisie);
        console.log("taille saisie:" + saisie.length + "  le ième:" + i);
        if (saisie[i] === saisie[i].toUpperCase()) {
            console.log("C'était une lettre majuscule !" + saisie[i]);
            index = alpha.indexOf(saisie[i]);
            if (index == -1) {// cas où le caractère ne se trouve pas dans l'alphabet
                if (saisie[i].toString() == " ") { // si c'est un espace
                    crypt.push(" ");
                } else
                    if (saisie[i].toString() == "\n") { // si c'est un retour chariot
                        crypt.push("<br>");
                    }


            } else {
                // dans le cas où le caractère existe dans l'alphabet

                value = alphabetCesar[index];
                crypt.push(value);
            }

        } else {//Ce n'était pas une majuscule

            console.log("Ce n'était pas une majuscule !");
            index = alpha.indexOf(saisie[i].toUpperCase().toString());
            if (index == -1) {// cas où le caractère ne se trouve pas dans l'alphabet
                if (saisie[i].toString() == " ") { // si c'est un espace
                    crypt.push(" ");
                }

            } else {
                // dans le cas où le caractère existe dans l'alphabet et est minuscule
                value = alphabetCesar[index].toLowerCase().toString();
                crypt.push(value);
            }

        }

    }
    console.log("la crypt: Gbsdsxq myno sc Myyv");
    console.log("le crypto de cesar estr:" + crypt.join(''));
    console.log("la saisie estr :" + saisie);
    //console.log("la norme: myyv");

    return crypt.join('');
}

/* fonction de decryptage*/
CesarDecrypt = (saisieClavier, alphabetCesar) => {
    var saisie = saisieClavier.trim();
    var indice = 0;
    var decrypt = [];
    var alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for (var i = 0; i < saisie.length; i++) {
        console.log("taille saisie:" + saisie.length);
        if (saisie[i] === saisie[i].toUpperCase()) {
            console.log("C'était une lettre majuscule !" + saisie[i]);
            index = alphabetCesar.indexOf(saisie[i].toString());
            if (index == -1) {// cas où le caractère ne se trouve pas dans l'alphabet
                if (saisie[i].toString() == " ") { // si c'est un espace
                    decrypt.push(" ");
                }
                else
                    if (saisie[i].toString() == "\n") { // si c'est un retour chariot
                        decrypt.push("<br>");
                    }

            } else {
                // dans le cas où le caractère existe dans l'alphabet

                value = alpha[index];
                decrypt.push(value);
            }

        } else {//Ce n'était pas une majuscule

            console.log("Ce n'était pas une majuscule !");
            index = alphabetCesar.indexOf(saisie[i].toUpperCase().toString());
            if (index == -1) {// cas où le caractère ne se trouve pas dans l'alphabet
                if (saisie[i].toString() == " ") { // si c'est un espace
                    decrypt.push(" ");
                } else
                    if (saisie[i].toString() == "\n") { // si c'est un retour chariot
                        decrypt.push("<br>");
                    }

            } else {
                // dans le cas où le caractère existe dans l'alphabet
                value = alpha[index].toLowerCase();
                decrypt.push(value);
            }

        }

    }
    console.log("le decrypto de cesar estr:" + decrypt.join(''));
    console.log("la saisie est:" + saisie);

    return decrypt.join(''); // reture du message decrypter

}

/* Appel des fonctions dans le html*/

Crypter = (formulaire) => {

    var reponse = Verifier_formulaire(formulaire);
    if (reponse == 1) {
        //    var alpha=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        code = formulaire.code.value;
        console.log("code:" + code);

        var al = GenerateAlphabet(code);
        var saisieClavier = formulaire.saisie.value;
        console.log("valeurSaisie: " + saisieClavier);
        var valeur = CesarCrypt(saisieClavier, al);
        console.log("crypt:" + CesarCrypt(saisieClavier, al));

        Afficher(form, valeur, "crypt");
        reponse = 0;

    }





}

Decrypter = (formulaire) => {
    var reponse = Verifier_formulaire(formulaire);
    if (reponse == 1) {
        var alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        code = formulaire.code.value;
        var al = GenerateAlphabet(code, alpha);
        var saisieClavier = formulaire.saisie.value;
        var valeur = CesarDecrypt(saisieClavier, al, alpha);
        Afficher(form, valeur, "dcrypt");
        reponse = 0;
    }
}

Reinitialiser = (formulaire) => {
    AfficherNull(form);
    document.getElementById("demo").innerHTML = "";
}

Afficher = (form, values, type) => {


    var spa = document.getElementById('output');
    var titre = document.getElementById('outputTitre');
    if (type == 'crypt') {


        spa.innerHTML = values;
        titre.innerHTML = 'Message Crypté';
    }
    else {
        spa.innerHTML = values;
        titre.innerHTML = 'Message Decrypté';
    }
}

AfficherNull = (form) => {
    var spa = document.getElementById('output');
    var titre = document.getElementById('outputTitre');
    //document.form.output.value="";
    document.form.saisie.value = "";
    document.form.code.value = "";
    spa.innerHTML = '';
    titre.innerHTML = '';


}