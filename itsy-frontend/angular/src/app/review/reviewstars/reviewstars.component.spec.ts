import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewstarsComponent } from './reviewstars.component';

fdescribe('ReviewstarsComponent', () => {
  let component: ReviewstarsComponent;
  let fixture: ComponentFixture<ReviewstarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewstarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewstarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
