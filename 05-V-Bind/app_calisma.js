const app = Vue.createApp(
  {//ya v bind : stlye = "özellik" şeklinde kullanırız ya da :stlye = "style deyip devam ederiz."
    template:` 
    <div :style = "style"> Deneme Yazısı</div>
  
    `,
    data(){//Burdaki divin içindeki style ağaşıda yazılan styleyi algılamıyor çünkü saçma bişey yolluyoruz. 
      //Devamında v-bind kullanmamız gerekiyor
      return { 
        style :"color:green"
      }
    },
    methods:{
         }
  }
);
  
app.mount('.app'); 