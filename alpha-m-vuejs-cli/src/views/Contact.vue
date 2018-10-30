<template>
    <form>
        <div id='contact-div' style='display: flex; flex-direction: column; align-items: center'>
            <h2> Coordonnées</h2>
            <p id="prenom">
                <label for="prénom"> Prénom*</label>:<input type="text" name="nom"/>
                <label for="nom"> Nom</label>:<input type="text" name="prénom"/>
            </p>
            <p id="adresse">
                <label for="adresse" style='flex'> Adresse*</label>:
                <input type="text" name="adresse" size="30"/>
            </p>
            <p id="codep">
                <label for="codep"> Code postal </label>:
                <input type="text" name="codepostal"/>
                <label for="ville"> Ville</label>:
                <input type="text" name="ville"/>
            </p>
            <p id="pays">
                <label for="pays"> Pays*</label>:
                <input type="text" name="pays"/>
                <label for="universite"> Université*</label>:
                <input type="text" name="universite"/>
            </p>
            <p id="telephone">
                <label for="telephone"> Téléphone*</label>:
                <input type="text" name="telephone"/>
                <label for="level"> Niveau</label>:
                <input type="text" name="level"/>
            </p>
            <div style='flex: 1; display: flex; flex-direction: column; '>
                <p>Message</p>
                <input type='textarea' style='width:800px; flex: 1; min-height: 300px'/>
                <button @click='validationClick'>Valider</button>
            </div>
        </div>
        <!--<h2> Paiement</h2>-->
        <!--Montant de votre première échéance: 1000FCFA-->
        <!--<div>-->
        <!--Choix du paiement:-->
        <!--<p>-->
        <!--<input type="radio" name="paiement" value="carte" id="carte"/><label for="carte">Carte bancaire</label>-->
        <!--<input type="radio" name="paiement" value="om" id="om"/><label for="om">Orange money</label>-->
        <!--<input type="radio" name="paiement" value="momo" id="momo"/><label for="momo">MTN mobile money</label>-->
        <!--<input type="radio" name="paiement" value="eu" id="eu"/><label for="eu">Express Union mobile money</label>-->
        <!--</p>-->
        <!--</div>-->
    </form>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'home',
        methods: {
            validationClick: function () {
                alert('validation');
            },
        },
    }
    ;
</script>


<style scoped>

    #contact-div > p {
        flex: 1;
        display: flex;
    }

    #contact-div > p * {
        flex: 1;
    }
</style>
