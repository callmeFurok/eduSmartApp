import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-universityresult',
  templateUrl: './universityresult.page.html',
  styleUrls: ['./universityresult.page.scss'],
})
export class UniversityresultPage implements OnInit {

  dataUniversity: any;
  constructor() { }

  ngOnInit() {
    this.dataUniversity = JSON.parse(localStorage.getItem(`datosTest`));

  }

}
