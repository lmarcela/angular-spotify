import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePageComponent } from './favorite-page.component';
import { PlayListHeaderComponent } from '../../../../shared/components/play-list-header/play-list-header.component';
import { PlayListBodyComponent } from '../../../../shared/components/play-list-body/play-list-body.component';
import { Component } from '@angular/core';

describe('FavoritePageComponent', () => {
  let component: FavoritePageComponent;
  let fixture: ComponentFixture<FavoritePageComponent>;

  @Component({
    selector: 'app-play-list-header',
    template: '<p>Mock PlayListHeaderComponent</p>'
  })
  class MockPlayListHeaderComponent {}

  @Component({
    selector: 'app-play-list-body',
    template: '<p>Mock PlayListBodyComponent</p>'
  })
  class MockPlayListBodyComponent {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        FavoritePageComponent,
        MockPlayListHeaderComponent,
        MockPlayListBodyComponent
     ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});