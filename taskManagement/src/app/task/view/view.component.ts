import { Component, OnInit } from '@angular/core';

import { TaskService } from '../task.service';

import { ActivatedRoute, Router } from '@angular/router';

import { Task } from '../task';

    

@Component({

  selector: 'app-view',

  templateUrl: './view.component.html',

  styleUrls: ['./view.component.css']

})

export class ViewComponent implements OnInit {

     

  id!: number;

  task!: Task;

    

  constructor(

    public taskService: TaskService,

    private route: ActivatedRoute,

    private router: Router

   ) { }

    


  ngOnInit(): void {

    this.id = this.route.snapshot.params['task'];

        

    this.taskService.find(this.id).subscribe((data: Task)=>{

      this.task = data;

    });

  }

    

}