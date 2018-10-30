<template>
    <div class='flex-container-column'>
        <h1>{{ (qcm.index + 1).toString() +  '. ' + qcm.question }}</h1>
        <div>
            <Choice v-for="(choice, index) in qcm.choices"
                    :index="index" :txtMessage="choice.value"
                    :class="setChoiceSelectedClass(index)"
                    :selected = "setChoiceSelectedClass(index).selected"
                    @click.native='handleChoiceClick(index)'></Choice>
        </div>
    </div>
</template>

<script>
    import Choice from './Choice.vue';

    export default {
        name: 'QCM',
        components: {
            Choice,
        },
        props: {
            qcm: Object,
            checkedAnswer: Set,
        },
        data: function () {
            return {};
        },
        methods: {
            handleChoiceClick: function (index=0) {
                this.$emit('choice-click' ,this.qcm, index);
            },
            setChoiceSelectedClass: function (index) {
                let isChoiceSelected = this.checkedAnswer ? this.checkedAnswer.has(index) : false;
                let isChoiceAGoodAnswer = this.qcm.choices ? this.qcm.choices[index].correct === isChoiceSelected : false ;
                return {
                    selected: isChoiceSelected,
                    'good-answer': this.qcm.showAnswers && isChoiceAGoodAnswer,
                    'bad-answer': this.qcm.showAnswers && !isChoiceAGoodAnswer,
                };
            },
            validateChoices: function () {
                console.log(this.checkedAnswer);
                console.log(Array.from(this.checkedAnswer).map(x => {
                    return JSON.stringify(this.choices[x]);
                }));
            },
        },

    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .flex-container {
        display: flex;
    }

    .flex-container-column {
        display: flex;
        flex-direction: column;
    }

    .width-50 {
        width: '50%';
    }

    .bad_anwer {
        color: red;
    }

    .good_answer {
        color: green;
    }

    button {
        width: 200px;
    }
</style>
