import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators, NgForm } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  FormData!: UntypedFormGroup;

  constructor(private builder: UntypedFormBuilder, private contact: ContactService) { }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      Fullname: new UntypedFormControl('', [Validators.required]),
      Email: new UntypedFormControl('', [Validators.email, Validators.required]),
      Comment: new UntypedFormControl('', [Validators.required])

    })

  }

  onSubmit(FormData: any) {
    console.log(FormData)
    this.contact.PostMessage(FormData)
      .subscribe(response => {
        location.href = 'https://mailthis.to/confirm'
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }

}
