<template>
    <div class="choice-div">
        <!--<input type='checkbox' :checked='selected'></input>-->
        <v-icon v-if='isCorrection' :class='this.selected === this.choice.correct ? "good_answer" : "bad_answer"'>
            {{choice.correct === selected ? 'check' : 'close'}}
        </v-icon>
        <div>{{ choice.value }}</div>
    </div>
    <!--v-on:click="$emit('choice-click',index)" -->

</template>

<script>
    export default {
        name: 'Choice',
        props: {
            choice: Object,
            index: Number,
            selected: Boolean,
            isCorrection: Boolean,
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

    input[type='checkbox'] {
        width: 20px;
        height: 20px;
    }

    .selected {
        color: #f5b043;
        font-weight: 800;
    }

    .bad_answer, .v-icon.bad_answer {
        color: red;
    }

    .good_answer, .v-icon.good_answer {
        color: green;
    }
</style>
