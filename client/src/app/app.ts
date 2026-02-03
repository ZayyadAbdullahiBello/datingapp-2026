import { Component, inject } from '@angular/core';
import { Nav } from "../layout/nav/nav";
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [Nav, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

// ****FOLLOW COME CODE OO BUT CHANGED IT TO HOW IT IS IN THE TUTORIAL***************
// export class App {
//   protected readonly title = signal('client');
// }
// ****FOLLOW COME CODE OO BUT CHANGED IT TO HOW IT IS IN THE TUTORIAL***************

export class App{
  
  protected router = inject(Router);


}
