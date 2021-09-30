import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { collection, collectionData, addDoc, Firestore, deleteDoc, doc } from '@angular/fire/firestore'

interface Movie {
  title: string;
  poster: string;
  description: string;
  boxOffice: number;
  release: Date;
  id: string
}

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  formGroup = new FormGroup({
    title: new FormControl(),
    poster: new FormControl(),
    description: new FormControl(),
    boxOffice: new FormControl(),
    release: new FormControl()
  })
  movies?: Movie[] = []
  movies$?: Observable<any>
  constructor(
    private firestore: Firestore
  ) {
    const ref = collection(this.firestore, 'movies')
    this.movies$ = collectionData(ref, {idField: "id"})
   }

  ngOnInit(): void {
  }

  submit() {
    if (this.formGroup.valid) {
      this.movies?.push(this.formGroup.value)
      this.addMovie()
    }
  }

   async addMovie(){
    const ref = collection(this.firestore,'movies')
     await addDoc(ref, this.formGroup.value)
     this.formGroup.reset()
  }

  remove(id: string){
    const ref = doc(this.firestore, 'movies', id)
    deleteDoc(ref)
  }
}
