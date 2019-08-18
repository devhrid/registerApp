import { Component } from '@angular/core';
import {RegService} from './service/register.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[RegService]

})
export class AppComponent {
  title = 'registerApp';

display(){
alert("form submitted");
}

}
