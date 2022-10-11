window.addEventListener('load',function(){
    var left=document.querySelector('.main_left');//大盒子
    var lbt=document.querySelector('.lbt'); //轮播图模块
    var zb=document.querySelector('.zb');//左按钮
    var yb=document.querySelector('.yb');//右按钮
    var ul=lbt.querySelector('ul');
    var ol=document.querySelector('ol');
    var flag=true;
    left.addEventListener('mouseover',function(){
        zb.style.display='block';
        yb.style.display='block';
        clearInterval(timer);
        timer=null;
    })
    left.addEventListener('mouseout',function(){
        zb.style.display='none';
        yb.style.display='none';
        timer=setInterval(function(){
            yb.click();
        },3000)
    })
    // 左右箭头显示与隐藏模块结束
    for(var i=0;i<ol.children.length;i++){
        ol.children[i].setAttribute('index',i);
        ol.children[i].addEventListener('mouseover',function(){
            if(flag){
                flag=false;
                for(var i=0;i<ol.children.length;i++){
                    ol.children[i].className='';
                }
                this.className='ys';
                var index=this.getAttribute('index');
                sum=index;
                num=index;
                animate(ul,-index*lbt.offsetWidth,function(){
                    flag=true
                });
            }
        })
    }
    // 轮播图跟随导航栏模块结束
    // 右侧箭头模块statr
    var first=ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var num=0;
    var sum=0;
    yb.addEventListener('click',function(){
        if(flag){
            flag=false;
            if(num==ul.children.length-1){
                num=0;
                ul.style.left=0;
            }
            num++;
            animate(ul,-num*lbt.offsetWidth,function(){
                flag=true;
            })
            sum++;
            if(sum==ol.children.length){
                sum=0;
            }
            for(var i=0;i<ol.children.length;i++){
                ol.children[i].className='';
            }
            ol.children[sum].className='ys'
        }
    })

    zb.addEventListener('click',function(){
       if(flag){
        flag=false;
        if(num==0){
            num=ul.children.length-1;
            ul.style.left=-(ul.children.length-1)*lbt.offsetWidth+'px';
        }
        num--;
        animate(ul,-num*lbt.offsetWidth,function(){
            flag=true;
        })
        sum--;
        if(sum<0){
            sum=ol.children.length-1;
        }
        for(var i=0;i<ol.children.length;i++){
            ol.children[i].className='';
        }
        ol.children[sum].className='ys'
       }
    })

    var timer=setInterval(function(){
        yb.click();
    },3000)
})
