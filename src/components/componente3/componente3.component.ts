import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {

  constructor(private pro:Router) { }

  ngOnInit(): void {
  }


  navegar3()
  {
this.pro.navigate([])
  }
}
