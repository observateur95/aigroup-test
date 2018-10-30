<template>
    <div class="choice-div">
        <!--<input type='checkbox' :checked='selected'></input>-->
        <div>{{ txtMessage }}</div>
    </div>
    <!--v-on:click="$emit('choice-click',index)" -->

</template>

<script>
    export default {
        name: 'Choice',
        props: {
            txtMessage: String,
            index: Number,
            selected: Boolean,
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .choice-div {
        font-size: 20px;
        color: rgba(43, 43, 45, 0.97);
        display: flex;
        align-items: center;
        justify-content: center;
        /*color: #004444;*/
    }

    input[type='checkbox']  {
        width: 20px;
        height: 20px;
    }

    .selected {
        color: #42b983;
    }

    .good-answer {
        color: green;
    }

    .bad-answer {
        color: red;
    }
</style>
