import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  constructor(private pra: Router) { }

  ngOnInit(): void {
  }

  navegar()
  {
    this.pra.navigate(["com2"])
  }

  nave3()
  {
    this.pra.navigate(["com3"])
  }

  nave4()
  {
    this.pra.navigate(["com4"])
  }
  

}
