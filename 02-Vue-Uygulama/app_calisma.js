const app = Vue.createApp(
  {//Burda iki parantez arasında aldığımızda variable olarak kullanabiliriz.
    template:`
    <h2>{{baslik}}</h2>
    <h3>{{icerik}}</h3>
    <p>{{yorumSayisi}}</p>
    
    
    
    
    
    `,
    data(){//create app içereisindeki data fonksyionu içerisinde kullanılacak datalar belirlenebilir.Retrun edebileceği değeri vererek başlarız.

      return {
        baslik:'Vue ders',
        icerik:'Vue 3 konuları',
        yorumSayisi : 9
      }
    

    }
  }
);
  
app.mount('.app'); //diyezin olması id olduğu içindi class ise . olmalıdır.

/*
div etiketin arası aslında templetteki html etiketlerinin yerleşeceği yerdir template te budur yani.

*/ 