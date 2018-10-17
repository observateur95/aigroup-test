// On crée un objet questionnaire avec un titre et deux questions
// Une question a une ou plusieurs réponses, et une ou plusieurs sont valides.
Vue.component('qcm', {
    template: `<div>
                <h2>{{ question.text }}</h2>


    <ol>
                    <li v-for="response in question.responses">
                        <label>
                            <input type="radio" name="question.name"
                                   v-bind:value="response.correct" 
                                   v-on:change="verif"
                                   > 
                            <span>{{response.text}}</span>
                            <!--<span v-if="response.correct">,{{response.message}}</span>-->
                        </label>
                    </li>
                </ol>
</div>`,
    props: ['question'],
});


Vue.component('quiz', {
    template: `<!-- Titre du quiz -->
            <div>
            <h1>{{ quiz.title }}</h1>
            <!-- Questions: on affiche une div pour chaque question -->
            <div v-for="question in quiz.questions" @click='click-on-choice'>
                <qcm :question='question'></qcm>
            </div>
</div>`,
    props: ['quiz', 'click-on-choice'],
});


var quiz = {
    title: 'Mon questionnaire',
    questions: [
        {
            text: 'Question 1 : 1 + 1',
            name: 'question1',
            responses: [
                {text: '1', message: 'dommage', correct: false},
                {text: '11', message: 'dommage', correct: false},
                {text: '2', message: 'correct', correct: true},
                {text: '10', message: 'dommage', correct: false},
            ],
        }, {
            text: 'Question 2 : 2 + 2',
            name: 'question2',
            responses: [
                {text: '4', message: 'correct', correct: true},
                {text: '9', message: 'dommage', correct: false},
                {text: '7', message: 'dommage', correct: false},
                {text: '3', message: 'dommage', correct: false},
            ],
        },
        {
            text: 'Question 3 : 2 + 1',
            name: 'question3',
            responses: [
                {text: '3', message: 'correct', correct: true},
                {text: '21', message: 'dommage', correct: false},
                {text: '4', message: 'dommage', correct: false},
                {text: '1', message: 'dommage', correct: false},
            ],
        },
    ],
};

var app8 = new Vue({
    el: '#app-8',
    data: {
        quiz: quiz,
        //            userResponses: Array(quiz.questions.length).fill(false)
    }, // On attache le questionnaire à data
    methods: {
        verif: function (event) {
            alert('ras');
        },
    },
});

