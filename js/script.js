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
            ]
        };
    },
    methods: {},
    created() {
    }
}).mount('#app');