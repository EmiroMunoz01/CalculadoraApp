package com.calculadora.calculadora.Modelo;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter

public class Concreto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idConcreto;
    
    private String nombreObra;
    private double ancho;
    private double largo;
    private double grosor;
    private double calculoConcreto;
    private LocalDateTime fechaCreacion;

}
