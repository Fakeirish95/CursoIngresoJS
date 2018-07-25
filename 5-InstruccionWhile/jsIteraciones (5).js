function mostrar()
{

var sexo = prompt("ingrese f ó m .");

sexo = sexo.toUpperCase();

while (!(sexo == "F" || sexo == "M"))
{
	sexo = prompt("Solo existen dos generos. ingrese f ó m .");
	sexo = sexo.toUpperCase();
}


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN