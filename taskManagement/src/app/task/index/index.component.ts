import { Component, OnInit } from '@angular/core';

import { TaskService } from '../task.service';

import { Task } from '../task';

      

@Component({

  selector: 'app-index',

  templateUrl: './index.component.html',

  styleUrls: ['./index.component.css']

})

export class IndexComponent implements OnInit {

      

  tasks: Task[] = [];

    

  constructor(public taskService: TaskService) { }

    


  ngOnInit(): void {

    this.taskService.getAll().subscribe((data: Task[])=>{

      this.tasks = data;

      console.log(this.tasks);

    })  

  }

    

  

  deleteTask(id:number){

    this.taskService.delete(id).subscribe(res => {

         this.tasks = this.tasks.filter(item => item.id !== id);

         console.log('task deleted successfully!');

    })

  }

    

}