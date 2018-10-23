<template>
    <div>
        <h1>{{ question }}</h1>
        <div>
            <Choice v-for="(choice , index) in choices"
                    :index="index" :txtMessage="choice.title" :class="setChoiceSelectedClass(index)"
                    v-on:choice-click='handleChoiceClick'></Choice>
        </div>
    </div>
</template>

<script>
    import Choice from './Choice.vue'

    export default {
        name: 'QCM',
        components: {
            Choice,
        },
        props: {
            question: String,
            choices: Array,
        },

        data: function () {
            return {
                checkedAnswer: new Set()
            }
        }, methods: {
            handleChoiceClick: function (index) {
                let checkedAnswerArray = new Set(this.checkedAnswer)
                checkedAnswerArray.has(index) ?
                    checkedAnswerArray.delete(index) :
                    checkedAnswerArray.add(index);
                this.checkedAnswer = checkedAnswerArray;
            },
            setChoiceSelectedClass: function (index) {
                return  {selected: this.checkedAnswer.has(index)}
            }
        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
