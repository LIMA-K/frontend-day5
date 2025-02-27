import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public api:ApiService){}

  todo:any=[]


  ngOnInit(){

    this.api.getTodo().subscribe((data:any)=>{

      this.todo=data.todos


    })

  }


}


