import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailComponent } from './item-detail.component';

fdescribe('ItemDetailComponent', () => {
  let component: ItemDetailComponent;
  let fixture: ComponentFixture<ItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should have null in item without a URI', () => {
    expect(component.item).toBeFalsy();
  });

  it ('should return void in getItem', () => {
    expect(component.getItem).toBeFalsy();
  });
});
