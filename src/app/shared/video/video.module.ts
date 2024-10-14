import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoListItemComponent } from './video-list-item/video-list-item.component';
import { VideoListItemDescriptionComponent } from './video-list-item-description/video-list-item-description.component';

@NgModule({
  declarations: [
    VideoListComponent,
    VideoListItemComponent,
    VideoListItemDescriptionComponent,
  ],

  imports: [CommonModule],
  exports: [
    VideoListComponent,
    VideoListItemComponent,
    VideoListItemDescriptionComponent,
  ],
})
export class VideoModule {}
