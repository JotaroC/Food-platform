import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  naviRouter: string = 'recipes';

  onNavigation(page: string) {
    this.naviRouter = page;
  }
}
