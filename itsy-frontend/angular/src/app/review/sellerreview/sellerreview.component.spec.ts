import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerreviewComponent } from './sellerreview.component';

fdescribe('SellerreivewComponent', () => {
  let component: SellerreviewComponent;
  let fixture: ComponentFixture<SellerreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
