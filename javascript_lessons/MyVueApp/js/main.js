(function() {
  'use strict';

  // Components
  // 14 Componentに機能をもたせよう

  var likeComponent = Vue.extend({
    // 16 Propsで値を渡してみよう
    // props: ['message'],
    props: {
      message: {
        type: String,
        default: 'Like'
      }
    },

    // template: '<button>Like</button>'
    // template: '<div><button>Like</button><button>Like</button></div>'
    // 15 いいね！ボタンを実装してみよう
    data: function() {
      return {
        count: 0
      }
    },
    // template: '<button @click="countUp">Like {{ count }}</button>',
    // 16 Propsで値を渡してみよう
    template: '<button @click="countUp">{{ message }} {{ count }}</button>',
    methods: {
      countUp: function() {
        this.count++;
        // 17 $emitを使ってイベントを発火させよう
        this.$emit('increment');
      }
    }

  
  });


  var app = new Vue({
    el: '#app',
    components: {
      'like-component': likeComponent
    },
    // 17 $emitを使ってイベントを発火させよう
    data: {
      total: 0
    },
    methods: {
      incrementTotal: function() {
        this.total++;
      }
    }
  });

})();