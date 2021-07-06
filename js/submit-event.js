// Use iife
(function()
{
  // Get form element
  var form = document.getElementById("login");

  // When user submits form
  addEvent(form, "submit", function(e)
  {
    // Stop form submission
    e.preventDefault();
    // Get all form elements
    var elements = this.elements;
    // Select username entered
    var username = elements.username.value;
    // Create welcome message
    var msg = "Welcome " + username;
    // Write welcome message
    document.getElementById("main").textContent = msg;
  });
}());
