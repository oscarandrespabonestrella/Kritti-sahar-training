import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'testAppB';
  array =  {
    'test1': '1',
    'test2': '2',
    'test3': '3',
  } 
  
  films: Observable<any[]> = new Observable();


  constructor(private webapiService: WebApiService){}

  alertTest(name: string) {
    alert(name);
  }

  ngOnInit(): void {
    this.films = this.webapiService.getFilms();    
  }

  search = "test";

}
