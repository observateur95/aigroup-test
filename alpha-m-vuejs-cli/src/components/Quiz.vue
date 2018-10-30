<template>
    <div class='flex-container-column'>
        <h1>{{ quiz.title }}</h1>
        <QCM v-for='(qcm, index) in quiz.qcms'
             @choice-click='handleChoiceClick'
             :checkedAnswer='checkedAnswer[qcm.id]'
             :qcm='qcmToSend(qcm,index,quizValidated)'></QCM>

        <div>
            <button @click='validateChoices'>Valider</button>
            <button>Retour</button>
            <button>Aller au cours</button>
        </div>
        <div v-if='quizValidated'>
            Vous avez un certain nombre de bonnes réponses
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
            qcmToSend: function(qcm,index,quizValidated) {
                return Object.assign({},qcm,{index:index, showAnswers:quizValidated})
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
                console.log(qcm,index, this.checkedAnswer);

            },
            setChoiceSelectedClass: function (index) {
                return {selected: this.checkedAnswer.has(index)};
            },
            validateChoices: function () {
                this.quizValidated = true;
                console.log(this.checkedAnswer);
                console.log(Array.from(this.checkedAnswer).map(x => {
                    return JSON.stringify(this.choices[x]);
                }));
            },
            showClicked: function (qcm, index) {
                console.log(qcm, index, 'yeah');
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
