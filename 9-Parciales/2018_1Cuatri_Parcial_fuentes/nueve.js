/*Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar), 
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
	mostrar:
		a) La cantidad de temperaturas pares. 
		b) La marca del producto más pesado 
		c) La cantidad de productos que se conservan a menos de 0 grados. 
		d) El promedio del peso de todos los productos.	
		f) El peso máximo y el mínimo.*/


function mostrar()
{
	//variables
	var marca;
	var peso;
	var temperatura;
	var respuesta="si";
	var contador=0;
	var pesoMaximo;
	var pesoMinimo;
	var contadorPeso=0;
	var acumuladorPeso=0;
	var contadorProductosFrios=0;
	var marcaMasPesado;
	var contadorTemperaturasPares=0;
	var promedioPeso; 

//validacion

		while (respuesta !="no")
		{
			marca=prompt("Ingrese una marca");
			peso=prompt("Ingrese un peso de 1 a 100");
			peso=parseInt(peso);
			while (peso < 1 || peso > 100)
			{
				peso=prompt("Error. Ingrese un peso de 1 a 100");
			}
			temperatura=prompt("Ingrese una temperatura entre -30 y 30");
			while (temperatura < -30 || temperatura > 30)
			{
				temperatura=prompt("Error. Ingrese una temperatura entre -30 y 30");
			}

			contador++;

			//algoritmos

			if (temperatura%2==0)
			{
				contadorTemperaturasPares++;
			}

			if (contador==1)
			{
				pesoMinimo=peso;
				pesoMaximo=peso;

			}
			else if (peso>pesoMaximo)
			{
				pesoMaximo=peso;
				marcaMasPesado=marca;
			}
			else if (peso<pesoMinimo)
			{
				pesoMinimo=peso;
			}
			if (peso >= 1 || peso <= 100)
			{
				contadorPeso++;
				acumuladorPeso=acumuladorPeso+peso;
			}

			if (temperatura < 0)
			{
				contadorProductosFrios++
			}







			
			respuesta=prompt("Desea continuar?");
		}

		promedioPeso=acumuladorPeso/contadorPeso;


		//mostrar

		document.write ("La cantidad de temperaturas pares es " + contadorTemperaturasPares + "<br>");
		document.write ( "la marca del producto mas pesado es " + marcaMasPesado  + "<br>");
		document.write (  "la cantidad de productos  que se conservan a menos de 0 grados es "+ contadorProductosFrios + "<br>");
		document.write ( "el promedio del peso de todos los productos es "+ promedioPeso + "<br>");
		document.write (  "el peso maximo es " + pesoMaximo + " y el peso minimo es " + pesoMinimo + "<br>");


}
