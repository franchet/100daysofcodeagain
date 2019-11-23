<template>
    <section id="profile">
        <img :src="user.image" alt="">
        <h3>{{ user.name }}
    </section>
</template>


<script>
export default {
    name: "Profile",
    props: {
        user: Object
    }
}
</script>


<style scoped>
#profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
}

#profile img {
    width: 50%;
    padding: 15px;
}
</style>

