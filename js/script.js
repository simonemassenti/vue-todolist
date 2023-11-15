const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            task : {
                text : "",
                done : false
            },
            taskList : []
        }
    },
    methods : {
        getNewTask : function() {
            this.taskList.push({...this.task});
            this.task.text = "";
        },
        deleteTask : function(i) {
            this.taskList.splice(i,1);
        },
        doneUndone : function(i) {
            this.taskList[i].done = !this.taskList[i].done;
        }
    }
}).mount("#app")