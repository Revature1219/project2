import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDisplayComponent } from './shop-display.component';

fdescribe('ShopDisplayComponent', () => {
  let component: ShopDisplayComponent;
  let fixture: ComponentFixture<ShopDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
