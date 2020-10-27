import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageAddComponent } from './storage-add.component';

describe('StorageAddComponent', () => {
  let component: StorageAddComponent;
  let fixture: ComponentFixture<StorageAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorageAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
