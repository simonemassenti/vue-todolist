const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            newTask : "",
            taskList : []
        }
    },
    methods : {
        getNewTask : function() {
            this.taskList.push(this.newTask)
            this.newTask = "";
        },
        deleteTask : function(i) {
            this.taskList.splice(i,1);
        }
    }
}).mount("#app")