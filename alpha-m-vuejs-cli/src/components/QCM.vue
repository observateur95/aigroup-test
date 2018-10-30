<template>
    <div class='flex-container-column'>
        <h1>{{ question }}</h1>
        <div>
            <Choice v-for="(choice , index) in choices"
                    :index="index" :txtMessage="choice.title" :class="setChoiceSelectedClass(index)"
                    v-on:choice-click='handleChoiceClick'
                    color='good_answer'></Choice>
        </div>
        <div>
            <button @click='validateChoices'>Valider</button>
            <button>Retour</button>
            <button>Aller au cours</button>
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
            question: String,
            choices: Array,
        },

        data: function () {
            return {
                checkedAnswer: new Set(),
            };
        },

        methods: {
            handleChoiceClick: function (index) {
                let checkedAnswerArray = new Set(this.checkedAnswer);
                checkedAnswerArray.has(index) ?
                    checkedAnswerArray.delete(index) :
                    checkedAnswerArray.add(index);
                this.checkedAnswer = checkedAnswerArray;
            },
            setChoiceSelectedClass: function (index) {
                return {selected: this.checkedAnswer.has(index)};
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
