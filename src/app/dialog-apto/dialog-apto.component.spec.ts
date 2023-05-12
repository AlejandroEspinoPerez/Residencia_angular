import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAptoComponent } from './dialog-apto.component';

describe('DialogAptoComponent', () => {
  let component: DialogAptoComponent;
  let fixture: ComponentFixture<DialogAptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAptoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
