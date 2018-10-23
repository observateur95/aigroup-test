<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <QCM :question="question" :choices="choices"></QCM>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import Choice from './components/Choice.vue'
    import QCM from './components/QCM.vue'

    export default {
        name: 'app',
        components: {
            HelloWorld,
            Choice,
            QCM,
        },
        methods: {
            handleChoiceClick: index => {
                console.log(index, "has been clicked")
            }
        },
        data: () => {
            return {
                choices: [{title: 'banana'}, {title: 'haricot'}],
                question: "bananna split ?"
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
