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
            taskText: ''
        };
    },
    methods: {
        doneOrUndoneTask(taskDone) {
            let lineThrowClass;
            if (taskDone.done) {
                lineThrowClass = 'text-decoration-line-through'
            }
            return lineThrowClass;
        },
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
            }
        }
    }
}).mount('#app');