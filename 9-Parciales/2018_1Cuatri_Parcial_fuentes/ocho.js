function mostrar()
{

	var letra;
	var numero;
	var respuesta="si";
	var contadorCeros=0;
	var contador=0;
	var contadorPares=0;
	var contadorImpares=0;
	var contador=0;
	var contadorPositivos=0;
	var acumuladorPositivos=0;
	var promedioPositivos;
	var acumuladorNegativos=0;
	var contadorNegativos=0;
	var promedioNegativos=0;
	var numeroMaximo;
	var letraMaximo;
	var numeroMinimo;
	var letraMinimo;

		while (respuesta != "no")
		{

			letra=prompt("Ingrese UNA letra");
			numero=prompt("Ingrese un numero de -100 a 100");
			numero=parseInt(numero);
			while (numero < -100 || numero > 100)
				numero=prompt("Error. Ingrese un numero de -100 a 100");

			if (numero%2==0)
			{
				contadorPares++;
			}
			else if (!(numero%2==0))
			{
				contadorImpares++;
			}
			if (numero==0)
			{
				contadorCeros++;
			}
			if (numero > 0)
			{
				contadorPositivos++;
				acumuladorPositivos=acumuladorPositivos+numero;
			}
			else if (numero < 0)
			{
				contadorNegativos++;
				acumuladorNegativos=acumuladorNegativos+numero;
			}

			contador++

			if (contador==1)
			{
				numeroMaximo=numero;
				numeroMinimo=numero;
				letraMaximo=letra;
				letraMinimo=letra;

			}
			else if (numero > numeroMaximo)
			{
				numeroMaximo=numero;
				letraMaximo=letra;
			}
			else if (numero < numeroMinimo)
			{
				numeroMinimo=numero;
				letraMinimo=letra;
			}



			respuesta=prompt("Desea continuar?");
			
		}

		promedioPositivos=acumuladorPositivos/contadorPositivos;

		document.write("La cantidad de numeros pares es " + contadorPares + "<br>");
		document.write("La cantidad de numeros impares es " + contadorImpares + "<br>");
		document.write("La cantidad de ceros es " + contadorCeros + "<br>");
		document.write("el promedio de los numeros positivos ingresados es " + promedioPositivos +  "<br>");
		document.write("La suma de todos los numeros negativos es " + acumuladorNegativos +  "<br>");
		document.write ("El maximo numero ingresado es " + numeroMaximo + " y su letra es " + letraMaximo +  "<br>");
		document.write("El minimo numero ingresado es " + numeroMinimo + " y su letra es " + letraMinimo + "<br>");


}
