console.log("this is my index js file");
// 99d52b797be14f5a9165f99334c713cb

let source = 'bbc-news';
let apiKey = '99d52b797be14f5a9165f99334c713cb';
newsAccordion = document.getElementById('newsAccordion');

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);


xhr.onload = function () {
    if (this.status = 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml="";
        articles.forEach(function(element,index){
            let news = `<div class="card">
            <div class="card-header" id="heading${index}">
                <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                    aria-expanded="true" aria-controls="collapse${index}">
                    <b>Breaking News ${index+1}</b>: ${element["title"]}
                </button>
                </h2>
            </div>

            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                <div class="card-body"> ${element["content"]}.<a href="${element['url']}" target="_blank">Read more here</a></div>
            </div>
            </div>`;
            newsHtml+=news;
        });
        newsAccordion.innerHTML=newsHtml;
    }
    else {
        console.log(error);
    }
}

xhr.send();

let date=document.getElementById('date');
Date=new Date();
let dateHtml="";
dateHtml=`<h5>Date:</h5>${Date.getDate()}/${Date.getMonth()}/${Date.getFullYear()}`;
date.innerHTML=dateHtml;