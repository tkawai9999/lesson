(function() {
  "use strict";

  var vm = new Vue({
    el: "#app",
    data: {
      newItem: '',
      //   02 Vue.jsの基本をおさえよう
      //   name: "taguchi"
      //   03 ToDoアプリを作ってみよう
      // todos: ["task 1", "task 2", "task 3"]
      // 07 完了状態を管理してみよう
      // todos: [{
      //   title: 'task 1',
      //   isDone: false
      // }, {
      //   title: 'task 2',
      //   isDone: false
      // }, {
      //   title: 'task 3',
      //   isDone: true
      // }]
    // 13 LocalStorageからデータを読み出してみよう 
    todos: []

      // <!-- 09 v-ifで条件分岐をしてみよう  -->
      // todos: []

    },
    // 12 LocalStorageでデータを永続化させてみよう 
    watch: {
      // todos: function() {
      //   localStorage.setItem('todos', JSON.stringify(this.todos));
      //   alert('Data saved!');
      // }
      todos: {
        handler: function() {
          localStorage.setItem('todos', JSON.stringify(this.todos));
          // alert('Data saved!');
        },
        deep: true
      }
    },
    // 13 LocalStorageからデータを読み出してみよう 
    mounted: function() {
      this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    },


    // 05 v-onでイベントを設定しよう
    methods: {
        // addItem: function(e) {
        //   e.preventDefault();
        //   this.todos.push(this.newItem);
        // }
        addItem: function() {
          // this.todos.push(this.newItem);
          // 07 完了状態を管理してみよう
          var item = {
            title: this.newItem,
            isDone: false
          };
          this.todos.push(item);

          this.newItem = '';
        },
        deleteItem: function(index) {
          if (confirm('are you sure?')) {
            this.todos.splice(index, 1);
          }
        },
        // 11 完了したToDoを一括削除しよう 
        purge: function() {
          if (!confirm('delete finished?')) {
            return;
          }

          // this.todos = this.todos.filter(function(todo) {
          //   return !todo.isDone;
          // });
          this.todos = this.remaining;
        }

      },
      // 10 算出プロパティを使ってみよう
      computed: {
        remaining: function() {
          // var items = this.todos.filter(function(todo) {
          //   return !todo.isDone;
          // });
          // return items.length;
        // 11 完了したToDoを一括削除しよう 
        return this.todos.filter(function(todo) {
            return !todo.isDone;
          });
        }
      }
  

    });
})();
