import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteUxComponent } from './website-ux.component';

describe('WebsiteUxComponent', () => {
  let component: WebsiteUxComponent;
  let fixture: ComponentFixture<WebsiteUxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteUxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteUxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
