'use strict';

var hours = ['','6:00am','7:00am','8:00am','9:00am','10:00am', '11:00am', '12:00pm', '1:00pm','2:00pm:', '3:00pm:', '4:00pm:', '5:00pm:', '6:00pm:', '7:00pm:','8:00pm:', 'Daily Location Total'];

var storesNames = ['','First & Pike','SeaTac Airport','Seattle Center','Capitol Hill','Alki'];

var cookiesPurchased = [];

function Store (minCustPerHour,maxCustPerHour,avgCookieSale) {
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookieSale = avgCookieSale;
}

Store.prototype.randomNumber = function () {
  var calculation = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
  return calculation;
};

Store.prototype.cookiesPerHour = function () {
  for (var i = 0; i < hours.length ; i++) {
    var randomCustomers = this.randomNumber();
    console.log(randomCustomers);
    var amountCookies = Math.floor(this.avgCookieSale * randomCustomers);
    console.log(amountCookies);
    cookiesPurchased.push(amountCookies);}
  return cookiesPurchased;
};

Store.prototype.totalCookiesPerDay = function () {
  var sum = 0;
  for (var i = 0; i < hours.length ; i++) {
    sum += cookiesPurchased[i];
  }
  return sum;
};

// Stores.prototype.docTable = function() {
//   var cookiesArray = this.cookiesPerHour();
//   var totalSum = this.totalCookiesPerDay();
//
//   var tableEl = document.getElementById('cookie-table');
//   var trEl = document.createElement('th');
//   for (var i = 0; i < hours.length; i++){
//     var rowData = hours[i];
//     var thEl = document.createElement('th');
//     thEl.textContent = rowDlata;
//     trEl.appendChild(thEl);
//   };
//   tableEl.appendChild(trEl);
//   for (var index = 0; index < stores.length; index++){
//     trEl = document.createElement('tr');
//     for (var j = 0; j < this.cookiesArray.length; j++){
//       var tdEl = document.createElement('td');
//       tdEl.textContent = this.cookiesArray[j];
//       trEl.appendChild(tdEl);
//     }
//     tableEl.appendChild(trEl);
//   }
// };

var firstAndPike = new Store (23,65,6.3);
var SeaTacAirport = new Store (3,24,1.2);
var SeattleCenter = new Store (11,38,3.7);
var CapitolHill = new Store (20,38,2.3);
var Alki = new Store (2,16,4.6);

Stores.firstAndPike.cookiesPerHour();
