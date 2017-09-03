import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoHeaderComponent } from './repo-header.component';

describe('RepoHeaderComponent', () => {
  let component: RepoHeaderComponent;
  let fixture: ComponentFixture<RepoHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
