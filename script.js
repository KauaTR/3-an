function validar(){
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (email == "kaua" && senha=="123"){
        alert("BEm vindo")
    }else{
        alert("Verifique seus dados e tente novamente");
    }
}