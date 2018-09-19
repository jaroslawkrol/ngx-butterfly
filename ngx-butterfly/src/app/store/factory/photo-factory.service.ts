import { Injectable } from '@angular/core';
import {Photo, PhotosResponse} from '../../model/photo';
import {ButterflyUnit} from '../../../../projects/butterfly-lib/src/lib/components/butterfly-unit/butterfly-unit.component';

@Injectable({
  providedIn: 'root'
})
export class PhotoFactoryService {

  constructor() { }

  convert(photosResponse: PhotosResponse): ButterflyUnit[] {
    if (!!photosResponse.photos.photo) {
      return photosResponse.photos.photo.map((photo: Photo) => {
        const result = {
          id: photo.id,
          src: `http://localhost:4200/api/img/${photo.farm}/${photo.server}/${photo.id}/${photo.secret}`,
          alt: photo.title,
          title: photo.title
        };
        return result;
      });
     }
    return [];
  }
}
