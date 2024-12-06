package com.calculadora.calculadora.DTO;

import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class ConcretoDTO {

    @NotEmpty(message = "El nombre de la obra es requerido")
    private String nombreObra;

    @NotEmpty(message = "Esta medida es necesaria")
    private Double largo;

    @NotEmpty(message = "Esta medida es necesaria")
    private Double ancho;

    @NotEmpty(message = "Esta medida es necesaria")
    private Double grosor;

}
