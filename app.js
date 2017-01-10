'use strict';

var hours = ['6am','7am','8am','9am','10am', '11am', '12pm', '1pm','2pm', '3pm', '4pm', '5pm', '6pm', '7pm','8pm'];

var firstNpike = {
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookieSale: 6.3,
  cookiesPurchased: [],

  randomCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
  },

  cookiesPerHour: function () {
    for (var i = 0; i < hours.length ; i++) {
      var amountCookies = Math.floor((this.avgCookieSale * this.randomCustomers()));
      this.cookiesPurchased[i] = amountCookies;
      console.log('Number of cookies purchased per hour is ' + this.cookiesPurchased[i]);
    }
    return this.cookiesPurchased;
  }
};

var SeaTacAirport = {
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookieSale: 1.2,
  cookiesPurchased: [],

  randomCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
  },
  cookiesPerHour: function () {
    for (var i = 0; i < hours.length ; i++) {
      var amountCookies = Math.floor(this.avgCookieSale * this.randomCustomers());
      this.cookiesPurchased[i] = amountCookies;
      console.log('Number of cookies purchased per hour is ' + this.cookiesPurchased[i]);
      return this.cookiesPurchased;
    }
  }
};

var SeattleCenter = {
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerHours: 3.7,
  cookiesPurchased: [],

  randomCusomters: function () {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
  },
  cookiesPerHour: function () {
    for (var i = 0; i < hours.length ; i++) {
      var amountCookies = Math.floor(this.avgCookiesPerHours * this.randomCusomters());
      this.cookiesPurchased[i] = amountCookies;
      console.log('Number of cookies purchased per hour is ' + this.cookiesPurchased[i]);
      return this.cookiesPurchased;
    }
  }
};

var CapitolHill = {
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerHours: 2.3,
  cookiesPurchased: [],

  randomCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
  },
  cookiesPerHour: function () {
    for (var i = 0 ; i < hours.length ; i++) {
      var amountCookies = Math.floor(this.avgCookiesPerHours * this.randomCustomers());
      this.cookiesPurchased[i] = amountCookies;
      console.log('Number of cookies purchased per hour is ' + this.cookiesPurchased[i]);
      return this.cookiesPurchased;
    }
  }
};

var Alki = {
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerHours: 4.6,
  cookiesPurchased: [],

  randomCustomers: function() {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
  },
  cookiesPerHour: function () {
    for (var i = 0; i < hours.length; i++) {
      var amountCookies = Math.floor(this.avgCookiesPerHours * this.randomCustomers());
      this.cookiesPurchased[i] = amountCookies;
      console.log('Number of cookies purchased per hour is ' + this.cookiesPurchased[i]);
      return this.cookiesPurchased;
    }
  }
};
