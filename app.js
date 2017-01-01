'use strict';

function setLocalStorage (keyString, dataToBeStored){

  var stringifiedData = JSON.stringify(dataToBeStored);
  document.setLocalStorage(keyString, stringifiedData);
}
