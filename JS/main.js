document.title='Curs Java Script'

let header = document.createElement('header');
let span = document.createElement('span');
let span1 = document.createElement('span');
let span2 = document.createElement('span');
let span3 = document.createElement('span');
let span4 = document.createElement('span');
let span5 = document.createElement('span');
let body = document.querySelector('body');
let main = document.createElement('main');


span.addEventListener('click',async function(){
    main.innerHTML = ' ';
        let url = 'http://newsapi.org/v2/top-headlines?country=gb&category=entertainment&apiKey=5d1615d430894799926a5257c3e72386';
        let promise = await fetch(url)
        let art = await promise.json()
        console.log(art)
    let art_text = art.articles;
    for(let i=0; i<art_text.length;i++){
                let div = document.createElement('div');
                let img = document.createElement('img');
                let h2 = document.createElement('h2');
                let a = document.createElement('a');
                let p = document.createElement('p');
                
        
                img.setAttribute('src',art_text[i].urlToImage);
                a.setAttribute('href',art_text[i].url);
                a.textContent = art_text[i].title;
                h2.insertAdjacentElement('afterbegin',a);
                p.textContent = art_text[i].description;
                div.insertAdjacentElement('beforeend',img);
                div.insertAdjacentElement('beforeend',h2);
                div.insertAdjacentElement('beforeend',p);

                main.insertAdjacentElement('beforeend',div);
            
                
                

        div.style.width = '30%';
        div.style.margin = '15px';
        div.style.fontFamily = 'Arial';
        a.style.textDecoration = 'none';
        img.style.width = '100%';
        main.style.display = 'flex';
        main.style.justifyContent = 'space-evenly';
        main.style.flexWrap = 'wrap';
        a.style.color = 'orange';
        p.style.color = 'darkblue';
        img.style.cursor = 'pointer';
                
                a.addEventListener('mouseenter',function(){
            if(a.style.color == 'orange'){
                a.style.color = 'red';
            }
        })

        a.addEventListener('mouseleave',function(){
            if(a.style.color == 'red'){
                a.style.color = 'orange';
            }
        })
    }
})

span1.addEventListener('click',async function(){
    main.innerHTML = ' ';
    let url = 'https://newsapi.org/v2/top-headlines?country=gb&category=business&apiKey=5d1615d430894799926a5257c3e72386';
    let promise = await fetch(url)
    let news = await promise.json()
    console.log(news)
let news_text = news.articles;
for(let i=0; i<news_text.length;i++){
            let div1 = document.createElement('div');
            let img = document.createElement('img');
            let h2 = document.createElement('h2');
            let a = document.createElement('a');
            let p = document.createElement('p');
    
            img.setAttribute('src',news_text[i].urlToImage);
            a.setAttribute('href',news_text[i].url);
            a.textContent = news_text[i].title;
            h2.insertAdjacentElement('afterbegin',a);
            p.textContent = news_text[i].description;
            div1.insertAdjacentElement('beforeend',img);
            div1.insertAdjacentElement('beforeend',h2);
            div1.insertAdjacentElement('beforeend',p);


           main.insertAdjacentElement('beforeend',div1);
           

    div1.style.width = '30%';
    div1.style.margin = '15px';
    div1.style.fontFamily = 'Arial';
    a.style.textDecoration = 'none';
    img.style.width = '100%';
    main.style.display = 'flex';
    main.style.justifyContent = 'space-evenly';
    main.style.flexWrap = 'wrap';
    a.style.color = 'orange';
    p.style.color = 'darkblue';
    img.style.cursor = 'pointer';
            
            a.addEventListener('mouseenter',function(){
        if(a.style.color == 'orange'){
            a.style.color = 'red';
        }
    })

    a.addEventListener('mouseleave',function(){
        if(a.style.color == 'red'){
            a.style.color = 'orange';
        }
    })
}
})

span2.addEventListener('click',async function(){
    main.innerHTML = ' ';
    let url = 'http://newsapi.org/v2/top-headlines?country=gb&category=health&apiKey=5d1615d430894799926a5257c3e72386';
    let promise = await fetch(url)
    let news = await promise.json()
    console.log(news)
let news_text = news.articles;
for(let i=0; i<news_text.length;i++){
            let div1 = document.createElement('div');
            let img = document.createElement('img');
            let h2 = document.createElement('h2');
            let a = document.createElement('a');
            let p = document.createElement('p');
    
            img.setAttribute('src',news_text[i].urlToImage);
            a.setAttribute('href',news_text[i].url);
            a.textContent = news_text[i].title;
            h2.insertAdjacentElement('afterbegin',a);
            p.textContent = news_text[i].description;
            div1.insertAdjacentElement('beforeend',img);
            div1.insertAdjacentElement('beforeend',h2);
            div1.insertAdjacentElement('beforeend',p);


           main.insertAdjacentElement('beforeend',div1);
           

    div1.style.width = '30%';
    div1.style.margin = '15px';
    div1.style.fontFamily = 'Arial';
    a.style.textDecoration = 'none';
    img.style.width = '100%';
    main.style.display = 'flex';
    main.style.justifyContent = 'space-evenly';
    main.style.flexWrap = 'wrap';
    a.style.color = 'orange';
    p.style.color = 'darkblue';
    img.style.cursor = 'pointer';
            
            a.addEventListener('mouseenter',function(){
        if(a.style.color == 'orange'){
            a.style.color = 'red';
        }
    })

    a.addEventListener('mouseleave',function(){
        if(a.style.color == 'red'){
            a.style.color = 'orange';
        }
    })
}
})
span3.addEventListener('click',async function(){
    main.innerHTML = ' ';
    let url = 'http://newsapi.org/v2/top-headlines?country=gb&category=science&apiKey=5d1615d430894799926a5257c3e72386';
    let promise = await fetch(url)
    let news = await promise.json()
    console.log(news)
let news_text = news.articles;
for(let i=0; i<news_text.length;i++){
            let div1 = document.createElement('div');
            let img = document.createElement('img');
            let h2 = document.createElement('h2');
            let a = document.createElement('a');
            let p = document.createElement('p');
    
            img.setAttribute('src',news_text[i].urlToImage);
            a.setAttribute('href',news_text[i].url);
            a.textContent = news_text[i].title;
            h2.insertAdjacentElement('afterbegin',a);
            p.textContent = news_text[i].description;
            div1.insertAdjacentElement('beforeend',img);
            div1.insertAdjacentElement('beforeend',h2);
            div1.insertAdjacentElement('beforeend',p);


           main.insertAdjacentElement('beforeend',div1);
           

    div1.style.width = '30%';
    div1.style.margin = '15px';
    div1.style.fontFamily = 'Arial';
    a.style.textDecoration = 'none';
    img.style.width = '100%';
    main.style.display = 'flex';
    main.style.justifyContent = 'space-evenly';
    main.style.flexWrap = 'wrap';
    a.style.color = 'orange';
    p.style.color = 'darkblue';
    img.style.cursor = 'pointer';
            
            a.addEventListener('mouseenter',function(){
        if(a.style.color == 'orange'){
            a.style.color = 'red';
        }
    })

    a.addEventListener('mouseleave',function(){
        if(a.style.color == 'red'){
            a.style.color = 'orange';
        }
    })
}
})
span4.addEventListener('click',async function(){
    main.innerHTML = ' ';
    let url = 'http://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=5d1615d430894799926a5257c3e72386';
    let promise = await fetch(url)
    let news = await promise.json()
    console.log(news)
let news_text = news.articles;
for(let i=0; i<news_text.length;i++){
            let div1 = document.createElement('div');
            let img = document.createElement('img');
            let h2 = document.createElement('h2');
            let a = document.createElement('a');
            let p = document.createElement('p');
    
            img.setAttribute('src',news_text[i].urlToImage);
            a.setAttribute('href',news_text[i].url);
            a.textContent = news_text[i].title;
            h2.insertAdjacentElement('afterbegin',a);
            p.textContent = news_text[i].description;
            div1.insertAdjacentElement('beforeend',img);
            div1.insertAdjacentElement('beforeend',h2);
            div1.insertAdjacentElement('beforeend',p);


           main.insertAdjacentElement('beforeend',div1);
           

    div1.style.width = '30%';
    div1.style.margin = '15px';
    div1.style.fontFamily = 'Arial';
    a.style.textDecoration = 'none';
    img.style.width = '100%';
    main.style.display = 'flex';
    main.style.justifyContent = 'space-evenly';
    main.style.flexWrap = 'wrap';
    a.style.color = 'orange';
    p.style.color = 'darkblue';
    img.style.cursor = 'pointer';
            
            a.addEventListener('mouseenter',function(){
        if(a.style.color == 'orange'){
            a.style.color = 'red';
        }
    })

    a.addEventListener('mouseleave',function(){
        if(a.style.color == 'red'){
            a.style.color = 'orange';
        }
    })
}
})
span5.addEventListener('click',async function(){
    main.innerHTML = ' ';
    let url = 'http://newsapi.org/v2/top-headlines?country=gb&category=technology&apiKey=5d1615d430894799926a5257c3e72386';
    let promise = await fetch(url)
    let news = await promise.json()
    console.log(news)
let news_text = news.articles;
for(let i=0; i<news_text.length;i++){
            let div1 = document.createElement('div');
            let img = document.createElement('img');
            let h2 = document.createElement('h2');
            let a = document.createElement('a');
            let p = document.createElement('p');
    
            img.setAttribute('src',news_text[i].urlToImage);
            a.setAttribute('href',news_text[i].url);
            a.textContent = news_text[i].title;
            h2.insertAdjacentElement('afterbegin',a);
            p.textContent = news_text[i].description;
            div1.insertAdjacentElement('beforeend',img);
            div1.insertAdjacentElement('beforeend',h2);
            div1.insertAdjacentElement('beforeend',p);


           main.insertAdjacentElement('beforeend',div1);
           

    div1.style.width = '30%';
    div1.style.margin = '15px';
    div1.style.fontFamily = 'Arial';
    a.style.textDecoration = 'none';
    img.style.width = '100%';
    main.style.display = 'flex';
    main.style.justifyContent = 'space-evenly';
    main.style.flexWrap = 'wrap';
    a.style.color = 'orange';
    p.style.color = 'darkblue';
    img.style.cursor = 'pointer';
            
            a.addEventListener('mouseenter',function(){
        if(a.style.color == 'orange'){
            a.style.color = 'red';
        }
    })

    a.addEventListener('mouseleave',function(){
        if(a.style.color == 'red'){
            a.style.color = 'orange';
        }
    })
}
})
                
                body.insertAdjacentElement('afterbegin',main);
                body.insertAdjacentElement('afterbegin',header); 
                header.insertAdjacentElement('beforeend',span);
                header.insertAdjacentElement('beforeend',span1);
                header.insertAdjacentElement('beforeend',span2);
                header.insertAdjacentElement('beforeend',span3);
                header.insertAdjacentElement('beforeend',span4);
                header.insertAdjacentElement('beforeend',span5);
                header.style.backgroundColor = 'rgb(12, 10, 10)';
                header.style.width = '100%';
                header.style.height = '60px';
                header.style.textAlign = 'center';
                header.style.display = 'flex';
                header.style.flexDirection = 'row';
                header.style.justifyContent = 'space-around';
                header.style.alignItems = 'center';
                span.innerHTML += 'ENTERTAINMENT';
                span1.innerHTML += 'BUSINESS';
                span2.innerHTML += 'HEALTH';
                span3.innerHTML += 'SCIENCE';
                span4.innerHTML += 'SPORTS';
                span5.innerHTML += 'TECHNOLOGY';
                span.style.color = 'rgb(167, 165, 165)';
                span.style.cursor = 'pointer';
                span1.style.color = 'rgb(167, 165, 165)';
                span1.style.cursor = 'pointer';                 
                span2.style.color = 'rgb(167, 165, 165)';
                span2.style.cursor = 'pointer';                 
                span3.style.color = 'rgb(167, 165, 165)';
                span3.style.cursor = 'pointer';                 
                span4.style.color = 'rgb(167, 165, 165)';
                span4.style.cursor = 'pointer';                 
                span5.style.color = 'rgb(167, 165, 165)';
                span5.style.cursor = 'pointer';                 