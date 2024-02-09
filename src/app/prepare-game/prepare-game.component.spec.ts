import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepareGameComponent } from './prepare-game.component';

describe('PrepareGameComponent', () => {
  let component: PrepareGameComponent;
  let fixture: ComponentFixture<PrepareGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrepareGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrepareGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
