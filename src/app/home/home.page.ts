import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  details;
  constructor(private firestore: AngularFirestore) {
    this.firestore
    .collection('details')
    .valueChanges()
    .subscribe(details => {
      this.details = details;
      console.log(details);
    });
  }

}
