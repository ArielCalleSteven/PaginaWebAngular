import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  constructor(private pre: Router) { }

  ngOnInit(): void {
  }


  navegar2()
  {
this.pre.navigate([''])
  }
}
