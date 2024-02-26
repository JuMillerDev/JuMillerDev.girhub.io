import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftInformationContainerComponent } from './left-information-container.component';

describe('LeftInformationContainerComponent', () => {
  let component: LeftInformationContainerComponent;
  let fixture: ComponentFixture<LeftInformationContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftInformationContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftInformationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
