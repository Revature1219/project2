import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerMessageComponent } from './seller-message.component';

describe('SellerMessageComponent', () => {
  let component: SellerMessageComponent;
  let fixture: ComponentFixture<SellerMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
