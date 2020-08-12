import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  newTodo= {Name : "", Priority : "Low" , Status : "New"}
  headers = ["Name", "Priority", "Status"];
  isValid = true;
  sortValue = '';
  sortType = '';
  
  rows=[
    
    {Name : "Reading", Priority : "Medium" , Status : "In-Progress"},
    {Name : "Watching", Priority : "Low" , Status : "Completed"},
    {Name : "Excercise", Priority : "High", Status: "New"}
  ]


  constructor() { }

  ngOnInit(): void {

  }

  deleteTodo(index)
  {
    this.rows.splice(index,1);
  }

  addTodo()
  {
    if(this.newTodo.Name != '') {
      this.isValid = true;
      this.rows.push(this.newTodo);
      this.newTodo = {Name : "", Priority : "Low" , Status : "New"};
      this.sortValue = '';
      this.sortType = '';
    } else {
      this.isValid = false;
      alert("Enter ToDo Name");
    }
    
  }

  sortToDoList(type) {
    let current_this = this;
    this.rows.sort(function(first) {
      if(first[type] === current_this.sortValue) {
        return -1;
      } else {
        return 1;
      }
     });
  }

}
