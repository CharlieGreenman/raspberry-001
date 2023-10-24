import { Component } from '@angular/core';

@Component({
  selector: 'raspberry-001-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'raspberry-001';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
