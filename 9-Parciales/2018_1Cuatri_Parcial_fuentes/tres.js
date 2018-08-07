function mostrar()
{

	var precio;
	precio=parseInt(precio);
	var descuento;
	descuento=parseInt(descuento);
	var resultado;
	resultado=parseInt(resultado);

	precio=prompt("Ingrese el precio");
	descuento=prompt("ingrese el descuento");

	resultado=precio -( precio / 100 * descuento);

	document.getElementById('elPrecioFinal').value=resultado;




}
