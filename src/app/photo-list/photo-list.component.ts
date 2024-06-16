import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { IPhoto } from '../models/photo.model';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit {
  public photos: Array<IPhoto> = [];
  public isLoading: boolean = false;

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.photoService.getAllPhotos().subscribe((photosList) => {
      this.photos = photosList;
      this.isLoading = false;
    });
  }
}
