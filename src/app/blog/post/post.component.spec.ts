import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PostComponent } from './post.component';

describe('⚡ Post Details', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('🧪 should create component', () => {
    expect(component).toBeTruthy();
  });

  it('🧪 should contain an h1 for titles', () => {
    expect(fixture.nativeElement.querySelector('h1')).toBeTruthy();
  });
});
