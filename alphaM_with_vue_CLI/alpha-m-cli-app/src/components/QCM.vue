<template>
    <div v-on:click="$emit('choice-click',index)" class="hello">
        <h1>{{ txtMessage }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            txtMessage: String,
            index: String,
            clickOnChoice: Function
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
