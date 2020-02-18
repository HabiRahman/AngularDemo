import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  // template: `<p>Inlinetemplate</p>`,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  constructor() { }

  public myId = "InputId"
  isDisabled = false;
 public inputadded = "Initial Text"
  te = "textError"
  hasError = true;
  displayDiv = true;
  showName=true;
  color="blue";
  @Output() public childEvent = new EventEmitter();
  @Input() public parentInput;


  ngOnInit() {
  }

  EventEmitCheck(){
    this.childEvent.emit("Here I Emitted");
  }

  buttonClick(){
    console.log("Test input added");
    this.inputadded = "Test input added";
  }

  title = "Test component Title"
  siteURL = window.location.href

}
