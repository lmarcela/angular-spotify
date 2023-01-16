import { TrackService } from '@modules/tracks/services/track.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Subscription } from 'rxjs';
import * as dataRaw from '../../../../data/tracks.json'

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css']
})
export class TrackPageComponent implements OnInit, OnDestroy {

  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []
  listObservers$: Array<Subscription> = []

  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    const {data}:any = (dataRaw as any).default
    this.tracksTrending = data;
    this.tracksRandom=data;
    console.log(data)
    this.loadDataAll() //TODO 📌📌
    this.loadDataRandom() //TODO 📌📌
  }

  async loadDataAll(): Promise<any> {
    this.tracksTrending = await this.trackService.getAllTracks$().toPromise()

  }

  loadDataRandom(): void {
    const observer1$ = this.trackService.getAllRandom$()
      .subscribe((response: TrackModel[]) => {
        this.tracksRandom = response
      })
    this.listObservers$=[observer1$]
  }

  ngOnDestroy(): void {

  }

}