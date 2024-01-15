package com.alienexplorer.app.rest.Model;


import jakarta.persistence.*;

/*Estas son las tareas que va a realizar*/
@Entity/*Etiqueta para decirle que esta clase es una entidad*/
@Table(schema="TasksCRUD")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)/*Indica que este id sea unico y de autoincremento*/
    private long id;
    @Column /*Crea una columan en la base de datos*/
    private String title;
    @Column /*Crea una columan en la base de datos*/
    private String descripcion;

    /*Generamos los setter y getters para nuestras variables*/

    public long getId(){
        return id;
    }
    public void setId(long id){
        this.id = id;
    }
    public String getTitle(){
        return  title;
    }
    public void setTitle(String title){
        this.title = title;
    }
    public String getDescripcion(){
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
}
