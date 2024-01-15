package com.alienexplorer.app.rest.Controller;

import com.alienexplorer.app.rest.Model.Task;
import com.alienexplorer.app.rest.Repository.ToDoRepository;
import org.antlr.v4.runtime.misc.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class ToDoController {
    @Autowired
    private ToDoRepository toDoRepository;
    @GetMapping(value = "/")/*Lee datos del servidor, se le asigna un valor, */
    public String holaMundo(){
        return "HOLA MUNDO!!";
    }

    @GetMapping(value ="/tasks")
    public List<Task> getTasks(){
        return toDoRepository.findAll();
    }
    @GetMapping(value = "/tasks/{id}")
    public Task getTasksById(@PathVariable long id){
        return toDoRepository.findById(id).get();
    }
    @PostMapping(value = "/savetask")
    public String saveTask(@RequestBody Task task){
        toDoRepository.save(task);
        return "saved tasked";
    }

    @PutMapping(value = "/update/{id}")
    public String updateTask(@PathVariable long id,@RequestBody Task task){
        Task updatedTask = toDoRepository.findById(id).get();
        updatedTask.setTitle(task.getTitle());
        updatedTask.setDescripcion(task.getDescripcion());
        toDoRepository.save(updatedTask);
        return "updated task";
    }
    @DeleteMapping(value = "/delete/{id}")
    public String deleteTask(@PathVariable long id){
        toDoRepository.deleteById(id);
        return "Deleted task";
    }
}
