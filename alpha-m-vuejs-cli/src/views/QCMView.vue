<template>
    <div class="qcmview">
        <img alt="Vue logo" src="../assets/logo.png">
        <Quiz question="Matières favorites" :choices="choices" :quiz='quiz'/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue';
    import Quiz from '@/components/Quiz.vue';

    export default {
        name: 'qcmview',
        components: {
            Quiz,
        },
        data: () => {
            return {

                choices: [{title: 'banana'}, {title: 'haricot'}, {title: 'leolin'}, {title: 'haricot'}],
                question: 'bananna split ?',
                quiz: {
                    title: 'Calcul de surface',
                    qcms: [
                        {
                            question: 'Aire d\'un cercle ',
                            id:'1',
                            choices: [
                                {value: '$$2 \\pi R $$ ', message: 'dommage', correct: false},
                                {value: '$$\\pi R^2$$', message: 'dommage', correct: false},
                                {value: '2', message: 'correct', correct: true},
                                {value: 'When $a \\ne 0$, there are two solutions to \\(ax^2 + bx + c = 0\\) and they are\n' +
                                '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$', message: 'dommage', correct: false},
                            ],
                        }, {
                            question: '2 + 2 ? ',
                            id:'2',
                            choices: [
                                {value: '4', message: 'correct', correct: true},
                                {value: '9', message: 'dommage', correct: false},
                                {value: '7', message: 'dommage', correct: false},
                                {value: '3', message: 'dommage', correct: false},
                            ],
                        },
                        {
                            question: '2 + 1',
                            id:'3',
                            choices: [
                                {value: '3', message: 'correct', correct: true},
                                {value: '21', message: 'dommage', correct: false},
                                {value: '4', message: 'dommage', correct: false},
                                {value: '1', message: 'dommage', correct: false},
                            ],
                        },
                    ],
                },
        }
        },
    };
</script>
