'use strict';

var hours = ['','6:00am','7:00am','8:00am','9:00am','10:00am', '11:00am', '12:00pm', '1:00pm','2:00pm:', '3:00pm:', '4:00pm:', '5:00pm:', '6:00pm:', '7:00pm:','8:00pm:', 'Daily Location Total'];

function Store (minCustPerHour,maxCustPerHour,avgCookieSale,locationName) {
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookieSale = avgCookieSale;
  this.cookiesPurchased = [];
  this.locationName = locationName;
}

Store.prototype.randomNumber = function () {
  var calculation = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour)) + this.minCustPerHour;
  return calculation;
};

Store.prototype.cookiesPerHour = function () {
  for (var i = 1; i < hours.length - 1 ; i++) {
    var randomCustomers = this.randomNumber();
    console.log(randomCustomers);
    var amountCookies = Math.floor(this.avgCookieSale * randomCustomers);
    this.cookiesPurchased.push(amountCookies);
    console.log(this.cookiesPurchased[i]);
  }
  return this.cookiesPurchased;
};

Store.prototype.totalCookiesPerDay = function () {
  this.cookiesPerHour();
  var sum = 0;
  for (var i = 0; i < this.cookiesPurchased.length; i++) {
    sum += this.cookiesPurchased[i];
  }
  return this.cookiesPurchased.push(sum);
};

//Header DOM Function
function tableHeader() {
  var tableEl = document.getElementById('header-table');
  var trEl = document.createElement('tr');
  for (var i = 0; i < hours.length; i++) {
    var thEl = document.createElement('th');
    var rowData = hours[i];
    thEl.textContent = rowData;
    trEl.appendChild(thEl);
  }
  tableEl.appendChild(trEl);
}

//Body DOM function
Store.prototype.tableBody = function() {

  var tableBodyEl = document.getElementById('body-table');
  var trEl = document.createElement('tr');
  var tdForStores = document.createElement('td');
  tdForStores.textContent = this.locationName;
  trEl.appendChild(tdForStores);

  for (var j = 0; j < this.cookiesPurchased.length; j++){
    var tdEl = document.createElement('td');
    var cookees = this.cookiesPurchased[j];
    tdEl.textContent = cookees;
    trEl.appendChild(tdEl);
  }
  tableBodyEl.appendChild(trEl);
};

// //Header DOM Function
// function tableFooter() {
//   var tableEl = document.getElementById('footer-table');
//   var trEl = document.createElement('tr');
//   for (var i = 0; i < hours.length; i++) {
//     var thEl = document.createElement('th');
//     var rowData = hours[i];
//     thEl.textContent = rowData;
//     trEl.appendChild(thEl);
//   }
//   tableEl.appendChild(trEl);
// }

var firstAndPike = new Store (23,65,6.3,'First and Pike');
var SeaTacAirport = new Store (3,24,1.2,'SeaTac Airport');
var SeattleCenter = new Store (11,38,3.7,'Seattle Center');
var CapitolHill = new Store (20,38,2.3,'Capitol Hill');
var Alki = new Store (2,16,4.6,'Alki');
//

tableHeader();
firstAndPike.totalCookiesPerDay();
firstAndPike.tableBody();

SeaTacAirport.totalCookiesPerDay();
SeaTacAirport.tableBody();

SeattleCenter.totalCookiesPerDay();
SeattleCenter.tableBody();

CapitolHill.totalCookiesPerDay();
CapitolHill.tableBody();

Alki.totalCookiesPerDay();
Alki.tableBody();
