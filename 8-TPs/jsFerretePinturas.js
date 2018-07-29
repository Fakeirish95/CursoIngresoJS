/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
gradosF=document.getElementById('Temperatura').value;
	var gradosF;
	var gradosC;
	gradosF=parseInt(gradosF);
	gradosC=parseInt(gradosC);
	gradosC= ((gradosF-32)/1.8);
	alert (gradosC);
}

function CentigradosFahrenheit () 
{
	gradosC=document.getElementById('Temperatura').value;
	var gradosF;
	var gradosC;
	gradosF=parseInt(gradosF);
	gradosC=parseInt(gradosC);
	gradosF=((9/5*gradosC)+32);
	alert (gradosF);
}
