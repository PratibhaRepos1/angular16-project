import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular16-project';
  messageMe = "Hello, How are you!"

  update() {
    this.messageMe = this.messageMe + ' Are you okay?';
  }
}
