import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteOneComponent } from './site-one.component';

describe('SiteOneComponent', () => {
  let component: SiteOneComponent;
  let fixture: ComponentFixture<SiteOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
