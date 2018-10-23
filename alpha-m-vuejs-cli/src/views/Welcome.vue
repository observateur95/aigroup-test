<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <h1>{{title}}</h1>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'welcome',
        components: {
        },
        data: function () {
            return {
                title: 'Bienvenue chez Alpha M hehehe'
            }
        }
    }
</script>
