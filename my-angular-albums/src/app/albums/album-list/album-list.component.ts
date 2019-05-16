import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Album } from "../album.model";
import { AlbumService} from "../shared/album.service";

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albumsArray: Observable<Album[]>;
  lastAlbumClicked: string;
  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {

    this.getAlbums();

    console.log(this.albumsArray);
}

parentFunctionHandler(album) {
  // alert('Album ' + album.albumName + ' was sent from the album card component');
  this.lastAlbumClicked = album.albumName;
}

getAlbums() {
  /*this.albumService.getAlbums()
       .subscribe(
           albums => this.albumsArray = albums,
           error => console.log("Error: ", error));*/

         this.albumsArray = this.albumService.getAlbums();
       }



}
