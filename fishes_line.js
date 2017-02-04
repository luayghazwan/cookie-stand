'use strict';
var fishLine = document.getElementById('fish-line');

for (var i = 0; i < 15; i++) {
  var imgTag = document.createElement('img');
  imgTag.setAttribute('src','images/fishline.gif');
  imgTag.setAttribute('alt', 'Link is Broken :-(');
  fishLine.appendChild(imgTag);
}
