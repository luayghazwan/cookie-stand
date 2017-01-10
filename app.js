'use strict';

var hours = ['6am:','7am:','8am:','9am:','10am:', '11am:', '12pm:', '1pm:','2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:','8pm:'];

// First Store 1st and Pike
var firstNpike = {
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookieSale: 6.3,
  cookiesPurchased: [],

  cookiesPerHour: function () {
    var randomCustomers = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;

    for (var i = 0; i < hours.length ; i++) {
      var amountCookies = Math.floor(this.avgCookieSale * randomCustomers);
      console.log('Number of cookies purchased per hour is ' + amountCookies);
      this.cookiesPurchased.push(amountCookies);
    }
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
firstNpike.cookiesPerHour();
firstNpike.totalCookies();

//Loop for document command
function docStore1 () {
  var sum = this.totalCookies();
  var cookies = firstNpike.cookiesPerHour();
  var cookiesList = document.getElementById('cookies');
  for (var i = 0; i < cookies.length; i++) {
    var listElement = document.createElement('li'); //Step 1
    // listElement.setAttribute('class','cookies-list-item'); //Step 2
    listElement.textContent = cookies[i] + ' ' + i; // Step 2
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

  cookiesPerHour: function () {
    var randomCustomers = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;

    for (var i = 0; i < hours.length ; i++) {
      var amountCookies = Math.floor(this.avgCookieSale * randomCustomers);
      console.log('Number of cookies purchased per hour is ' + amountCookies);
      this.cookiesPurchased.push(amountCookies);
    }
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
firstNpike.cookiesPerHour();
firstNpike.totalCookies();

//Loop for document command
function docStore2 () {
  var sum = this.totalCookies();
  var cookies = firstNpike.cookiesPerHour();
  var cookiesList = document.getElementById('cookies');
  for (var i = 0; i < cookies.length; i++) {
    var listElement = document.createElement('li'); //Step 1
    // listElement.setAttribute('class','cookies-list-item'); //Step 2
    listElement.textContent = cookies[i] + ' ' + i; // Step 2
    cookiesList.appendChild(listElement); //Step3
  }
}
docStore2();

// 3rd Store SeattleCenter
var SeattleCenter = {
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerHours: 3.7,
  cookiesPurchased: [],

  cookiesPerHour: function () {
    var randomCustomers = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;

    for (var i = 0; i < hours.length ; i++) {
      var amountCookies = Math.floor(this.avgCookieSale * randomCustomers);
      console.log('Number of cookies purchased per hour is ' + amountCookies);
      this.cookiesPurchased.push(amountCookies);
    }
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
firstNpike.cookiesPerHour();
firstNpike.totalCookies();

//Loop for document command
function docStore3 () {
  var sum = this.totalCookies();
  var cookies = firstNpike.cookiesPerHour();
  var cookiesList = document.getElementById('cookies');
  for (var i = 0; i < cookies.length; i++) {
    var listElement = document.createElement('li'); //Step 1
    // listElement.setAttribute('class','cookies-list-item'); //Step 2
    listElement.textContent = cookies[i] + ' ' + i; // Step 2
    cookiesList.appendChild(listElement); //Step3
  }
}
docStore3();

// 4th Store CapitolHill
var CapitolHill = {
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerHours: 2.3,
  cookiesPurchased: [],

  cookiesPerHour: function () {
    var randomCustomers = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;

    for (var i = 0; i < hours.length ; i++) {
      var amountCookies = Math.floor(this.avgCookieSale * randomCustomers);
      console.log('Number of cookies purchased per hour is ' + amountCookies);
      this.cookiesPurchased.push(amountCookies);
    }
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
firstNpike.cookiesPerHour();
firstNpike.totalCookies();

//Loop for document command
function docStore4 () {
  var sum = this.totalCookies();
  var cookies = firstNpike.cookiesPerHour();
  var cookiesList = document.getElementById('cookies');
  for (var i = 0; i < cookies.length; i++) {
    var listElement = document.createElement('li'); //Step 1
    // listElement.setAttribute('class','cookies-list-item'); //Step 2
    listElement.textContent = cookies[i] + ' ' + i; // Step 2
    cookiesList.appendChild(listElement); //Step3
  }
}
docStore4();

//5th Store Alki
var Alki = {
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerHours: 4.6,
  cookiesPurchased: [],

  cookiesPerHour: function () {
    var randomCustomers = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;

    for (var i = 0; i < hours.length ; i++) {
      var amountCookies = Math.floor(this.avgCookieSale * randomCustomers);
      console.log('Number of cookies purchased per hour is ' + amountCookies);
      this.cookiesPurchased.push(amountCookies);
    }
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
firstNpike.cookiesPerHour();
firstNpike.totalCookies();

//Loop for document command
function docStore5 () {
  var sum = this.totalCookies();
  var cookies = firstNpike.cookiesPerHour();
  var cookiesList = document.getElementById('cookies');
  for (var i = 0; i < cookies.length; i++) {
    var listElement = document.createElement('li'); //Step 1
    // listElement.setAttribute('class','cookies-list-item'); //Step 2
    listElement.textContent = cookies[i] + ' ' + i; // Step 2
    cookiesList.appendChild(listElement); //Step3
  }
}
docStore5();
