'use strict';

var hours = ['','6:00am','7:00am','8:00am','9:00am','10:00am', '11:00am', '12:00pm', '1:00pm','2:00pm:', '3:00pm:', '4:00pm:', '5:00pm:', '6:00pm:', '7:00pm:','8:00pm:', 'Daily Location Total'];

var storesNames = ['First & Pike','SeaTac Airport','Seattle Center','Capitol Hill','Alki'];

var cookiesPurchased = [];

function Store (minCustPerHour,maxCustPerHour,avgCookieSale) {
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookieSale = avgCookieSale;
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
    cookiesPurchased.push(amountCookies);
    console.log(cookiesPurchased[i]);
  }
  return cookiesPurchased;
};

Store.prototype.totalCookiesPerDay = function () {
  var sum = 0;
  for (var i = 1; i < hours.length - 1; i++) {
    sum += cookiesPurchased[i];
  }
  return cookiesPurchased.push(sum);
};

//header DOM function
Store.prototype.tabHeader = function() {
  var tableEl = document.getElementById('cookie-table');
  var thEl = document.createElement('th');
  for (var i = 0; i < hours.length; i++){
    var tdEl = document.createElement('td');
    var rowData = hours[i];
    tdEl.textContent = rowData;
    thEl.appendChild(tdEl);
  }
  tableEl.appendChild(thEl);
};
'br';
//body DOM function
Store.prototype.tabBody = function() {
  var tableEl = document.getElementById('cookie-table');
  var tbEl = document.createElement('tb');

  for (var i = 0; i < storesNames.length; i++) {
    var tdEl2 = document.createElement('td');
    var store = storesNames[i];
    tdEl2.textContent = store;

    for (var j = 0; j < cookiesPurchased.length - 1; j++){
      var tdEl3 = document.createElement('td');
      var cookees = cookiesPurchased[j];
      tdEl3.textContent = cookees;
      tdEl2.appendChild(tdEl3);
    }
    tbEl.appendChild(tdEl2);
  }
  tableEl.appendChild(tbEl);
};

var firstAndPike = new Store (23,65,6.3);
var SeaTacAirport = new Store (3,24,1.2);
var SeattleCenter = new Store (11,38,3.7);
var CapitolHill = new Store (20,38,2.3);
var Alki = new Store (2,16,4.6);

firstAndPike.cookiesPerHour();
firstAndPike.totalCookiesPerDay();
firstAndPike.tabHeader();
firstAndPike.tabBody();
