import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPageEditComponent } from './item-page-edit.component';

describe('ItemPageEditComponent', () => {
  let component: ItemPageEditComponent;
  let fixture: ComponentFixture<ItemPageEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPageEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
