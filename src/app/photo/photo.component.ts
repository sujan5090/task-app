import { Component, Input } from '@angular/core';
import { IPhoto } from '../models/photo.model';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent {
  @Input() photo: IPhoto | undefined;
}
