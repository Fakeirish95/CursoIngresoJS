function mostrar()
{

	var planeta;
	planeta=prompt("Ingrese un planeta");

	switch(planeta)
	{
		case "tierra":
		alert("Acá vivimos");
		break;
		case "mercurio":
		case "venus":
		alert ("Aca hace mas calor");
		break;
		case "marte":
		case "saturno":
		case "jupiter":
		case "urano":
		case "neptuno":
		case "pluton":
		alert("aca hace mas frio");
		break;
		default:
		alert("Este no es un planeta valido");
		break;

	}
}
