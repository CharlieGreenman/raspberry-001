import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'raspberry-001-global-footer',
  templateUrl: './global-footer.component.html',
  styleUrls: ['./global-footer.component.scss']
})
export class GlobalFooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GlobalFooterComponent],
  exports: [GlobalFooterComponent],
})
export class GlobalFooterModule {}