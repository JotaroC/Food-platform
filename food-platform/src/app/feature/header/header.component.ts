import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() pageName = new EventEmitter<string>();
  collapsed = true;

  onClickPage(page: string) {
    this.pageName.emit(page);
  }
}
