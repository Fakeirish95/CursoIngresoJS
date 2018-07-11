function mostrar()
{
/*Al ingresar una edad debemos informar 
si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).*/  

var edad;
edad= document.getElementById('edad').value;
 if (edad <= 17 && edad >=13) {
 	alert("Usted es adolescente");

}
else if (edad < 13) 
	{alert("Sos un nenito");}
else if (edad >90)
	{alert("u should be dead by now");}

else 
	{alert("Usted es un adulto");
}



}//FIN DE LA FUNCIÓN