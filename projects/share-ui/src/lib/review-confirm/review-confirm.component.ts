import { Component, Input, OnInit } from '@angular/core';
import { TaxFiling } from '@model-interface';

@Component({
  selector: 'share-ui-review-confirm',
  templateUrl: './review-confirm.component.html',
  styleUrls: ['./review-confirm.component.css']
})
export class ReviewConfirmComponent implements OnInit {

  @Input() taxFiling: TaxFiling = {
    filingType: '0',
    filingTypeName: '',
    month: '01',
    year: 0,
    saleAmount: 0,
    taxAmount: 0,
    surcharge: 0,
    penalty: 0,
    totalAmount: 0,
    errMsg: ''
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
