function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="SI";
	var numero;
	var promedio;
	respuesta= respuesta.toUpperCase();


		while (respuesta !="NO")
			{

				numero = parseInt(prompt("Ingrese un numero"));
				acumulador = acumulador + numero;
				contador++;
				respuesta = prompt ("¿Desea continuar?");
				respuesta= respuesta.toUpperCase();




			}
			promedio = acumulador / contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN