<template>
    <div id="qcmview" class='background-color-grey'>
        <v-layout row wrap>
            <v-flex :lg6='!!courseToShow'>
                <Quiz question="Matières favorites"
                      :choices="choices" :quiz='quiz'
                      @show-course='showCourse'
                />
            </v-flex>

            <v-layout v-if='!!courseToShow' justify-center align-center>
                <v-flex v-html='courseToShowHTML'></v-flex>
            </v-layout>
        </v-layout>
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
        mounted: function () {
            console.log('update');
            this.refreshMathJax();
            //            setTimeout(() => {MathJax.Hub.Queue(['Typeset', MathJax.Hub]);}, 100);
        },
        methods: {
            showCourse: function (course_section_id) {
                let course_section_id_splitted = course_section_id.split('/');
                let course_id = course_section_id_splitted[0];
                let section_id = course_section_id_splitted[1];
                let courseToShowNormally = this.courses_details
                                               .find(course => course.id === course_id).sections
                                               .find(section => section.id === section_id);
                this.courseToShow = courseToShowNormally || null;
                this.courseToShowHTML = `<span class='primary-color' v-if='courseToShow.id !== null'>Section ${this.courseToShow.id}</span>
                <div>${this.courseToShow.text}</div>`
                this.refreshMathJax();
            },
            refreshMathJax: function() {
                setTimeout(() => {MathJax.Hub.Queue(['Typeset', MathJax.Hub]);}, 100);
            }
        },
        data: () => {
            return {
                courseToShow: null,
                courseToShowHTML: null,

                courses: [{
                    id: '0', title: 'calcul de surface',
                    description: 'Apprenez à calculer des surfaces simples',
                }],
                courses_details: [{
                    id: '0', sections: [
                        {id: '1', text: 'La surface d\'un cercle de rayon R est $$\\pi R^2 $$'},
                        {
                            id: '0',
                            text: 'La surface d\'un triangle est $$ \\frac{base * hauteur}{2} $$',
                        },
                        {
                            id: '2',
                            text: 'La surface d\'un carré est $$ coté * coté $$',
                        },
                        {id: '3', text: 'Ceci est une évidence ! Ne vous moquez pas de nous svp'},
                    ],
                }],
                choices: [{title: 'banana'}, {title: 'haricot'}, {title: 'leolin'}, {title: 'haricot'}],
                question: 'bananna split ?',
                quiz: {
                    course_id: '0',
                    title: 'Calcul de surface',
                    qcms: [
                        {
                            question: 'Aire d\'un cercle ',
                            id: '0',
                            course_section_id: '0/1',
                            choices: [
                                {value: '$$2 \\pi R $$ ', message: 'dommage', correct: false},
                                {value: '$$\\pi R^2$$', message: 'dommage', correct: true},
                                {value: '$$2 \\pi$$', message: 'correct', correct: false},
                                //                                {value: 'When $a \\ne 0$, there are two solutions to \\(ax^2 + bx + c = 0\\) and they are\n' +
                                //                                '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$', message: 'dommage', correct: false},
                            ],
                        }, {
                            question: 'Aire d\'un carre ',
                            id: '1',
                            course_section_id: '0/2',
                            choices: [
                                {value: '$$\\frac{base * hauteur}{2}$$ ', message: 'dommage', correct: false},
                                {value: '$$base * hauteur$$', message: 'dommage', correct: false},
                                {value: '$$cote * cote$$', message: 'correct', correct: true},
                            ],
                        }, {
                            question: '2 + 2 ? ',
                            id: '2',
                            course_section_id: '0/3',
                            choices: [
                                {value: '4', message: 'correct', correct: true},
                                {value: '9', message: 'dommage', correct: false},
                                {value: '7', message: 'dommage', correct: false},
                                {value: '3', message: 'dommage', correct: false},
                            ],
                        },
                        {
                            question: '2 + 1',
                            id: '3',
                            course_section_id: '0/3',
                            choices: [
                                {value: '3', message: 'correct', correct: true},
                                {value: '21', message: 'dommage', correct: false},
                                {value: '4', message: 'dommage', correct: false},
                                {value: '1', message: 'dommage', correct: false},
                            ],
                        },
                    ],
                },
            };
        },
    };
</script>

<style scoped>

</style>
