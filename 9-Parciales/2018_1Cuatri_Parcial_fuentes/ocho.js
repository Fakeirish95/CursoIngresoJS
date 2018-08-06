/*
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de números pares. 
b) La cantidad de números impares. 
c) La cantidad de ceros. 
d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos. 
f) El número y la letra del máximo y el mínimo.
*/

function mostrar()
{
	var numero;
	var numerosPares;
	var numerosImpares;
	var acumuladorCeros=0;
	var promedioPositivos;
	var acumuladorPositivos=0;
	var sumaNegativos=0;
	var acumuladorNegativos=0;
	var letra;
	var contador=0;
	var letraMinimo;
	var letraMaximo;
	var numeroMinimo;
	var numeroMaximo;
	var respuesta="si";
	var acumuladorPares=0;
	var acumuladorImpares=0;
	var sumaPositivos=0;
	sumaPositivos=parseInt(sumaPositivos);
	sumaNegativos=parseInt(sumaNegativos);


	while (respuesta !="no")
	{
		letra=prompt("ingrese una letra");
		numero=parseInt(prompt("Ingrese un numero entre -100 y 100"));
		while (numero <-100 || numero >100)
		{
			numero=prompt("Ingrese un numero del -100 al 100");
		}
		respuesta=prompt("Desea continuar?");

		contador++;

		if (numero % 2 == 0)
		{
			acumuladorPares++;
		}
		else if (!(numero % 2 == 0))
		{
			acumuladorImpares++;
		}

		if (numero==0)
		{
			acumuladorCeros++;
		}

		if (numero>0)
		{
			sumaPositivos=sumaPositivos+numero;
			acumuladorPositivos++;
		}
		else if (numero< 0)
		{
			sumaNegativos=sumaNegativos+numero;
			acumuladorNegativos++;
		}
		if (contador == 1)
		{
			numeroMinimo=numero;
			numeroMaximo=numero;
			letraMinimo=letra;
			letraMaximo=letra;

		}
		if (numeroMinimo>numero)
		{
			numeroMinimo=numero;
			letraMinimo=letra;
		}
		else if (numeroMaximo<numero)
		{
			numeroMaximo=numero;
			letraMaximo=letra;
		}

	}

	promedioPositivos=sumaPositivos/acumuladorPositivos;


//mostrar

document.write("La cantidad de numeros pares es " + acumuladorPares + "<br>");
document.write( "la cantidad de numeros impares es " + acumuladorImpares + "<br>");
document.write("la cantidad de ceros es "+acumuladorCeros + "<br>");
document.write("el promedio de todos los positivos es " + promedioPositivos + "<br>");
document.write("la suma de todos los negativos es "+ sumaNegativos + "<br>");
document.write("La letra del numero minimo es " + letraMinimo + " y este numero fue "+ numeroMinimo + "<br>");
document.write("La letra del numero maximo es "+ letraMaximo + " y este numero fue " + numeroMaximo + "<br>");








}
