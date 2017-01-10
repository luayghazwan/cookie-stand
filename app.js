'use strict';

var hours = ['6am:','7am:','8am:','9am:','10am:', '11am:', '12pm:', '1pm:','2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:','8pm:'];

// First Store 1st and Pike
var firstAndPike = {
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookieSale: 6.3,
  cookiesPurchased: [],
  randomNumber : function() {
    var calculation = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    return calculation;
  },
  cookiesPerHour: function () {
    for (var i = 0; i < hours.length ; i++) {
      var randomCustomers = this.randomNumber();
      console.log(randomCustomers);
      var amountCookies = Math.floor(this.avgCookieSale * randomCustomers);
      console.log(amountCookies);
      this.cookiesPurchased.push(amountCookies);
    }
    console.log(this.cookiesPurchased);
    return this.cookiesPurchased;
  },
  totalCookies: function () {
    var sum = 0;
    for (var i = 0; i < hours.length ; i++) {
      sum += this.cookiesPurchased[i];
    }
    return sum;
  },
};

//Loop for document command
function docStore1 () {
  var sum = firstAndPike.totalCookies();
  var cookies = firstAndPike.cookiesPerHour();
  var cookiesList = document.getElementById('cookies');
  for (var i = 0; i < cookies.length; i++) {
    var listElement = document.createElement('li'); //Step 1
    // listElement.setAttribute('class','cookies-list-item'); //Step 2
    listElement.textContent = hours[i] + ' ' + cookies[i]; // Step 2
    cookiesList.appendChild(listElement); //Step3
  }
}
docStore1();

// 2nd Store SeaTac Airport
var SeaTacAirport = {
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookieSale: 1.2,
  cookiesPurchased: [],

  randomNumber : function() {
    var calculation = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    return calculation;
  },
  cookiesPerHour: function () {
    for (var i = 0; i < hours.length ; i++) {
      var randomCustomers = this.randomNumber();
      console.log(randomCustomers);
      var amountCookies = Math.floor(this.avgCookieSale * randomCustomers);
      console.log(amountCookies);
      this.cookiesPurchased.push(amountCookies);
    }
    console.log(this.cookiesPurchased);
    return this.cookiesPurchased;
  },
  totalCookies: function () {
    var sum = 0;
    for (var i = 0; i < hours.length ; i++) {
      sum += this.cookiesPurchased[i];
    }
    return sum;
  },
};

//Loop for document command
function docStore2 () {
  var sum = SeaTacAirport.totalCookies();
  var cookies = SeaTacAirport.cookiesPerHour();
  var cookiesList = document.getElementById('cookies');
  for (var i = 0; i < cookies.length; i++) {
    var listElement = document.createElement('li'); //Step 1
    // listElement.setAttribute('class','cookies-list-item'); //Step 2
    listElement.textContent = hours[i] + ' ' + cookies[i]; // Step 2
    cookiesList.appendChild(listElement); //Step3
  }
}
docStore2();

// 3rd Store SeattleCenter
var SeattleCenter = {
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookieSale: 3.7,
  cookiesPurchased: [],

  randomNumber : function() {
    var calculation = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    return calculation;
  },
  cookiesPerHour: function () {
    for (var i = 0; i < hours.length ; i++) {
      var randomCustomers = this.randomNumber();
      console.log(randomCustomers);
      var amountCookies = Math.floor(this.avgCookieSale * randomCustomers);
      console.log(amountCookies);
      this.cookiesPurchased.push(amountCookies);
    }
    console.log(this.cookiesPurchased);
    return this.cookiesPurchased;
  },
  totalCookies: function () {
    var sum = 0;
    for (var i = 0; i < hours.length ; i++) {
      sum += this.cookiesPurchased[i];
    }
    return sum;
  },
};

//Loop for document command
function docStore3 () {
  var sum = SeattleCenter.totalCookies();
  var cookies = SeattleCenter.cookiesPerHour();
  var cookiesList = document.getElementById('cookies');
  for (var i = 0; i < cookies.length; i++) {
    var listElement = document.createElement('li'); //Step 1
    // listElement.setAttribute('class','cookies-list-item'); //Step 2
    listElement.textContent = hours[i] + ' ' + cookies[i]; // Step 2
    cookiesList.appendChild(listElement); //Step3
  }
}
docStore3();

// 4th Store CapitolHill
var CapitolHill = {
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookieSale: 2.3,
  cookiesPurchased: [],
  randomNumber : function() {
    var calculation = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    return calculation;
  },
  cookiesPerHour: function () {
    for (var i = 0; i < hours.length ; i++) {
      var randomCustomers = this.randomNumber();
      console.log(randomCustomers);
      var amountCookies = Math.floor(this.avgCookieSale * randomCustomers);
      console.log(amountCookies);
      this.cookiesPurchased.push(amountCookies);
    }
    console.log(this.cookiesPurchased);
    return this.cookiesPurchased;
  },
  totalCookies: function () {
    var sum = 0;
    for (var i = 0; i < hours.length ; i++) {
      sum += this.cookiesPurchased[i];
    }
    return sum;
  },
};

//Loop for document command
function docStore4 () {
  var sum = CapitolHill.totalCookies();
  var cookies = CapitolHill.cookiesPerHour();
  var cookiesList = document.getElementById('cookies');
  for (var i = 0; i < cookies.length; i++) {
    var listElement = document.createElement('li'); //Step 1
    // listElement.setAttribute('class','cookies-list-item'); //Step 2
    listElement.textContent = hours[i] + ' ' + cookies[i]; // Step 2
    cookiesList.appendChild(listElement); //Step3
  }
}
docStore4();

//5th Store Alki
var Alki = {
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookieSale: 4.6,
  cookiesPurchased: [],

  randomNumber : function() {
    var calculation = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    return calculation;
  },
  cookiesPerHour: function () {
    for (var i = 0; i < hours.length ; i++) {
      var randomCustomers = this.randomNumber();
      console.log(randomCustomers);
      var amountCookies = Math.floor(this.avgCookieSale * randomCustomers);
      console.log(amountCookies);
      this.cookiesPurchased.push(amountCookies);
    }
    console.log(this.cookiesPurchased);
    return this.cookiesPurchased;
  },
  totalCookies: function () {
    var sum = 0;
    for (var i = 0; i < hours.length ; i++) {
      sum += this.cookiesPurchased[i];
    }
    return sum;
  },
};

//Loop for document command
function docStore5 () {
  var sum = Alki.totalCookies();
  var cookies = Alki.cookiesPerHour();
  var cookiesList = document.getElementById('cookies');
  for (var i = 0; i < cookies.length; i++) {
    var listElement = document.createElement('li'); //Step 1
    // listElement.setAttribute('class','cookies-list-item'); //Step 2
    listElement.textContent = hours[i] + ' ' + cookies[i]; // Step 2
    cookiesList.appendChild(listElement); //Step3
  }
}
docStore5();
