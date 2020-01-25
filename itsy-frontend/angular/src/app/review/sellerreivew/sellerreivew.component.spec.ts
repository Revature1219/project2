import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerreivewComponent } from './sellerreivew.component';

describe('SellerreivewComponent', () => {
  let component: SellerreivewComponent;
  let fixture: ComponentFixture<SellerreivewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerreivewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerreivewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
