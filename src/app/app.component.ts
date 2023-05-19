import { Component } from '@angular/core';
//import * as utilsBr from 'js-brasil';
import { utilsBr } from 'js-brasil';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-v15-libs-brasil';

  constructor() {
    console.log(utilsBr.ESTADOS, 'js-brasil - utilsBr.ESTADOS');
    console.log(utilsBr.MASKS.cpf, 'js-brasil - utilsBr.MASKS.cpf');
  }
}
