/*
ingreso:
maria f 15
jose m 33
pepe m 81

mostrar:
	cantidad
		1- de mayores de edad= 2
		2-menores de edad =1
		3-mujeres =1
		4-cantidad de homres=2
	nombre
		5 del mayor edad =pepe
		6-del menor edad=maria
		7-del homre de menor edad= jose
*/
function mostrar()
{

	var nombre;
	var edad;
	var sexo;
	var contador=0;
	sexo=sexo.toUpperCase();	
	var contadorMayoresEdad=0;
	var contadorMenoresEdad=0;
	var contadorMujeres=0;
	var contadorHombres=0;

	while (contador <3)
	{   contador++;
		nombre=prompt("Ingrese el nombre");
		edad=parseInt(prompt("Ingrese la edad"));

		while (edad <0 || edad > 100)
			{
 				edad=parseInt(prompt("Error. Ingrese la edad"));
			}
		
		sexo=prompt("Ingrese el sexo");
		sexo = sexo.toUpperCase();

			while (!(sexo == "F" || sexo == "M"))
				{
					sexo=prompt("error. Ingrese el sexo");
					sexo = sexo.toUpperCase();				
				}	

					if (edad > 17)
					{
						contadorMayoresEdad++
					}

					else if (edad < 17)
					{
						contadorMenoresEdad++
					}

					else if (sexo == "F")
					{
						contadorMujeres++
					}
					else if (sexo =="M")
					{
						contadorHombres++
					}





				

				








	}

document.write("la cantidad de personas mayores de edad es " + contadorMayoresEdad + "<br>");
document.write("la cantidad de personas menores de edad es " + contadorMenoresEdad + "<br>");


}
