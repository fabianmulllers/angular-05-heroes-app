import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  constructor(
    private activateRouter: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.activateRouter.params
    .subscribe(
      params => (console.log(params.id))
    )
  }

}
