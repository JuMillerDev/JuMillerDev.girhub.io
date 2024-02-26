import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightInformationContainerComponent } from './right-information-container.component';

describe('RightInformationContainerComponent', () => {
  let component: RightInformationContainerComponent;
  let fixture: ComponentFixture<RightInformationContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightInformationContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RightInformationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
