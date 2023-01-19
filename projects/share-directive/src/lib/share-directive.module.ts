import { NgModule } from '@angular/core';
import { ShareDirectiveComponent } from './share-directive.component';
import { TxtNumberDirective } from './txt-number/txt-number.directive';



@NgModule({
  declarations: [
    ShareDirectiveComponent,
    TxtNumberDirective,
  ],
  imports: [
  ],
  exports: [
    ShareDirectiveComponent,
    TxtNumberDirective
  ]
})
export class ShareDirectiveModule { }
