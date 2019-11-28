<template>
    <div class="camera">
        <video autoplay class="feed"></video>
        <button class="snap">SNAP</button>
    </div>
</template>


<script>
export default {
    name: "app"

}
</script>

<style lang="scss" scoped>

.camera {
    width: 100vw;
    height: 100vh;

    .feed {
        display: block;
        width: 100%;
        max-width: 1280px;

        margin: 0 auto;

        box-shadow: 4px 4px 12px 0px rgba(0, 0, 0, 0.25);
        }
}
</style>