<template>
    <div class="choice-div" v-on:click="$emit('choice-click',index)">{{ txtMessage }}</div>
</template>

<script>
    export default {
        name: 'Choice',
        props: {
            txtMessage: String,
            index: Number,
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .choice-div {
        font-size: 16px;
        color: #004444;
    }

    .selected {
        font-weight: 800;
    }
</style>
