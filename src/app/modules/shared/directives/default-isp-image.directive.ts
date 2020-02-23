import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'img[defaultIspImage]',
  host: {
    '(error)': 'setDefaultImage()'
  }
})
export class DefaultIspImageDirective {
  /********************************************** Constructor ***************************************/
  constructor(
    private el: ElementRef
  ) { }
  /********************************************** Properties ****************************************/
  private defaultISPImagePath = '../../../../assets/images/default_isp.png';
  /********************************************** Methods *******************************************/
  public setDefaultImage() {
    this.el.nativeElement.src = this.defaultISPImagePath;
  }

}
