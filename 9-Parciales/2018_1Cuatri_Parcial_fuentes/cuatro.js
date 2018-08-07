function mostrar()
{

	var numeroUno;
	var numeroDos;
	var suma;
	numeroUno=prompt("Ingrese el primer numero");
	numeroDos=prompt("Ingrese el segundo numero");

	if (numeroUno==numeroDos)
	{
		alert(numeroUno+numeroDos);
	}
	else if (parseInt(numeroUno)>parseInt(numeroDos))
	{
		alert(numeroUno - numeroDos);
	}
	else if (parseInt(numeroUno)<parseInt(numeroDos))
	{
		numeroUno=parseInt(numeroUno);
		numeroDos=parseInt(numeroDos);
		suma= numeroUno+numeroDos;
		if (suma>10)
		{
			alert("La suma es " + suma + " y supero el 10");

		}
		else
		{
			alert(suma);
		}

	}
}
