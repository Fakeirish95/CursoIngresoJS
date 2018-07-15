function mostrar()
{

var mesDelAño = document.getElementById('mes').value;
switch (mesDelAño)
{
	case "Febrero":
	alert ("Este mes no tiene más de 29 días.");
	break;
	default:
	alert ("este mes tiene 30 dias o mas");
	break;
	

}
	
}