import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { environment } from '@environments/environment';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private client = contentful.createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.accessToken
  });

  constructor() { }

  getContent(entryId: string) {
    const promise = this.client.getEntry(entryId);

    return from(promise).pipe(
      map((entry) => entry.fields)
    );
  }
}
