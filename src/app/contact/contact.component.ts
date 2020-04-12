import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild('cForm') cForm;
  formData: any = {};
  formSubmitted = false;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    $(document).ready( () => {
      $('#navbar').removeClass('home');
    });
  }

  formSubmit() {
    this.formSubmitted = true;
    console.log(this.formData);
    this.http.post('server/send.mail.php', this.formData).subscribe((data: any) => {
      console.log(data);
      if (data.status) {
        alert('Message has been sent');
      } else {
        alert(data.message);
      }
      this.formSubmitted = false;
      this.cForm.resetForm();
    }, error => {
      this.formSubmitted = false;
      console.log(error);
      alert(error.message);
    })
  }

}
