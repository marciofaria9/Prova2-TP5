import { Component, OnInit } from '@angular/core';
import { MusicService } from './music.service';
import { Music } from './music';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  musicList : Music[] = []
  newMusic : Music = {} as Music

  constructor(private service: MusicService) {}

  ngOnInit(): void {
  }

  saveData(form: NgForm){
    this.service.createMusic(this.newMusic).subscribe(item => {
      form.resetForm()
      this.newMusic = {} as Music
    
    })
  }
}
