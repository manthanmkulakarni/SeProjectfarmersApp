var fs = require('fs'),
    request = require('request');


var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

function latest_stories ()
{
  console.log(user.newscat)
    
    request({
        url: 'http://api.amarujala.com/v1/search?keywords='+user.newscat,
        method: 'GET'
    },function(error, response, body){
        if(error)
            console.log("589 erorr");
        else
        {

          

            var res = JSON.parse(body);
            var count = Object.keys(res['news']).length;
            console.log(count);
            
            var i=0;

            if(user.newsflg<count-3){
              i=parseInt(user.newsflg);
            }
            
            var imageurl1=res['news'][i+0]['image'];
            var newssynopsys1=res['news'][i+0]['News-Synopsis'];
            var newsheadlines1=res['news'][i+0]['Hindi-Headline'];
            var imagefilepath1='/Users/manthanmkulakarni/Desktop/botpress-v11_9_3-darwin-x64/data/bots/bot4/media/hulg1v5bbdfiidjp6y9e-img1.jpeg';
            download(imageurl1, imagefilepath1, function(){
                console.log('done');
              });
            

              var imageurl2=res['news'][i+1]['image'];
              var newssynopsys2=res['news'][i+1]['News-Synopsis'];
              var newsheadlines2=res['news'][i+1]['Hindi-Headline'];
              var imagefilepath2='/Users/manthanmkulakarni/Desktop/botpress-v11_9_3-darwin-x64/data/bots/bot4/media/nufo4x05ac19ypq7eoi6-img2.jpeg';
              download(imageurl2, imagefilepath2, function(){
                  console.log('done');
                });
                
                var imageurl3=res['news'][i+2]['image'];
                var newssynopsys3=res['news'][i+2]['News-Synopsis'];
                var newsheadlines3=res['news'][i+2]['Hindi-Headline'];
                var imagefilepath3='/Users/manthanmkulakarni/Desktop/botpress-v11_9_3-darwin-x64/data/bots/bot4/media/0rzsfxkrg6dicrbmnej5-img3.jpeg';
                download(imageurl3, imagefilepath3, function(){
                    console.log('done');
                  });

                  
            user.newsurl1=decodeURIComponent(res['news'][i+0]['Share_URL'])  
            user.newsurl2=decodeURIComponent(res['news'][i+1]['Share_URL'])  
            user.newsurl3=decodeURIComponent(res['news'][i+2]['Share_URL'])  

            user.newsheadlines1=newsheadlines1;
            user.newssynopsys1=newssynopsys1;  

            user.newsheadlines2=newsheadlines2;
            user.newssynopsys2=newssynopsys2;  

            user.newsheadlines3=newsheadlines3;
            user.newssynopsys3=newssynopsys3;  
            user.newsflg=1;
            
            console.log(user.newssynopsys1);
            console.log(user.newsheadlines1);

            console.log(user.newssynopsys2);
            console.log(user.newsheadlines2);

            console.log(user.newssynopsys3);
            console.log(user.newsheadlines3);
        }

    });
}
latest_stories();







