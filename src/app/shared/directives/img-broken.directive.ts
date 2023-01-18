import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() customImg: string = ''
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement
    console.log('🔴 Esta imagen revento -->', this.elHost);
    elNative.src = this.customImg

    if (this.customImg){
      elNative.src = this.customImg
    }else{
      elNative.src = '/assets/images/img-broken.png'
    }

  }

  constructor(private elHost: ElementRef) {


  }

}