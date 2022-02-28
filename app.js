const app = new Vue({
    el: '#app',
  
    data:{
      
      newItem: '',
      listItem: [
        {
          text: 'Buttare la spazzatura',
          done: 'false'
        },
        {
          text: 'Svegliarsi presto',
          done: 'false'
        },
        {
          text: 'Allenarsi costantemente',
          done: 'false'
        },
      ]
    },
  
    methods: {
        changeDone: function(item){
          item.done = true;
          console.log('click');
        },
        
        deleteItem: function(i){
          this.listItem.splice(i, 1);
        },
        addItem: function(newItem){
          if(this.newItem !== ''){
            const item = {
              text: this.newItem,
              done: false,
            };
            this.listItem.push(item);
            this.newItem = '';
          }
        },
      }
  })