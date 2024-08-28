import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', // HTML TAG
  standalone: true, // StandAlone compoment not depend on any class , component
  imports: [RouterOutlet], // this component is import class to use it 
  templateUrl: './app.component.html', // component's HMTL File
  styleUrl: './app.component.css' // Component's Style File or many files styleUrls take array of files name 
})
// name conventions in angular is app-COMPONENTNAME
export class AppComponent { // this class that is decorated with @component 
  helloWorld : string = "hello,World!" ;
  title = 'wishlist';
}
// for create a component use npm g{generate} c{component} NAMEOFCOMPONENT
