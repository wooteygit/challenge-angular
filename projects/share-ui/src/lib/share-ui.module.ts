import { NgModule } from '@angular/core';
import { ShareUiComponent } from './share-ui.component';
import { InputDetailComponent } from './input-detail/input-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ShareDirectiveModule } from '@share-directive';
import { ReviewConfirmComponent } from './review-confirm/review-confirm.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ShareUiComponent,
    InputDetailComponent,
    ReviewConfirmComponent,
     
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ShareDirectiveModule,
    NgbModule
  ],
  exports: [
    ShareUiComponent,
    InputDetailComponent,
    ReviewConfirmComponent,
  ]
})
export class ShareUiModule { }
