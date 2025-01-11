import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../task';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id!: number;
  task: Task = { id: 0, title: '', description: '' }; 
  form!: FormGroup;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['task'];

    this.taskService.find(this.id).subscribe((data: Task) => {
      this.task = data;

      this.form.patchValue({
        title: this.task.title,
        description: this.task.description,
      });
    });

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    });
  }

  get f() {
    return this.form.controls;
  }

  submit(): void {
    if (this.form.valid) {
      const updatedTask: Task = { ...this.task, ...this.form.value };

      this.taskService.update(this.id, updatedTask).subscribe(() => {
        console.log('Task updated successfully!');
        this.router.navigateByUrl('task/index'); 
      });
    }
  }
}
