var module = pathfora.Message({
  id: 'slideout-content-recommend',
  layout: 'slideout',
  headline: 'Check This Out!',
  msg: 'Based on your interests we think you will like this content.',
  variant: 3,
  recommend: {
    ql: {
      raw: 'FILTER AND(url LIKE "www.example.com/blog/*") FROM content'
    }
  },
  content: [
    {
      url: 'https://www.getlytics.com/blog/post/look_at_lytics_predictive',
      title: 'A Look at Lytics Predictive Scoring',
      description: 'Lytics behavioral scores probably won\'t replace your existing marketing segmentation. But, they will definitely make it better. Read this article if you\'re curious about how behavioral scoring can improve your marketing precision.',
      image: 'https://www.getlytics.com/img/blog/posts/look_at_lytics_predictive/look_at_lytics_predictive-bg.gif',
      default: true
    }
  ],
  cancelShow: false,
  okShow: false
});

pathfora.initializeWidgets([ module ], 'YOUR LYTICS ACCOUNT ID');