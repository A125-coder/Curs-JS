document.title='Curs Java Script'

let entertainment = document.querySelector('#entertainment');
let business = document.querySelector('#business');
let health = document.querySelector('#health');
let science = document.querySelector('#science');
let sports = document.querySelector('#sports');
let tech = document.querySelector('#tech');
let uk = document.querySelector('#uk');
let nav = document.querySelector('nav');
let p = document.querySelectorAll('p');
let span = document.querySelectorAll('span');
let main = document.createElement('main');
let body = document.querySelector('body');

nav.addEventListener('mouseenter',function(){
    nav.style.width = '195px';
    nav.style.transition = '1s';
    nav.style.zIndex = '1';
})
nav.addEventListener('mouseleave',function(){
    nav.style.width = '20px';
    nav.style.transition = '1s';
    main.style.padding = '50px';
    nav.style.zIndex = '1';
})


uk.addEventListener('click',async function(){
    main.innerHTML = ' ';
        let url = 'http://newsapi.org/v2/top-headlines?country=gb&apiKey=5d1615d430894799926a5257c3e72386';
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
        p.style.color = 'rgb(118, 246, 255)';
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


entertainment.addEventListener('click',async function(){
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
        p.style.color = 'rgb(118, 246, 255)';
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


business.addEventListener('click',async function(){
    main.innerHTML = ' ';
    let url = 'http://newsapi.org/v2/top-headlines?country=gb&category=business&apiKey=5d1615d430894799926a5257c3e72386';
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
    p.style.color = 'rgb(118, 246, 255)';
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
health.addEventListener('click',async function(){
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
    p.style.color = 'rgb(118, 246, 255)';
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
science.addEventListener('click',async function(){
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
    p.style.color = 'rgb(118, 246, 255)';
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
sports.addEventListener('click',async function(){
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
    p.style.color = 'rgb(118, 246, 255)';
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
tech.addEventListener('click',async function(){
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
    p.style.color = 'rgb(118, 246, 255)';
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


body.insertAdjacentElement('beforeend',main);