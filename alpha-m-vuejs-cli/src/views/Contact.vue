<template>
    <!--<form>-->
    <!--<div id='contact-div' style='display: flex; flex-direction: column; align-items: center'>-->
    <!--<h2> Coordonnées</h2>-->
    <!--<p id="prenom">-->
    <!--<label for="prénom"> Prénom*</label>:<input type="text" name="nom"/>-->
    <!--<label for="nom"> Nom</label>:<input type="text" name="prénom"/>-->
    <!--</p>-->
    <!--<p id="adresse">-->
    <!--<label for="adresse" style='flex'> Adresse*</label>:-->
    <!--<input type="text" name="adresse" size="30"/>-->
    <!--</p>-->
    <!--<p id="codep">-->
    <!--<label for="codep"> Code postal </label>:-->
    <!--<input type="text" name="codepostal"/>-->
    <!--<label for="ville"> Ville</label>:-->
    <!--<input type="text" name="ville"/>-->
    <!--</p>-->
    <!--<p id="pays">-->
    <!--<label for="pays"> Pays*</label>:-->
    <!--<input type="text" name="pays"/>-->
    <!--<label for="universite"> Université*</label>:-->
    <!--<input type="text" name="universite"/>-->
    <!--</p>-->
    <!--<p id="telephone">-->
    <!--<label for="telephone"> Téléphone*</label>:-->
    <!--<input type="text" name="telephone"/>-->
    <!--<label for="level"> Niveau</label>:-->
    <!--<input type="text" name="level"/>-->
    <!--</p>-->
    <!--<div style='flex: 1; display: flex; flex-direction: column; '>-->
    <!--<p>Message</p>-->
    <!--<textarea style='width:800px; flex: 1; min-height: 200px'/>-->
    <!--<button @click='validationClick'>Valider</button>-->
    <!--</div>-->
    <!--</div>-->
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap justify-center>
            <v-flex xs12 lg6>
                <v-form ref="form" v-model="valid">
                    <v-text-field lg3
                                  v-model="name"
                                  :rules="nameRules"
                                  :counter="10"
                                  label="Name"
                                  required
                    ></v-text-field>
                    <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="E-mail"
                            required
                    ></v-text-field>
                    <v-textarea
                            v-model="message"
                            label="Message"
                            required
                            auto-grow
                            rows="3"
                    ></v-textarea>


                    <v-btn @click="submit">submit</v-btn>
                    <v-btn @click="clear">clear</v-btn>
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
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
    <!--</form>-->
</template>

<script>
    // @ is an alias to /src
    import axiosInstance from '../services/axiosInstance';

    export default {
        name: 'home',
        data: () => ({
            valid: false,
            name: '',
            nameRules: [
                v => !!v || 'Name is required amigo',
                v => v.length <= 10 || 'Name must be less than 10 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
            message: '',
        }),
        methods: {
            validationClick: function () {
                alert('validation');
            },
            submit() {
                console.log('validation');
                if (this.$refs.form.validate()) {
                    // Native form submission is not yet supported
                    axiosInstance.post('contact', {
                        name: this.name,
                        email: this.email,
                        message: this.message,
                    });
                }
            },
            clear() {
                this.$refs.form.reset();
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
