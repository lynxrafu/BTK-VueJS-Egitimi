const app = Vue.createApp(
  {//showInfolar burda direk yazılabilir çünkü html içindeyiz 

    //v if i dom da görmüyorum fakat v showu görüyorum
    template:`
    <div v-if='!showInfo' >Deneme Yazısı</div>
    <div v-show='!showInfo' >Deneme Yazısı 2 </div>
    <button @click="toggle"> <!-- toggle methodunu burda çağırdık o kadar sadece-->
    <span v-if='!showInfo'>  Gizle </span >
    <span v-else>  Göster </span >

   
    </button>
    `,
    data(){
      return { 
        showInfo:true,


      }
    },
    methods:{

      toggle(){
        this.showInfo=!this.showInfo;
      }
    }
  }
);
  
app.mount('.app'); //diyezin olması id olduğu içindi class ise . olmalıdır.

/*
div etiketin arası aslında templetteki html etiketlerinin yerleşeceği yerdir template te budur yani.

*/ 