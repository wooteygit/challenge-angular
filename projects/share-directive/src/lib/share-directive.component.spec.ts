import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareDirectiveComponent } from './share-directive.component';

describe('ShareDirectiveComponent', () => {
  let component: ShareDirectiveComponent;
  let fixture: ComponentFixture<ShareDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
