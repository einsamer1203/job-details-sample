import { Component, OnInit, VERSION } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "HR Job Details Generator Sample Application";
  jdForm: FormGroup;

  constructor(private readonly fb: FormBuilder) {}
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
}
