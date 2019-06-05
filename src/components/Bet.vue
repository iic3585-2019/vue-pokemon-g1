<template>
    <div>
        <div class="bet-inputs">
            <md-field class="bet-field">
                <label>¿Quién triunfará?</label>
                <md-select v-model="selectedPokemon">
                    <md-option value="0" v-if="firstPokemon && secondPokemon">{{ firstPokemon.name }} (1)</md-option>
                    <md-option value="1" v-if="firstPokemon && secondPokemon">{{ secondPokemon.name }} (2)</md-option>
                </md-select>
            </md-field>
            <md-field class="bet-field">
                <label>¿Cuánto quieres apostar?</label>
                <md-input v-model="bet" type="number" min=0 :max="this.netBalance"/>
            </md-field>
        </div>
        <md-card id="balance">
            <md-card-header id="balance-header">
                <md-card-header-text>
                    <h4>Balance de la cuenta</h4>
                </md-card-header-text>
            </md-card-header>
            <h5>{{ this.netBalance }}</h5>
        </md-card>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Bet',
    computed: {
        ...mapGetters('pokemon', ['firstPokemon', 'secondPokemon']),
        ...mapGetters('bets', ['selPokemon', 'betAmount', 'netBalance']),
        selectedPokemon: {
            get() {
                return this.selPokemon;
            },
            set(value) {
                this.changeSelectedPokemon(+value);
            }
        },
        bet: {
            get() {
                return this.betAmount;
            },
            set(value) {
                this.changeAmount(value === '' ? value : (value < 0 ? '0' : (value > this.netBalance ? `${this.netBalance}` : value)));
            }
        }
    },
    methods: {
        ...mapActions('bets', ['changeAmount', 'changeSelectedPokemon'])

    }
}
</script>

<style scoped>
.bet-inputs {
    display: flex;
    justify-content: center;
    max-width: 40%;
    margin: auto;
    flex-direction: row;
    margin-top: 2em;
}
.bet-field {
    margin: 1em;
}
#balance {
    max-width: 80%;
    margin: 1em auto;
}
#balance-header {
    padding: 0;
}
h5 {
    padding: 0 0 1em 0;
}
</style>
