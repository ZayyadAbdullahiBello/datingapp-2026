import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

// ****FOLLOW COME CODE OO BUT CHANGED IT TO HOW IT IS IN THE TUTORIAL***************
// export class App {
//   protected readonly title = signal('client');
// }
// ****FOLLOW COME CODE OO BUT CHANGED IT TO HOW IT IS IN THE TUTORIAL***************

export class App implements OnInit{
  
  private http = inject(HttpClient);
  protected title = 'Dating App';
  protected members = signal<any>([]);

  async ngOnInit() {
    this.members.set(await this.getMembers())
  }

  async getMembers(){
    try{
      return lastValueFrom(this.http.get('https://localhost:5001/api/members')) 
    } catch(error){
      console.log(error)
      throw error
    }
  }

}
