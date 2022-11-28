import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  constructor(private pra: Router) { }

  nombre_variable:number=0;
  suma:number=0;
  suma3:number=0;
  multi:number=1;
  vector: string []=[];

  ngOnInit(): void {
    this.total();
    
  }

  total() 
  {
    let num1:number=2;
    let num2:number=2;
    this.suma=num1+num2;
    console.log("Numero primal: ",this.suma)

    
    this.suma3=this.suma+5;
    console.log("Suma +5: ",this.suma3);
    this.total2(this.suma3);
  
  }

  total2(sum:number)
  {
    console.log("Multiplicacion: ",sum*2)
    this.multi=sum*2;
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
