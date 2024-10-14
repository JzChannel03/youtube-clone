import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoListItemDescriptionComponent } from './video-list-item-description.component';

describe('VideoListItemDescriptionComponent', () => {
  let component: VideoListItemDescriptionComponent;
  let fixture: ComponentFixture<VideoListItemDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoListItemDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoListItemDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
