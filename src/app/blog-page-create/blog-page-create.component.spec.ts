import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPageCreateComponent } from './blog-page-create.component';

describe('BlogPageCreateComponent', () => {
  let component: BlogPageCreateComponent;
  let fixture: ComponentFixture<BlogPageCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPageCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPageCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
