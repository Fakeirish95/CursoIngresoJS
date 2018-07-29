function mostrar()
{

	var numero;
	var contador=0;
	var numeroPositivo=0;
	var numeroNegativo=1;
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

								if (numero > 0)
									{	
										numeroPositivo=numeroPositivo+numero;
										numeroPositivo=parseInt(numeroPositivo);

									}
										else if (numero <0)
										{

											numeroNegativo=numeroNegativo*numero;
											numeroNegativo=parseInt(numeroNegativo);
										}




			}


			document.getElementById('suma').value=numeroPositivo;
			document.getElementById('producto').value=numeroNegativo;


}//FIN DE LA FUNCIÓN