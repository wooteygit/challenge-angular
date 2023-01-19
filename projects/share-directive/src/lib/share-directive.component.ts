import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directive-share-directive',
  template: `
    <p>
      share-directive works!
    </p>
  `,
  styles: [
  ]
})
export class ShareDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
