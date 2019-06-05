<template>
    <div>
        <input type="text" class="bets" id="pokemon1bet" placeholder='Money on first pokemon...'>
        <input type="text" class="bets" id="pokemon2bet" placeholder='Money on second pokemon...'>
    </div>
</template>

<script>
export default {
    name: 'Bet'
}
</script>

<style scoped>
.bets {
    border: 1px solid black;
}
</style>
