import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingLottieComponent } from './loading-lottie.component';

describe('LoadingLottieComponent', () => {
  let component: LoadingLottieComponent;
  let fixture: ComponentFixture<LoadingLottieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingLottieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingLottieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
