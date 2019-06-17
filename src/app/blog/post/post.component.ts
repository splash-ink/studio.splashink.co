import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ph-spl-post',
  templateUrl: './post.component.html',
  styles: []
})
export class PostComponent implements OnInit {

  startWith: string;
  text = `Georgia Dacosta bibendum arcu vitae elementum curabitur vitae. Sed arcu non odio Euismod. Pulvinar pellentesque habitant
  morbi tristique. Vitae turpis massa sed elementum. Purus in massa tempor nec. Nisl purus in mollis nunc sed id semper. Enim sit amet vene\
  natis urna cursus eget nunc scelerisque. Porttitor massa id neque aliquam vestibulum morbi blandit. Enim facilisis gravida neque convalli
  s a cras semper auctor. Quis viverra nibh cras pulvinar. Felis eget nunc lobortis mattis aliquam faucibus purus in. Id neque aliquam vest\
  ibulum morbi blandit cursus. Neque ornare aenean euismod elementum nisi. Sed risus ultricies tristique nulla.
  Pulvinar mattis nunc sed blandit libero. Accumsan lacus vel facilisis volutpat. Nisl condimentum id venenatis a condimentum vitae sapien.
  Lobortis mattis aliquam faucibus purus. Aliquam ut porttitor leo a diam. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse.
  Sed vulputate odio ut enim blandit volutpat. Metus dictum at tempor commodo ullamcorper a lacus. Interdum velit laoreet id donec ultrices
  tincidunt arcu. In hac habitasse platea dictumst. Id diam maecenas ultricies mi eget mauris pharetra et. Venenatis cras sed felis eget ve
  lit aliquet. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Est ante in nibh mauris cursus. Turpis in eu mi bibendum
  neque egestas. Quis enim lobortis scelerisque fermentum. Diam donec adipiscing tristique risus nec feugiat. Tincidunt arcu non sodales
  neque sodales ut etiam sit amet. Facilisi nullam vehicula ipsum a arcu cursus vitae. Aliquet risus feugiat in ante metus.
  `;
  constructor() { }

  ngOnInit() {
    this.startWith = this.text.charAt(0);
    this.text = this.text.substring(1);
  }

}
