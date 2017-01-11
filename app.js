'use strict';

var formEl = document.getElementById('first-form');

formEl.addEventListener('submit', function(event) {
  event.preventDefault();
  event.stopPropagation();
  console.log(event.target.username.value);
  console.log(event.target.password.value);
  //event.target is attached to formEl that has the parentheses ()
  // value is used to get only the string inside the double quotation from the HTML
  console.log(event.target);

  var username = event.target.username.value;
  renderUsername(username);
}, false);

function renderUsername(username) { //passing username to the function
  var sectionEl = document.getElementById('form-section');

  var userNameEl = document.createElement('p');
  userNameEl.setAttribute('class','entered-username');
  userNameEl.textContent = username;
  sectionEl.appendChild(userNameEl);
}
