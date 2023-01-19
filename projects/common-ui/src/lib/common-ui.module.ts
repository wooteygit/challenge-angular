import { NgModule } from '@angular/core';
import { CommonUiComponent } from './common-ui.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    CommonUiComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonUiComponent,
    NavBarComponent
  ]
})
export class CommonUiModule { }
