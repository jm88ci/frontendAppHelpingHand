import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConfigComponent } from './page-config.component';

describe('PageConfigComponent', () => {
  let component: PageConfigComponent;
  let fixture: ComponentFixture<PageConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageConfigComponent]
    });
    fixture = TestBed.createComponent(PageConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
