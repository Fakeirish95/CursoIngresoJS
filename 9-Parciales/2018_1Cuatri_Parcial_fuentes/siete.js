function mostrar()
{
	
	var contador=0;
	var contadorNotas=0;
	var contadorVarones=0;
	var sexo;
	var nota;
	var acumuladorNotas=0;
	var promedioNotas;
	var notaMasBaja;
	var sexoNotaBaja;


		while (contador < 5)
		{
			sexo=prompt("Ingrese su sexo (f ó m)");
			while (!(sexo=="f" || sexo =="m"))
			{
				sexo=prompt("Error. Ingrese f ó m");
			}
			nota=prompt("Ingrese una nota del 0 al 10");
			nota=parseInt(nota);
			while(nota <0 || nota > 10)
			{
				nota=prompt("Error. Ingrese una nota del 0 al 10");
			}

			if (nota >= 0 || nota <= 10)
			{
				contadorNotas++
				acumuladorNotas=acumuladorNotas+nota;
				if(contadorNotas==1)
				{
					notaMasBaja=nota;
					sexoNotaBaja=sexo;
				}
				else if(nota < notaMasBaja)
				{
					notaMasBaja=nota;
					sexoNotaBaja=sexo;
				}
			}
			if (nota> 6)
			{
				contadorVarones++
			}




			contador++
		}

		promedioNotas=acumuladorNotas/contadorNotas;

		document.write("El promedio de las notas es: " +promedioNotas + "<br>");
		document.write("La nota mas baja es " + notaMasBaja + " y el sexo del estudiante es " + sexoNotaBaja + "<br>");
		document.write("la cantidad de varones con una nota mayor a 6 es: " +contadorVarones+"<br>");

}
