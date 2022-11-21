import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDictComponent } from './my-dict.component';

describe('MyDictComponent', () => {
  let component: MyDictComponent;
  let fixture: ComponentFixture<MyDictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDictComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
