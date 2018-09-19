import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/index';
import {RestService} from '../../shared/rest/rest.service';
import {PhotosResponse} from '../../model/photo';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {

  readonly URL = {
    getImages: '/api/flickr/dogs'
  };

  constructor(private restService: RestService) {
  }

  getImages(): Observable<PhotosResponse> {
    return this.restService.get(this.URL.getImages);
  }
}
