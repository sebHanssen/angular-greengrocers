import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  http = inject(HttpClient)
  private apiUrl = `https://boolean-api-server.fly.dev/groceries`;

  get storeItems(): Promise<Item[]> {
    // @ts-ignore
    return firstValueFrom(this.http.get(this.apiUrl));
  }
}
