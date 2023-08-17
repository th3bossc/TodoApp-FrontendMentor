import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltodosComponent } from './alltodos.component';

describe('AlltodosComponent', () => {
  let component: AlltodosComponent;
  let fixture: ComponentFixture<AlltodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlltodosComponent]
    });
    fixture = TestBed.createComponent(AlltodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
