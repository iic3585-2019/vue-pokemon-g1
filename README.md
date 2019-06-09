# Apuestas Pokémon

Con este proyecto, lo que quisimos fue simular una plataforma de apuestas, en que se establece una pelea entre dos pokémon contrincantes, y luego los usuarios deben apostar por qué pokémon creen que ganará la batalla. Si aciertan, ganan la cantidad que apostaron. Si no aciertan, pierden la cantidad que apostaron. Después de una batalla aparecerá una nueva y el proceso puede ser repetido nuevamente. Evidentemente, un usuario no puede apostar más que el dinero que tiene disponible.

## Solución

Para resolver el problema, dividimos la aplicación en tres componentes (además de el componente principal `App`). El primero es `Pokemons` que contiene la lógica correspondiente a pedir información a la API y a las batallas entre pokémon. El segundo es `Pokemon`, que se encarga de desplegar la información de cada pokémon en la batalla, además de los mensajes relevantes durante la batalla. El último, `Bet`, se encarga de manejar la lógica relacionada a las apuestas sobre las batallas. El código correspondiente a los componentes se encuentra en la carpeta `src/components`.

Por otra parte, la store de Vuex se modulariza en dos archivos: `pokemon.js` y `bets.js`, ambos en la carpeta de `src/store/modules`. En cada archivo se describen tanto la sección del estado como los métodos sobre esta correspondientes a las batallas y a las apuestas, respectivamente.

## Secciones interesantes

Hay dos secciones del código que queremos destacar, con respecto al desarrollo mediante Vuex. En primer lugar, hay que destacar la forma en la que se consigue mantener ciertas variables del estado actualizadas, con respecto a los valores que se ingresan en los campos de input. Para esto, en vez de tener una variable local y actualizar el valor en el estado global, utilizamos una variable computada y a través de los métodos *getter* y *setter* de la variable recuperamos el valor del estado global y lo actualizamos, respectivamente. Esto se ilustra en el siguiente código.

```html
<template>
    <md-select v-model="selectedPokemon">
        <md-option value="0" v-if="firstPokemon && secondPokemon">{{ firstPokemon.name }} (1)</md-option>
        <md-option value="1" v-if="firstPokemon && secondPokemon">{{ secondPokemon.name }} (2)</md-option>
    </md-select>
    <md-input v-model="bet" type="number"/>
</template>

<script>
export default {
    name: 'Bet',
    computed: {
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
    }
}
</script>
```

En segundo lugar, cabe destacar el uso de módulos en la store de Vuex. Esto se utiliza para modularizar el código y que éste sea más entendible. Sin embargo, resulta más difícil conectar acciones de distintso módulos. La solución que encontramos para este problema fue la de despachar la acción globalmente e indicar el path global de la acción. Esto se ilustra en el siguiente código.

```javascript
dispatch('bets/resolveBet', state.pokemons.indexOf(wins), { root: true });
```

## Instalar dependencias

Es necesario utilizar `yarn`, corriendo el siguiente comando para instalar las dependencias.

```
yarn install
```

### Compila y realiza hot-reload

Para compilar y correr la aplicación con hot-reload se necesita utilizar el siguiente comando. Luego, basta con entrar a `localhost:8080` para utilizar la aplicación.

```
yarn run serve
```
