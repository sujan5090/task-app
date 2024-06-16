import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { IPhoto } from '../models/photo.model';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private httpClient: HttpClient) {}

  public getAllPhotos(): Observable<Array<IPhoto>> {
    const url: string = 'https://jsonplaceholder.typicode.com/photos';
    return this.httpClient.get<Array<IPhoto>>(url).pipe(
      map((photos) => photos),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }
}
