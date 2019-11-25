<template>
    <section id="todos">
        <div class="todo" v-for="(todo) in todos" v-bind:key="todo.id">
            <label>
                <input type="checkbox" name="done" v-if="todo.done" checked> 
                <input type="checkbox" name="done" v-else> {{ todo.name }}
            </label>
        </div>
    </section>
</template>

<script>
export default {
    name: "Todos",
    props: ["todos"]
}
</script>

<style lang="scss" scoped>
    #todos {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;

        .todo {
            width: 24%;            margin: 15px;
            padding: 15px;
            background: #fff
        }
    }

</style>