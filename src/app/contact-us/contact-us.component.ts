import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeoService } from '@studio/core';

@Component({
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactUsForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    message: ['', [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private readonly seoServicce: SeoService
  ) { }

  ngOnInit(): void {
    this.seoServicce.generateTags({
      title: `Contacte-nos - Splash Ink Studios`,
        description: 'Entre em contacto com o Estúdio Digital para saber mais sobre os nossos Serviços.',
        slug: `contactus`
    });
  }

  get name() {
    return this.contactUsForm.get('name');
  }

  get email() {
    return this.contactUsForm.get('email');
  }

  get message() {
    return this.contactUsForm.get('message');
  }
}
