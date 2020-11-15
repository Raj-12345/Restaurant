import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycartheaderComponent } from './mycartheader.component';

describe('MycartheaderComponent', () => {
  let component: MycartheaderComponent;
  let fixture: ComponentFixture<MycartheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycartheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MycartheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
