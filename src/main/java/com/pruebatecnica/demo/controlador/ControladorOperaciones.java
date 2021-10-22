package com.pruebatecnica.demo.controlador;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.pruebatecnica.demo.modelos.Numeros;

@RestController
public class ControladorOperaciones {

	@RequestMapping(value = "prueba")
	public String prueba() {
		return "prueba";
	}

	@RequestMapping(value="sumar",  method = RequestMethod.POST)
	public double sumar(@RequestBody Numeros numeros) {	
		return (numeros.getNum1()+numeros.getNum2());
	}

	@RequestMapping(value="restar", method = RequestMethod.POST)
	public double restar(@RequestBody Numeros numeros) {
		return (numeros.getNum1()-numeros.getNum2());
	}

	@RequestMapping(value="multiplicar", method = RequestMethod.POST)
	public double multiplicar(@RequestBody Numeros numeros) {
		return (numeros.getNum1()*numeros.getNum2());
	}

	@RequestMapping(value="dividir", method = RequestMethod.POST)
	public double dividir(@RequestBody Numeros numeros) {
		return (numeros.getNum1()/numeros.getNum2());
	}


}

