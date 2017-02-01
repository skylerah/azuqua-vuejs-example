var app = new Vue({
  el: '#app',
  data: {
    tasks: [],
    task: ''
  },
  methods: {
    fetchData: function() {
      var self = this;
      var itemsUrl = 'https://betaapi.azuqua.com/flo/0826d55b09f61e19c3e6cad72dad173e/invoke';
      var xhr = new XMLHttpRequest();
      xhr.open('GET', itemsUrl);
      xhr.onload = function() {
        var parsed = JSON.parse(xhr.responseText);
        for (var item in parsed.body) {
          var value = (parsed.body[item].value);
          self.tasks.push(parsed.body[item]);
        }
      };
      xhr.send();
    },
    newTask: function() {
      var value = this.task;
      var taskObject = {"value": value};
      this.tasks.push(taskObject);
    },
    deleteTask: function() {

    },
    updateTask: function() {

    },
    saveData: function() {
      var itemsUrl = 'https://betaapi.azuqua.com/flo/3a1a687c118ed088a4007f5108dc2386/invoke';
      var xhr = new XMLHttpRequest();
      xhr.open('POST', itemsUrl);
      xhr.setRequestHeader("Content-Type", "application/json");
      var stringifyTasks = JSON.stringify(this.tasks);
      xhr.send(JSON.stringify(stringifyTasks));
    }
  },
  created: function() {
    this.fetchData();
  }
});
