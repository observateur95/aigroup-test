<template>
    <div id="library-view" class='background-color-grey'>

        <v-layout row wrap>
            <v-flex lg4 md6 sm12>
                <v-list>
                    <template v-for="course in courses">
                        <v-list-tile :key="course.id" @click="selectCourse(course.id)">
                            <v-list-tile-content :class='{selected : course.id === courseSelectedId}'>
                                <v-list-tile-title>
                                    <!--{{ item.text }}-->
                                    {{course.id + '-' + course.title}} <br/>
                                </v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </template>
                </v-list>
            </v-flex>

            <v-flex v-if='courseSelectedId' lg4 md6 sm12>
                <div class='course-description'>{{retrieveDescription(courseSelected)}}</div>
                <div v-for='courseSection in courseSectionsSelected'>
                    <span class='primary-color-green' v-if='courseSection.id !== null'>Section {{courseSection.id}}</span>
                    <div>{{courseSection.text}}</div>
                </div>
                <div v-if='!courseSectionsSelected || !courseSectionsSelected.length'>Aucune section</div>
                <router-link v-if='courseSectionsSelected && courseSectionsSelected.length '
                             :to="'qcm/' + courseSelectedId">Aller au QCM
                </router-link>

            </v-flex>
        </v-layout>

    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue';
    import Quiz from '@/components/Quiz.vue';

    export default {
        name: 'library',
        components: {
            Quiz,
        },
        methods: {
            selectCourse: function (id) {
                this.courseSelectedId = id;

                let courseFound = this.courses.find(x => x.id === id);
                this.courseSelected = courseFound || null;
                let courseSectionsFound = this.courses_sections.find(x => x.id === id);
                this.courseSectionsSelected = courseSectionsFound && courseSectionsFound.sections ? courseSectionsFound.sections.sort((x, y) => x.id > y.id) : [];
                setTimeout(() => {MathJax.Hub.Queue(['Typeset', MathJax.Hub]);}, 100);
            },
            retrieveDescription: function (courseSelected) {
                return courseSelected && courseSelected.description ? courseSelected.description : 'No description';
            },
        },
        data: () => {
            return {
                courseSelectedId: null,
                courseSelected: null,
                courseSectionsSelected: null,
                courses: [
                    {
                        id: '0', title: 'Calcul de surface',
                        description: 'Apprenez à calculer des surfaces simples',
                    },
                    {id: '1', title: 'Cours nul'},
                ],
                courses_sections: [{
                    id: '0', sections: [
                        {id: '1', text: 'La surface d\'un cercle de rayon R est de $$ \\pi R^2 $$'},
                        {
                            id: '0',
                            text: 'La surface d\'un triangle est $$ \\frac{base * hauteur}{2} $$',
                        },
                        {id: '2', text: 'La surface d\'un carré est de $$ coté * coté $$'},
                        {id: '3', text: 'Ceci est une évidence ! Ne vous moquez pas de nous svp'},
                    ],
                }],
            };
        },
    };
</script>

<style scoped>
    .selected {
        color: #42b983;
    }

    #library-view {
        align-items: flex-start;
    }

    .course-description {
        font-weight: 800;
    }
</style>
