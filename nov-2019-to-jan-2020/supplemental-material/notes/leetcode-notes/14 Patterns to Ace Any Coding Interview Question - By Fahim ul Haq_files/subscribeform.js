function newsletterSubmitted(event) {
  event.preventDefault();

  console.log("rawr", event);

  this._form = this.querySelector("form");
  this._action = this._form.getAttribute("action");
  this._input = this._form.querySelector("input.email").value;

  document.MC_callback = function(response) {

      if(response.result == "success") {
          // show success meassage
          console.log("sucessfully submitted");
      } else {
          // show error message
          console.error("Did not submit successfully", response);
      }
  }

  // generate script
  this._script = document.createElement("script");
  this._script.type = "text/javascript";
  this._script.src = this._action + "&c=document.MC_callback&EMAIL=" + this._input;

  // append script to head
  document.getElementsByTagName("head")[0].appendChild(this._script);
}

var newsletter = document.querySelector("#mc-embedded-subscribe-form")
newsletter.addEventListener("submit", newsletterSubmitted);