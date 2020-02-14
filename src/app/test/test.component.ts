import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  // template: `<p>Inlinetemplate</p>`,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public myId = "InputId"
  isDisabled = false;
 public inputadded = "Initial Text"
  te = "textError"
  hasError = true;
  displayDiv = true;
  showName=true;
  color="blue";
  constructor() { }

  ngOnInit() {
  }

  buttonClick(){
    console.log("Test input added");
    this.inputadded = "Test input added";
  }

  title = "Test component Title"
  siteURL = window.location.href

}
