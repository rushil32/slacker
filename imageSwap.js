const images = {
  code: [],
  charts: [
    'https://about.canva.com/wp-content/uploads/sites/3/2016/10/Pie-Chart_thumbnail.png'
  ],
  math: [],
}

function getAspectRatio(img) {
  return img.width / img.height; 
}

chrome.storage.sync.get('theme', function(data) {
  const theme = data.theme;
  const imgElements = document.querySelectorAll('img');
  const newImages = images[theme];

  for (let i = 0; i < imgElements.length; i++) {
    console.log(getAspectRatio(imgElements[i]));
    imgElements[i].src = images.charts[0];
  }
});