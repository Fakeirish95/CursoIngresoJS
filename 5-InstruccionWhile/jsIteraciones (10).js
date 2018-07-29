function mostrar()
{

	var contador=0;

	var numero;

	contador=parseInt(contador);

	var contadorNegativos=0;

	contadorNegativos=parseInt(contadorNegativos);

	var contadorPositivos=0;

	contadorPositivos=parseInt(contadorPositivos);

	var contadorCeros=0;

	contadorCeros=parseInt(contadorCeros);

	var contadorPares=0;

	var acumuladorNegativos;

	var acumuladorPositivos;

	acumuladorPositivos=parseInt(acumuladorPositivos);

	acumuladorNegativos=parseInt(acumuladorNegativos);

	contadorPares=parseInt(contadorPares);
	
	var respuesta="SI";

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
		{
			if (numero < 0)
					{
						contadorNegativos++;
						acumuladorNegativos= acumuladorNegativos + numero;

					}
					else if (numero > 0)
							{
								contadorPositivos++;
								acumuladorPositivos=acumuladorPositivos+numero;
							}
							else if (numero == 0)
									{
										contadorCeros++

									}
										else if (numero / 2 == 0)
												{

													contadorPares++
												}

			


		}
		document.write(contador);
		document.write(contadorPares);
		document.write(contadorCeros);
		document.write(contadorPositivos);
		document.write(contadorNegativos);







}//FIN DE LA FUNCIÓN