const app = Vue.createApp(
  {//ya v bind : stlye = "özellik" şeklinde kullanırız ya da :stlye = "style deyip devam ederiz."
    template:` 
    <div v-bind:style = "style"> Deneme Yazısı</div>
  
    `,
    data(){//Burdaki divin içindeki style ağaşıda yazılan styleyi algılamıyor çünkü saçma bişey yolluyoruz. 
      //Devamında v-bind kullanmamız gerekiyor
      return { 
        style :"color:aqua"
      }
    },
    methods:{
         }
  }
);
  
app.mount('.app'); 