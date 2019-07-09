let tab1 = Array.from(document.getElementById('tabs1').getElementsByClassName('tab'));
let tab2 = Array.from(document.getElementById('tabs2').getElementsByClassName('tab'));
let tabContent1 = Array.from(document.getElementById('tabs1').getElementsByClassName('tab__content'));
let tabContent2 = Array.from(document.getElementById('tabs2').getElementsByClassName('tab__content'));

tab1.forEach((e, i) => {
    e.addEventListener('click', function() {
        let tabActive = document.querySelectorAll('div#tabs1.tabs > div.tab__navigation > div.tab.tab_active');
        let tabActiveContent = document.querySelectorAll('div#tabs1.tabs > div.tab__contents > div.tab__content.tab__content_active');
        
        if (tabActive.length != 0) tabActive[0].classList.remove('tab_active');
        if (tabActiveContent.length != 0) tabActiveContent[0].classList.remove('tab__content_active');
        
        //Через indexOf
        let index = tab1.indexOf(e);
        //console.log(index);

        e.classList.add('tab_active');
        tabContent1[index].classList.add('tab__content_active');
    });
});

tab2.forEach((e, i) => {
    e.addEventListener('click', function() {
        let tabActive = document.querySelectorAll('div#tabs2.tabs > div.tab__navigation > div.tab.tab_active');
        let tabActiveContent = document.querySelectorAll('div#tabs2.tabs > div.tab__contents > div.tab__content.tab__content_active');

        if (tabActive.length != 0) tabActive[0].classList.remove('tab_active');
        if (tabActiveContent.length != 0) tabActiveContent[0].classList.remove('tab__content_active');
      
        e.classList.add('tab_active');
        tabContent2[i].classList.add('tab__content_active');
    });
});