<template>
    <div class='flex-container-column'>
        <h1>{{ quiz.title }}</h1>
        <QCM v-for='(qcm, index) in quiz.qcms'
             @choice-click='handleChoiceClick'
             @show-course-click='handleShowCourseClick'
             :checkedAnswer='checkedAnswer[qcm.id]'
             :qcm='qcmToSend(qcm,index,quizValidated)'></QCM>

        <div>
            <button @click='validateChoices'>Valider</button>
            <button @click='resetQuiz'>Recommencer</button>
        </div>
        <div v-if='quizValidated'>
            {{getGoodAnswersNumber()}}
        </div>
    </div>
</template>

<script>
    import QCM from './QCM.vue';

    export default {
        name: 'Quiz',
        components: {
            QCM,
        },
        props: {
            question: String,
            choices: Array,
            quiz: Object,
        },

        data: function () {
            return {
                checkedAnswer: {},
                quizValidated: false,
                goodAnswers: 0,
            };
        },

        methods: {
            qcmToSend: function (qcm, index, quizValidated) {
                return Object.assign({}, qcm, {index: index, showAnswers: quizValidated});
            },
            handleChoiceClick: function (qcm, index) {
                if (this.quizValidated) return;
                let allCheckedAnswer = Object.assign({}, this.checkedAnswer);
                if (!allCheckedAnswer.hasOwnProperty(qcm.id)) {
                    allCheckedAnswer[qcm.id] = new Set();
                }
                let qcmClickedCheckedAnswerArray = allCheckedAnswer[qcm.id];
                if (!qcmClickedCheckedAnswerArray) return;
                qcmClickedCheckedAnswerArray.has(index) ?
                    qcmClickedCheckedAnswerArray.delete(index) :
                    qcmClickedCheckedAnswerArray.add(index);
                this.checkedAnswer = allCheckedAnswer;
                console.log(qcm, index, this.checkedAnswer);

            },
            handleShowCourseClick: function (qcm) {
                this.$emit('show-course', qcm.course_section_id);
            },
            validateChoices: function () {
                this.quizValidated = true;
                console.log(this.checkedAnswer);
                console.log(Array.from(this.checkedAnswer).map(x => {
                    return JSON.stringify(this.choices[x]);
                }));
            },
            resetQuiz: function () {
                this.quizValidated = false;
                this.checkedAnswer = {};
            },
            showClicked: function (qcm, index) {
                console.log(qcm, index, 'yeah');
            },
            //answerSleeceted is a set
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
            getGoodAnswersNumber: function () {
                if (!this.quizValidated) {
                    return null;
                }
                let score = 0;
                for (const qcm0 of  this.quiz.qcms) {
                    score += this.getQCMScore(qcm0, this.checkedAnswer[qcm0.id]);
                }
                this.goodAnswersNumber = score;
                return score > 1 ? `Vous avez ${score} bonnes réponses` : `Vous avez ${score} bonne réponse`;
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
