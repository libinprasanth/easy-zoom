import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyZoomComponent } from './easy-zoom.component';

describe('EasyZoomComponent', () => {
  let component: EasyZoomComponent;
  let fixture: ComponentFixture<EasyZoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyZoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
