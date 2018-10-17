<template>
    <div class="qcmview">
        <img alt="Vue logo" src="../assets/logo.png">
        <QCM question="Matières favorites" :choices="choices"/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import QCM from '@/components/QCM.vue'

    export default {
        name: 'qcmview',
        components: {
            QCM,
        },
        data: () => {
            return {

                choices: [{title: 'banana'}, {title: 'haricot'}, {title: 'leolin'}, {title: 'haricot'}],
                question: "bananna split ?"
            }
        }
    }
</script>
