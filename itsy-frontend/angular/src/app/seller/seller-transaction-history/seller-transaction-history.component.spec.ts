import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerTransactionHistoryComponent } from './seller-transaction-history.component';

describe('SellerTransactionHistoryComponent', () => {
  let component: SellerTransactionHistoryComponent;
  let fixture: ComponentFixture<SellerTransactionHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerTransactionHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerTransactionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
