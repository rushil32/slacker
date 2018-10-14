window.imgLib = {
  code: [
    'https://cdn-images-1.medium.com/max/1600/1*UcpODv1lxR_Bt3MyaOvYWA.jpeg',
    'https://cdn-images-1.medium.com/max/2000/1*9aqEe1RQXAh77hA07VZN0w.png',
    'https://cdn-images-1.medium.com/max/2000/1*k8ouvk608TxH5FaLM8XUxQ.png',
    'https://stackify.com/wp-content/uploads/2017/05/web-application-architecture-example-diagram.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Pushdown-overview.svg/363px-Pushdown-overview.svg.png',
  ],
  charts: [
    'https://about.canva.com/wp-content/uploads/sites/3/2016/10/Pie-Chart_thumbnail.png',
    'https://about.canva.com/wp-content/uploads/sites/3/2016/10/Line-Chart_thumbs.png',
    'https://about.canva.com/wp-content/uploads/sites/3/2016/10/Area-Chart_thumbs.png',
    'https://about.canva.com/wp-content/uploads/sites/3/2016/10/Bar-graph_thumb-1.png',
    'https://about.canva.com/wp-content/uploads/sites/3/2016/10/scatterplot_thumb-1.png',
    'https://about.canva.com/wp-content/uploads/sites/3/2016/11/3circlevenn_thumb.jpg',
    'https://lh6.googleusercontent.com/mm4O5TLzKQVt-osoaTHzdAYjJXWBECPKcfsv4ZI-yv2Mo2C1Nx3gkukvL5n7ndThaGlKO93936mSq_ZweyfBRbVJSh3fpAYHCXgYN8zwXhmIXkds-0c',
  ],
  math: [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Conformal_Embedding.svg/525px-Conformal_Embedding.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/f/f1/LinePlaneIntersect.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Angle_obtuse_acute_straight.svg/800px-Angle_obtuse_acute_straight.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Geometry_Lessons.jpg/1280px-Geometry_Lessons.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Stereographic_projection_in_3D.svg/815px-Stereographic_projection_in_3D.svg.png',
  ],
};

function removePictures() {
  const pictures = document.querySelectorAll('picture source');

  for (let i = 0; i < pictures.length; i++) {
    pictures[i].parentNode.removeChild(pictures[i]);
  }
}

function swapImages(imgCollection) {
  const imgElements = document.querySelectorAll('img');

  for (let i = 0; i < imgElements.length; i++) {
    const imageToSwapIn = imgCollection[i % imgCollection.length];
    imgElements[i].srcset = imageToSwapIn;
    imgElements[i].src = imageToSwapIn;
  }
}

chrome.storage.sync.get('theme', function(data) {
  const newImages = imgLib[data.theme];

  swapImages(newImages);
  removePictures();
});
