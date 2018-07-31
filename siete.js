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
		5 del mayor edad = pepe
		6-del menor edad = maria
		7-del homre de menor edad = jose
		mostrar en document.write.- */

function mostrar()
{
	//variables
	var edad;
	var sexo;
	var nombre;
	var contador;
	var contadorMayores;
	var contadorMenores;
	var contadorHombres;
	var contadorMujeres;

	var nombreMayor;
	var nombreMenor;

	var nombreHombreMenor;
	var edadHombreMenor;


	edad=parseInt(edad);
	contador=0;
	var contadorMayores=0;
	var contadorMenores=0;
	var contadorHombres=0;
	var contadorMujeres=0;
	var menorEdad;
	var mayorEdad;
	menorEdad=parseInt(menorEdad);
	mayorEdad=parseInt(mayorEdad);
	edadHombreMenor=parseInt(edadHombreMenor);


	//Validación:

		while (contador < 3)
		{
			nombre=prompt("Ingrese el nombre");
			edad=prompt("Ingrese la edad, de 0 a 100");
			edad=parseInt(edad);
			sexo=prompt("Ingrese el sexo f o m");
			sexo = sexo.toLowerCase();
			contador++

	//algorismos
				
				while (edad < 0 || edad > 100)
					{
						edad=prompt("Ingrese una edad valida de 0 a 100");
						edad=parseInt(edad);
					}
					if (edad > 17)
						{
							contadorMayores++;
						
						}
						else if (edad < 17)
							{
								contadorMenores++;
								
							}
							if (sexo == "f")
								{
									contadorMujeres++;
								}			
								else if (sexo == "m")
									{
										contadorHombres++;
									}								
									 if (contador == 1)
										{
											menorEdad = edad;
											mayorEdad = edad;
										}

										else if (mayorEdad < edad)
											{
												mayorEdad=edad;
												nombreMayor=nombre;												
											}										
											else if (menorEdad > edad)
												{
													menorEdad=edad;
													nombreMenor=nombre;													
												}
												if (sexo = "m" && )
												 


		}

if (nombreMayor=nombre && sexo = "m")
{
edadHombreMenor=edad;
nombreHombreMenor=nombre;
}	








//Mostrar

document.write("La cantidad de mayores de edad es de " + contadorMayores + " personas" + "<br>");
document.write("La cantidad de menores de edad es de " + contadorMenores + "personas" + "<br>");
document.write("La cantidad de hombres es de " + contadorHombres + "<br>");
document.write ("La cantidad de mujeres es de " + contadorMujeres + "<br>");
document.write("El nombre del menor de edad es " +nombreMenor+ " y tiene " + menorEdad + " años." + "<br>" );
document.write("el nombre del mayor de edad es " +nombreMayor+ " y tiene " + mayorEdad +  " años" +"<br>");
document.write("El hombre menor es " + nombreHombreMenor + " y tiene " + edadHombreMenor + " años" + "<br>");





}
