import { Component, OnInit } from '@angular/core';
import { TaxFiling } from '@model-interface';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {

  taxData: TaxFiling = {
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

  step = 1;
  closeResult = '';

  constructor(private modalService: NgbModal) {
    const currentYear = new Date().getFullYear();
    this.taxData.year = currentYear;
    this.taxData.month = (new Date().getMonth() + 1).toString().padStart(2, "0");
   }

  ngOnInit(): void {
  }

  gotoConfirmReview(){
    if(!this.taxData.saleAmount){
      if(this.taxData.filingType == '0') {
        this.taxData.errMsg = 'Invalid Tax';
      }

      if(this.taxData.filingType == '1'){
        this.taxData.errMsg = 'Invalid Tax';
      } 
      return;
    }

    if(!this.taxData.taxAmount){
      this.taxData.errMsg = 'Invalid Tax';
    }

    if(this.taxData.taxAmount < ((this.taxData.saleAmount * 0.07) - 20) || this.taxData.taxAmount > ((this.taxData.saleAmount * 0.07) + 20)){
      this.taxData.errMsg = 'Invalid Tax';
      return;
    }

    this.taxData.errMsg = '';
    this.step = 2;
  }

  open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				// this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				// this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}
}
