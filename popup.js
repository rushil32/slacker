let changeTheme = document.getElementById('changeTheme');

chrome.storage.sync.get('theme', function(data) {
  changeTheme.setAttribute('value', data.theme);
});

changeTheme.onchange = function(element) {
  let theme = element.target.value;

  chrome.storage.sync.set({ theme });

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript({
      file: 'imageSwap.js'
    });
  });
};