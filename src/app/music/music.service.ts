import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Music } from './music';



@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private serverApi = 'https://music-api-2022.herokuapp.com/documentation/#/music'

  constructor(private httpClient: HttpClient) { }

  createMusic(music: Music) : Observable<Music> {
    return this.httpClient.post<Music>(this.serverApi, music)
  }


}
