window.addEventListener('load',function(){
    
    var main=document.querySelector('.main_head');
    var lis=main.querySelectorAll('li');
    var wz=document.querySelectorAll('.main_wz');
    for(var i=0;i<lis.length;i++){
        lis[i].setAttribute('index',i);
        lis[i].addEventListener('click',function(){
            for(var i=0;i<lis.length;i++){
                lis[i].style.color='#676767'
            }
            this.style.color='#1da6ba';
            var index=this.getAttribute('index');
            for(var i=0;i<wz.length;i++){
                wz[i].style.display='none';
            }
            wz[index].style.display='block';
        })
    }

    var tab=document.querySelector('.tab');
    var span=tab.querySelectorAll('span');
    var ul=document.querySelector('.hd_left').querySelectorAll('ul');
    for(var i=0;i<span.length;i++){
        span[i].setAttribute('index',i);
        span[i].addEventListener('mouseover',function(){
            for(var i=0;i<span.length;i++){
                span[i].style.color='#676767'
            }
            this.style.color='#1da6ba';
            var index=this.getAttribute('index');
            for(var i=0;i<ul.length;i++){
                ul[i].style.display='none';
            }
            ul[index].style.display='block';
        })
    }
})