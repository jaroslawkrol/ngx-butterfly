import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/index';
import {Actions as ImagesActions, ActionTypes, GetImagesInitAction, GetImagesSuccessAction} from './images.action';
import {map, switchMap} from 'rxjs/internal/operators';
import {ImagesService} from './images.service';
import {PhotosResponse} from '../../model/photo';
import {PhotoFactoryService} from '../factory/photo-factory.service';

@Injectable()
export class ImagesEffects {

  @Effect()
  getImages$: Observable<ImagesActions> = this.actions$
    .ofType(ActionTypes.GET_IMAGES__LOAD)
    .pipe(
      switchMap((action: GetImagesInitAction) => {
        return this.imagesService.getImages();
      }),
      map((response: PhotosResponse) => {
        const payload = this.photoFactory.convert(response);
        return new GetImagesSuccessAction(payload);
      })
    );

  constructor(private actions$: Actions<ImagesActions>,
              private imagesService: ImagesService,
              private photoFactory: PhotoFactoryService) {

  }

}
