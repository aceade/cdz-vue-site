<template>
    <h3>Author's Notes</h3>
    <p v-for="paragraph in notes">{{paragraph}}</p>
</template>
<script>
export default {
    props: {
        notes: Array
    }
}
</script>
<style scoped>
h3 {
    font-family: 'Gaelic', 'serif';
    padding: 10px;
    font-size: 18px;
    font-style: italic;
}
</style>