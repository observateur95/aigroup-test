<template>

    <v-app>
        <v-navigation-drawer
                id='nav'
                :clipped="$vuetify.breakpoint.lgAndUp"
                v-model="drawer"
                fixed
                app
        >
            <v-list>
                <template v-for="item in items">
                    <v-layout
                            v-if="item.heading"
                            :key="item.heading"
                            row
                            align-center
                    >
                        <v-flex xs6>
                            <v-subheader v-if="item.heading">
                                {{ item.heading }}
                            </v-subheader>
                        </v-flex>
                        <v-flex xs6 class="text-xs-center">
                            <a href="#!" class="body-2 black--text">EDIT</a>
                        </v-flex>
                    </v-layout>
                    <v-list-group
                            v-else-if="item.children"
                            v-model="item.model"
                            :key="item.text"
                            :prepend-icon="item.model ? item.icon : item['icon-alt']"
                            append-icon=""
                    >
                        <v-list-tile slot="activator">
                            <v-list-tile-content>
                                <v-list-tile-title>
                                    {{ item.text }}
                                </v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile
                                v-for="(child, i) in item.children"
                                :key="i"
                                @click=""
                        >
                            <v-list-tile-action v-if="child.icon">
                                <v-icon>{{ child.icon }}</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>
                                    {{ child.text }}
                                </v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list-group>
                    <v-list-tile v-else :key="item.text" @click.native="navigateTo(item.redirectTo)">
                        <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                <!--{{ item.text }}-->
                                <router-link :to="item.redirectTo" :exact='item.exact'>{{ item.text }}</router-link>
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar
                :clipped-left="$vuetify.breakpoint.lgAndUp"
                dark
                app
                fixed
        >
            <v-toolbar-title class="ml-0 pr-3">
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>


            </v-toolbar-title>
            <span style='flex: 1;' id='text-logo' class='hidden-sm-and-down'>
            <router-link to="/">AlphaM</router-link>
            </span>
        </v-toolbar>
        <v-content>
            <v-container fluid fill-height class='background-color-grey'>
                <v-layout justify-center align-center>
                    <v-flex text-xs-center>
                        <router-view/>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
        <v-footer app>
            <v-layout justify-center align-center>
                <span>Conditions d'utilisation </span>
                <span> &nbsp; FAQ</span>
                <span> &nbsp; &copy; 2018</span>
            </v-layout>
        </v-footer>
    </v-app>
</template>

<script>


    import router from './router';

    export default {
        data: () => ({
            dialog: false,
            drawer: null,
            //        Pour les icons, aller sur https://material.io/tools/icons/
            items: [
                {icon: 'home', text: 'AlphaM', redirectTo: '/', exact:true},
                {icon: 'apps', text: 'Cours', redirectTo: '/library'},
                {icon: 'poll', text: 'QCM', redirectTo: '/qcm'},
                {icon: 'contact_support', text: 'Contact', redirectTo: '/contact'},
                //                {icon: 'contacts', text: 'Cours', redirectTo: 'Courses'},
                //                {icon: 'history', text: 'Frequently contacted'},
                //                {icon: 'content_copy', text: 'Duplicates'},
                //                {
                //                    icon: 'keyboard_arrow_up',
                //                    'icon-alt': 'keyboard_arrow_down',
                //                    text: 'Labels',
                //                    model: true,
                //                    children: [
                //                        {icon: 'add', text: 'Create label'},
                //                    ],
                //                },
                //                {
                //                    icon: 'keyboard_arrow_up',
                //                    'icon-alt': 'keyboard_arrow_down',
                //                    text: 'More',
                //                    model: false,
                //                    children: [
                //                        {text: 'Import'},
                //                        {text: 'Export'},
                //                        {text: 'Print'},
                //                        {text: 'Undo changes'},
                //                        {text: 'Other contacts'},
                //                    ],
                //                },
                //                {icon: 'settings', text: 'Settings'},
                //                {icon: 'chat_bubble', text: 'Send feedback'},
                //                {icon: 'help', text: 'Help'},
                //                {icon: 'phonelink', text: 'App downloads'},
                //                {icon: 'keyboard', text: 'Go to the old version'},
                //                {icon: 'settings', text: 'Settings', heading: 'nananan'},
            ],
        }),
        props: {
            source: String,
        },
        methods : {
            navigateTo: function(url) {
                router.push(url);
                console.log('click');
            }
        }
    };
</script>

<style scoped>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        font-size: 24px;
    }

    #nav {
        padding: 5px 30px;
        align-items: center;
        display: flex;
        font-size: 26px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
        text-decoration: none;
    }

    #nav a.router-link-active {
        color: #42b983;
    }

    .v-icon {
        font-size: 30px;

    }

    #nav .v-list__tile__content {
        font-size: 25px;
    }

    #text-logo a {
        font-size: 30px;
        color: #42b983;
        font-weight: 900;
        text-decoration: none;
        font-family: 'Zapfino';
        position: relative;
        top: 15px;
    }

    .v-content__wrap {
        background-color: rgb(250, 57, 117)
    }

    .v-list {
        width:100%;
    }
</style>

<!--<template>-->
<!--<v-app>-->
<!--<v-toolbar app>-->
<!--<v-toolbar-title class="headline text-uppercase">-->
<!--<span>Vuetify</span>-->
<!--<span class="font-weight-light">MATERIAL DESIGN</span>-->
<!--</v-toolbar-title>-->
<!--<v-spacer></v-spacer>-->
<!--<v-btn-->
<!--flat-->
<!--href="https://github.com/vuetifyjs/vuetify/releases/latest"-->
<!--target="_blank"-->
<!--&gt;-->
<!--<span class="mr-2">Latest Release</span>-->
<!--</v-btn>-->
<!--</v-toolbar>-->

<!--<v-content>-->
<!--<HelloWorld/>-->
<!--</v-content>-->
<!--</v-app>-->
<!--</template>-->

<!--<script>-->
<!--import HelloWorld from './components/HelloWorld'-->

<!--export default {-->
<!--name: 'App',-->
<!--components: {-->
<!--HelloWorld-->
<!--},-->
<!--data () {-->
<!--return {-->
<!--//-->
<!--}-->
<!--}-->
<!--}-->
<!--</script>-->
