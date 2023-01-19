import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonUiModule } from '@common-ui';
import { ShareUiModule } from '@share-ui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShareDirectiveModule } from '@share-directive';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NgbModule,
    CommonUiModule,
    ShareUiModule,
    FormsModule,
    ShareDirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
