function mostrar()
{

	var contador = 0;
	var numero;
	var respuesta = "si";
	var sumaNegativos = 0;
	var sumaPositivos = 0;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorCeros = 0;
	var contadorPar = 0;
	var promedioNegativos = 0;
	var promedioPositivos =  0;
	var diferencia;

	while(respuesta!="no")
	{
		
		numero = parseInt(prompt("Ingrese el valor."));
		
		if(numero < 0 )
		{

			sumaNegativos = sumaNegativos + numero;
			contadorNegativos++;

		}else
		{

			if(numero > 0)
			{

			sumaPositivos = sumaPositivos + numero;
			contadorPositivos++;

			}
		}
		
		if(numero == 0)
		{

			contadorCeros++;

		}

		if(numero % 2 == 0)
		{

			contadorPar++;

		}

		respuesta = prompt("Ingrese 'No' para salir.");

	}

	promedioPositivos = sumaPositivos / contadorPositivos;
	promedioNegativos = sumaNegativos / contadorNegativos;
	diferencia = sumaPositivos - sumaNegativos;


	document.write("La suma de los negativos es: " + sumaNegativos);
	document.write("La suma de los positivos es: " + sumaPositivos);
	document.write("La cantidad de positivos es: " + contadorPositivos);
	document.write("La cantidad de negativos es: " + contadorNegativos);
	document.write("La cantidad de ceros es: " + contadorCeros);
	document.write("La cantidad de numeros pares es: " + contadorPar);
	document.write("El promedio de los positivos es: " + promedioPositivos);
	document.write("El promedio de los negativos es: " + promedioNegativos);
	document.write("La diferencia entre negativos y positivos es: " + diferencia);







}//FIN DE LA FUNCIÓN