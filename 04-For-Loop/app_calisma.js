const app = Vue.createApp(
  {//Burda tagin içinde for kullanabiliriz ve direk v- for attributtundan sonra gun in gunleri kullanabilirim

    //Otmatik olarak list itemler oluştu.
    // template:`
    //   <ul>
    //    <li v-for="gun in gunler" >{{gun}}</li>
    //   </ul>
    // `,

    template:`
      <ul>
      <li v-for="i in persons">{{i.isim}} - {{i.maas}}</li>
      </ul>

    `,
    data(){
      return { 

        //["Pazartesi","Salı","Çarşamba","Perşemebe","Cuma","Cumartesi","Pazar"]

        persons: [
          {isim:"Varol",maas:4250},
          {isim:"Seyit",maas:5250},
          {isim:"Varol",maas:7250},
        ]
     


      }
    },
    methods:{
         }
  }
);
  
app.mount('.app'); //diyezin olması id olduğu içindi class ise . olmalıdır.

/*
div etiketin arası aslında templetteki html etiketlerinin yerleşeceği yerdir template te budur yani.

*/ 