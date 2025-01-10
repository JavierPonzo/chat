import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="chat"
export default class extends Controller {
  static values = { currentUserId: String};
  connect() {}

  clearInput(){
    console.log("reseting.form");
    thisInputTargetValue = ""
  }
}
