<template>
    <div class='flex-container-column'>
        <v-layout row wrap justify-center>
            <v-icon v-if='qcm.showAnswers'
                    :class='this.getQCMScore(this.qcm, this.checkedAnswer) ? "good_answer" : "bad_answer"'>
                {{getQCMScore(this.qcm, this.checkedAnswer) ? 'check' : 'close'}}
            </v-icon>
            <!--<v-icon class='bad_answer'>close</v-icon>-->
            <!--<v-icon class='good_answer'>check</v-icon>-->
            <span class='question'>{{ (qcm.index + 1).toString() + '. ' + qcm.question }}</span>
            <button @click='handleShowCourseClick()' v-if='qcm.showAnswers'>Cours >></button>
        </v-layout>
        <div>
            <Choice v-for="(choice, index) in qcm.choices"
                    :index="index" :choice="choice"
                    :class="setChoiceSelectedClass(index)"
                    :selected="setChoiceSelectedClass(index).selected"
                    :isCorrection='qcm.showAnswers'
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
            return {
                qcmScore: 0,
            };
        },
        methods: {
            handleChoiceClick: function (index = 0) {
                this.$emit('choice-click', this.qcm, index);
            },

            handleShowCourseClick: function () {
                this.$emit('show-course-click', this.qcm);
            },
            setChoiceSelectedClass: function (index) {
                let isChoiceSelected = this.checkedAnswer ? this.checkedAnswer.has(index) : false;
                let isChoiceAGoodAnswer = this.qcm.choices ? this.qcm.choices[index].correct === isChoiceSelected : false;
                return {
                    selected: isChoiceSelected,
                    'good_answer': this.qcm.showAnswers && this.qcm.choices[index].correct && isChoiceSelected,
                    'bad_answer': this.qcm.showAnswers && !isChoiceAGoodAnswer,
                };
            },
            getQCMScore: function (qcm, answersSelected) {
                console.log('loup', qcm, qcm.choices.length, answersSelected);
                for (let i = 0; i < qcm.choices.length; i++) {
                    let answerSelected = answersSelected ? answersSelected.has(i) : false;
                    console.log('bin', qcm.id.toString(), i, qcm.choices[i].correct, answerSelected, qcm.choices[i].correct === answerSelected);
                    if (qcm.choices[i].correct !== answerSelected) {
                        return 0;
                    }
                }
                return 1;
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

    .question {
        font-size: 2rem;
        font-weight: 700;
    }

    .width-50 {
        width: '50%';
    }

    .bad_answer, .v-icon.bad_answer {
        color: red;
    }

    .good_answer, .v-icon.good_answer {
        color: green;
    }

    button {
        width: 200px;
    }

    .v-icon {
        font-size: 30px;
    }
</style>
