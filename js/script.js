const { createApp } = Vue;

createApp({
    data() {
        return {
            tasks: [
                {
                    text: 'Fare le pulizie',
                    done: false,
                },
                {
                    text: 'Comprare il latte',
                    done: true,
                },
                {
                    text: 'Guardare la To Do list',
                    done: false,
                },
                {
                    text: 'Andare a giocare a calcetto',
                    done: false,
                },
                {
                    text: 'Scendere in garage',
                    done: true,
                }
            ],
            isError: false,
            taskText: ''
        };
    },
    methods: {
        removeTask(taskIndex) {
            this.tasks.splice(taskIndex, 1);
        },
        addTask() {
            const taskTextTrimmed = this.taskText.trim();
            let newTask;
            if (taskTextTrimmed.length >= 5) {
                newTask = Object.apply(this.tasks, [{ text: taskTextTrimmed, done: false }])
                this.tasks.push(newTask);
                this.taskText = '';
                this.isError = false;
            } else {
                this.isError = true;
            }
        },
        checkTask(taskDone) {
            if (taskDone.done) {
                taskDone.done = false;
            } else {
                taskDone.done = true;
            }
        }
    }
}).mount('#app');