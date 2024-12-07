package com.calculadora.calculadora.Servicio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.calculadora.calculadora.DTO.ConcretoDTO;
import com.calculadora.calculadora.Modelo.Concreto;
import com.calculadora.calculadora.Repositorio.ConcretoRepositorio;


@Service
public class ConcretoServicio implements IConcreto {

    @Autowired
    private ConcretoRepositorio concretoRepositorio;

    @Override
    public List<Concreto> listarConcretos() {
        return (List<Concreto>) this.concretoRepositorio.findAll();
    }

    @Override
    public Concreto buscarConcretoId(Integer idCalculoConcreto) {
        Concreto concreto = this.concretoRepositorio.findById(idCalculoConcreto).orElse(null);
        return concreto;
    }

    @Override
    public Concreto guardarConcreto(Concreto concreto) {
        return this.concretoRepositorio.save(concreto);
    }

    @Override
    public void eliminarConcretoPorId(Integer idProducto) {
       this.concretoRepositorio.deleteById(idProducto);
    }

    @Override
    public void calcularConcreto(Double calculoConcreto) {

        


    }

}
