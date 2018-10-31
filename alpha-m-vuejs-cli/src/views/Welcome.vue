<template>
    <div id="home">
        <h1 class=text-logo v-html='title'></h1>
        <div id='presentation-div'>{{presentationText}}</div>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'welcome',
        components: {},
        data: function () {
            return {
                title: `Bienvenue chez <span class='text-logo' style='font-family: "Zapfino"'>Alpha M</span>`,
                presentationText: "Cours et QCMs clairs et de qualité \n " +
                "pour une meilleure compréhension des notions étudiées",

            };
        },
    };
</script>


<style scoped=''>
    #home {
        flex:1;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .text-logo {
        font-size: 30px;
        color: #42b983;
        text-decoration: none;
        font-family: 'Zapfino';
    }

    #presentation-div {
        color: #2c3e50;
        white-space: pre;
    }


</style>