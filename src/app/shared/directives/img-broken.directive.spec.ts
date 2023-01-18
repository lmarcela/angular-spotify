import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ImgBrokenDirective } from './img-broken.directive';

@Component({
  template: '<img class="testing-directive" appImgBroken [src]="srcMock" >'
})
class TestComponent {
  public srcMock:any = null
}

//TODO La prueba de ImgBroken es la siguiente

describe('ImgBrokenDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ImgBrokenDirective
      ]
    })
    fixture=TestBed.createComponent(TestComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })
  //TODO Deberia instanciar correctamente
  it('should create an instance', () => {
    const mockElement = new ElementRef('')
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });

  it('TestComponent deberia instanciarse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('Directiva deberia cambiar imagen por una por defecto', (done:DoneFn) => {
    const beforeImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement
    const beforeImgSrc = beforeImgElement.src
    component.srcMock = undefined

    setTimeout(() => {
      const afterImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement
      const afterImgSrc = afterImgElement.src
      expect(afterImgSrc).toContain('assets/images/img-broken.png')
      done()
    },3000);
})

});