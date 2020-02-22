import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IspUserContainerComponent } from './isp-user-container.component';

describe('IspUserContainerComponent', () => {
  let component: IspUserContainerComponent;
  let fixture: ComponentFixture<IspUserContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IspUserContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IspUserContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
