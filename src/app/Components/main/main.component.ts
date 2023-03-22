import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  tasks:any

  constructor( private router:Router) {
    // if user doesn't have token redirect him to signup
    if(!localStorage.getItem('token')) this.router.navigate(['/signup']);
    
  }
  ngOnInit(): void {
  }

  getTasks(tasks:any) {
    this.tasks = tasks
  }
}
