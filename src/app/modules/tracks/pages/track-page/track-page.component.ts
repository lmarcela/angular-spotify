// import { TrackService } from '@modules/tracks/services/track.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
// import { TrackModel } from '@core/models/tracks.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css']
})
export class TrackPageComponent implements OnInit, OnDestroy {

  tracksTrending: Array<any> = []
  tracksRandom: Array<any> = []
  listObservers$: Array<Subscription> = []

  // constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    this.loadDataAll() //TODO 📌📌
    // this.loadDataRandom() //TODO 📌📌
  }

  async loadDataAll(): Promise<any> {
    // this.tracksTrending = await this.trackService.getAllTracks$().toPromise()

  }

  // loadDataRandom(): void {
  //   this.trackService.getAllRandom$()
  //     .subscribe((response: TrackModel[]) => {
  //       this.tracksRandom = response
  //     })
  // }

  ngOnDestroy(): void {

  }

}