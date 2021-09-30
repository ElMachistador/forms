import { Component } from '@angular/core';
import { Auth, authState, signOut, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { GoogleAuthProvider } from '@firebase/auth';
import { collection, addDoc } from '@angular/fire/firestore'

@Component({
  selector: 'app-login-google',
  templateUrl: './login-google.component.html',
  styleUrls: ['./login-google.component.scss']
})
export class LoginGoogleComponent {
  user$ = authState(this.auth)

  constructor(
    private auth: Auth,
    private fireStore: Firestore
  ) { }

  signInWithGoogle() {
    signInWithPopup(this.auth, new GoogleAuthProvider())
  }

  signOut(){
    signOut(this.auth)
  }

}
