var enterBtns = document.getElementsByClassName('entervenue')
// var enterBtns = document.getElementById('res')

for (i=0;i<enterBtns.length;i++){
    enterBtns[i].addEventListener('click',function (e) {
        var resId = this.dataset.resid
        resInfo['resId'] = resId
        if(cart[resId]==undefined){
            cart[resId]={resId:{}}
            console.log('cart in venuedetail',cart[resId])
        }else{
            console.log('cart in venuedetail',cart[resId])
        }

        console.log({"resId:":resId})
        var url = '/fasteat/entervenue/'


        fetch(url,{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                // 'Accept': 'application/json',
                'X-CSRFToken':csrftoken,
            },
            body:JSON.stringify({'resId':resId})
        })

        .then((response)=>{
            return response.json();
        })

        .then( data =>{
            // location.reload();
            console.log('data',data)

        })
        console.log('ResInfo',resInfo)
        document.cookie ='ResInfo=' + JSON.stringify(resInfo) + ";domain=;path=/"
        document.cookie ='cart=' + JSON.stringify(cart) + ";domain=;path=/"

    })

}


