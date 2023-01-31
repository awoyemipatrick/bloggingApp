import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private formData!: FormGroup;

  constructor(private router: Router) {}

  openDetails() {
    this.router.navigateByUrl('/list/1337');
    }

    ngOnInit() {
      this.formData = new FormGroup({
        title: new FormControl()
      })
    }

    onSubmit() {
      console.log(this.formData.value);
    }

}
