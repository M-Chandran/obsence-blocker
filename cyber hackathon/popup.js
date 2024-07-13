// popup.js

document.addEventListener('DOMContentLoaded', function () {
    const blurButton = document.getElementById('blockButton');
  
    blurButton.addEventListener('click', function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { action: 'blockPage' }, function (response) {
          if (response) {
            chrome.runtime.sendMessage({ action: 'showNotification', message: response.message });
          }
        });
      });
    });
  });
  