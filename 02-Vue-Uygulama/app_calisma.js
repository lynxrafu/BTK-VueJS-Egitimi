const app = Vue.createApp(
  {//Burda iki parantez arasında aldığımızda variable olarak kullanabiliriz.
    template:`
    <h2>{{baslik}}</h2>
    <h3>{{icerik}}</h3>
    <p>{{yorumSayisi}}</p>
    <button v-on:click="ekle()" >Ekle </button>
    <p>{{yazi}}</p>

    `,
    data(){//create app içereisindeki data fonksyionu içerisinde kullanılacak datalar belirlenebilir.Retrun edebileceği değeri vererek başlarız.
      return {
        //yorum data içinde olduğu için bu şeye ulaşmamız lazım this ile yorumsayisina erişebiliriz.
        baslik:'Vue ders',
        icerik:'Vue 3 konuları',
        yorumSayisi : 0,
        yazi: 'Yorum eklemek için tikla'
      }
    },
    methods:{// Methods parçası da herale içeride tanımlanmış olmalı parametere olarak.
        ekle(){//bu biçim çağırabiliriz.
          console.log("ekle methodu çalışıyor")
          this.yorumSayisi++;
          this.yazi=`${this.yorumSayisi} tane yorum girildi.`;
        }
    }
  }
);
  
app.mount('.app'); //diyezin olması id olduğu içindi class ise . olmalıdır.

/*
div etiketin arası aslında templetteki html etiketlerinin yerleşeceği yerdir template te budur yani.

*/ 