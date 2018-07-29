function mostrar()
{

	var numero;
	var contador=0;
	var maximo;
	maximo = parseInt(maximo);
	var minimo;
	minimo=parseInt(minimo);
	var respuesta = "SI";
	respuesta=respuesta.toUpperCase();

		while (respuesta != "NO")
			{
			
				numero = parseInt(prompt("Ingrese un numero"));
				contador++;
		
					
					while(isNaN(numero))
						{
							numero = parseInt(prompt("Ingrese un numero"));
							


						}
							respuesta = prompt ("¿Desea continuar?");
							respuesta=respuesta.toUpperCase();

								if (contador == 1)
								{
									minimo = numero;
									maximo = numero;

								}
									else if (maximo < numero && numero > minimo)
									{
										maximo = numero;
									}
										else if (numero < minimo)
												{
													minimo=numero;
												}

								



			}


			document.getElementById('maximo').value=maximo;
			document.getElementById('minimo').value=minimo;



}//FIN DE LA FUNCIÓN