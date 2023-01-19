import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[directiveTxtNumber]'
})
export class TxtNumberDirective {

  constructor(private el: ElementRef) { }

  @Input() public OnlyNumber: boolean = false;
  @Input() public OnlyTelNumber: boolean = false;

  @HostListener('keydown', ['$event']) onKeyDown(event: any) {
    let e = <KeyboardEvent> event;
    // console.log(e)
    if (this.OnlyNumber || this.OnlyTelNumber) {
      if ([46, 8, 9, 27, 13, 110, 190, 188].indexOf(e.keyCode) !== -1 ||
        // Allow: Ctrl+A
        (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+C
        (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+V
        (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+X
        (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
          // let it happen, don't do anything
          return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
      }
  }

  @HostListener('input', ['$event']) onInputChange() {
    // if (this.OnlyNumber || this.OnlyTelNumber) {
    //   this.el.nativeElement.value = this.el.nativeElement.value.replace(/[^0-9]/,'');
    // }

    if (this.OnlyNumber && !this.OnlyTelNumber) {
      this.el.nativeElement.value = this.el.nativeElement.value.trim().indexOf('0') == 0 ? this.el.nativeElement.value.trim().substring(1) : this.el.nativeElement.value;
    }
  }

}
