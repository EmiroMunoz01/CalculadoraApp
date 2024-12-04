package com.calculadora.calculadora.Servicio;

import java.util.List;

import com.calculadora.calculadora.Modelo.Concreto;



public interface IConcreto {

    public List<Concreto> listarConcretos();

    public Concreto buscarConcretoId(Integer idCalculoConcreto);

    public Concreto guardarConcreto(Concreto concreto);

    public void eliminarConcretoPorId(Integer idProducto);

    public void calcularConcreto(Double calculoConcreto);
}
