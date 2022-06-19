import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.css"],
})
export class DropdownComponent implements OnInit {
  @Input() dropdownList: Array<string> = [];
  @Output() selectedCountry: EventEmitter<any> = new EventEmitter<any>();
  dropdownItemsVisibilityToggle: boolean = false;
  public selectedCountryLocal: null | string = null;

  constructor() {}

  ngOnInit(): void {}
  toggleDropdownItemsVisibilityToggle() {
    this.dropdownItemsVisibilityToggle = !this.dropdownItemsVisibilityToggle;
  }
  selectCountry(countryName: string | null): void {
    this.selectedCountryLocal = countryName;
    this.selectedCountry.next(countryName);
    this.toggleDropdownItemsVisibilityToggle();
  }
}
