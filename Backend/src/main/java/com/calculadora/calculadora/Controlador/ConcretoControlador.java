package com.calculadora.calculadora.Controlador;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.calculadora.calculadora.DTO.ConcretoDTO;
import com.calculadora.calculadora.Modelo.Concreto;
import com.calculadora.calculadora.Servicio.ConcretoServicio;
import com.calculadora.calculadora.excepcion.RecursoNoEncontradoExcepcion;

@RequestMapping("api-concreto")
@RestController
@CrossOrigin(value = "http://localhost:4200")
public class ConcretoControlador {

    @Autowired
    private ConcretoServicio concretoServicio;

    // aqui estamos listando todo el concreto
    @GetMapping("/concreto")
    public List<Concreto> listarConcretos() {
        List<Concreto> concretos = this.concretoServicio.listarConcretos();
        return concretos;
    }

    // aqui estamos creando un concreto
    @PostMapping("/concreto")
    public Concreto agregarConcreto(@RequestBody Concreto concreto) {
        concreto.setFechaCreacion(LocalDateTime.now());
        return this.concretoServicio.guardarConcreto(concreto);
    }

    // si se encuentra el producto se tendra la respuesta correcta

    @GetMapping("/concreto/{id}")
    public ResponseEntity<Concreto> obtenerConcretoPorId(@PathVariable int id) {

        Concreto concreto = this.concretoServicio.buscarConcretoId(id);

        if (concreto != null) {
            return ResponseEntity.ok(concreto);
        } else {
            throw new RecursoNoEncontradoExcepcion("No se encontro el id " + id);
        }

    }

    @PutMapping("/concreto/{id}")
    public ResponseEntity<Concreto> actualizarConcreto(
            @PathVariable int id, @RequestBody Concreto concretoRecibido) {
        Concreto concreto = this.concretoServicio.buscarConcretoId(id);
        if (concreto == null) {
            throw new RecursoNoEncontradoExcepcion("No se encontro el id " + id);
        }

        concreto.setNombreObra(concretoRecibido.getNombreObra());
        concreto.setAncho(concretoRecibido.getAncho());
        concreto.setLargo(concretoRecibido.getLargo());
        concreto.setGrosor(concretoRecibido.getGrosor());

        double a = concretoRecibido.getAncho();
        double b = concretoRecibido.getLargo();
        double c = concretoRecibido.getGrosor();
        double d = a * b * c;

        concreto.setCalculoConcreto(d);
        this.concretoServicio.guardarConcreto(concreto);

        return ResponseEntity.ok(concreto);

    }

    @DeleteMapping("/concreto/{id}")
    public ResponseEntity<Map<String, Boolean>> eliminarConcreto(@PathVariable int id) {
        Concreto concreto = this.concretoServicio.buscarConcretoId(id);
        if (concreto == null) {
            throw new RecursoNoEncontradoExcepcion("No se encontro el id " + id);
        }

        this.concretoServicio.eliminarConcretoPorId(concreto.getIdConcreto());
        Map<String, Boolean> respuesta = new HashMap<>();
        respuesta.put("Elimimado",
                Boolean.TRUE);
        return ResponseEntity.ok(respuesta);
    }

}
