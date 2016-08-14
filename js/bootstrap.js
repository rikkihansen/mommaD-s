$(document).ready(function() {
  var x = confirm('Are you 21 years of age?');
  if (x == true) {
    alert('Welcome, enjoy!');
  } else {
    alert('Sorry, this site is for users 21 years of age or older.');
  }
});
