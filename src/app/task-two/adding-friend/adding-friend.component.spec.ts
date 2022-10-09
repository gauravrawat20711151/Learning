import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingFriendComponent } from './adding-friend.component';

describe('AddingFriendComponent', () => {
  let component: AddingFriendComponent;
  let fixture: ComponentFixture<AddingFriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingFriendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddingFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
