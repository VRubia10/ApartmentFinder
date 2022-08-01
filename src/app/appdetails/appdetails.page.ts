import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-appdetails',
  templateUrl: './appdetails.page.html',
  styleUrls: ['./appdetails.page.scss'],
})
export class AppdetailsPage implements OnInit {
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

  ngOnInit() {
  }

}
