import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemreviewComponent } from './itemreview.component';

fdescribe('ItemreviewComponent', () => {
  let component: ItemreviewComponent;
  let fixture: ComponentFixture<ItemreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
