import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Le titulo for the App';
  show:boolean = true;
  animales:Array<any> = [
    {tipo:'Perro', nombre:'Milo', edad:3},
    {tipo:'Gato', nombre:'Merlina', edad:2},
    {tipo:'Pato', nombre:'Eduardo', edad:10}
  ]
}
