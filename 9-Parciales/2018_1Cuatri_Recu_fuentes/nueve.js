/*
Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico, el peso el cual debe ser entre 1 y 1000 y 
la temperatura del hábitat (entre -30 y 30) hasta que el usuario quiera e informar 
al terminar el ingreso por document.write: 
	mostrar:
		a) La cantidad de temperaturas pares. V
		b) El nombre y temperatura del animal más pesado V
		c) La cantidad de animales que viven a menos de 0 grados. V 
		d) El promedio del peso de todos los animales. V	
		f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.
*/


function mostrar()
{

	//variables

	var animal;
	var peso;
	var temperatura;
	var respuesta="si";
	var pesoMaximo;
	var animalPesado;
	var contador=0;
	var contadorAnimales=0;
	var contadorPeso=0;
	var contadorTemperaturasPares=0;
	var acumuladorPeso=0;
	var promedioPeso;
	var ContadorAnimalesPolares=0;
	var temperaturaAnimalPesado;
	var PesoMaximoBajoCero;
	var pesoMinimoBajoCero;

	//ingreso de datos

		while (respuesta != "no")
		{
			animal=prompt("Ingrese el animal.");
				while(!(isNaN(animal)))
				{
					animal=prompt("Error. Ingrese el animal.")
				}
			peso=prompt("Ingrese el peso del animal.");
			peso=parseInt(peso);
				while (peso < 1 || peso > 1000)
				{
					peso=prompt("Error. Ingrese el peso entre 1 y 1000.")
				}
			temperatura=prompt("Ingrese la temperatura del habitat.");
			temperatura=parseInt(temperatura);
				while (temperatura <-30 || temperatura > 30)
				{
					temperatura=prompt("Error. Ingrese una temperatura entre -30 y 30");
				}
			respuesta=prompt("¿Desea continuar?");

				contador++

	//algoritmos

			if (temperatura%2==0)
			{
				contadorTemperaturasPares++;
			}
			else
			{

			}
			if (peso > 1 && peso < 1000)
			{
				contadorPeso++;
				acumuladorPeso=acumuladorPeso+peso;
			}
			if (temperatura < 0)
			{
				ContadorAnimalesPolares++;
				if (ContadorAnimalesPolares==1)
				{
					PesoMaximoBajoCero=peso;
					pesoMinimoBajoCero=peso;

				}
				else
				{
					if (PesoMaximoBajoCero<peso)
						{
						PesoMaximoBajoCero=peso;
						}
					if (pesoMinimoBajoCero>peso)
					{
						pesoMinimoBajoCero=peso;

					}
				}
			}

			if (contador==1)
			{	
				pesoMaximo=peso;
				animalPesado=animal;
				temperaturaAnimalPesado=temperatura;
			}
			else if (pesoMaximo<peso)
			{
				pesoMaximo=peso;
				animalPesado=animal;
				temperaturaAnimalPesado=temperatura;
			}
			







		}
promedioPeso=acumuladorPeso/contadorPeso;

	//mostrar

document.write("La cantidad de temperaturas pares es " + contadorTemperaturasPares + "<br>");
document.write("El promedio de peso de todos los animales es " + promedioPeso + "<br>");
document.write("la cantidad de animales que viven en temperaturas bajo 0 es " + ContadorAnimalesPolares + "<br>");
document.write("El peso maximo del animal polar es " + PesoMaximoBajoCero + " y el animal mas liviano es " + pesoMinimoBajoCero + "<br>");
document.write("El nombre del animal mas pesado es " + animalPesado + " Y la temperatura de su habitat es " + temperaturaAnimalPesado + "<br>");


}
