<template>
    <header>
        <div class="logo">
            <img src="" alt="VueJS Logo">
        </div>

        <div>
            <title>
                <h1>{{title}}</h1>
            </title>
            <div class="filler"></div>
        </div>
    </header>
</template>


<script>
export default {
name: "Header",
props: {
    title: String
}    
}
</script>

<style scoped>

    header {
        width: 100%;
        height: 60px;
        background: #171717;

        padding: 15px;
        
        display: flex;
        justify-content: center;
        align-items: center; 
    }


    .logo {
        flex: 1;
    }

    .logo img {
        height: 30px;
    }

    .title {
        flex: 3;
    }


    .title h1 {
        color: #F3F3F3;
        font-size: 28px;
        line-height: 60px;
        font-weight: 300; 
    }

    .filler {
        flex: 1;
    }


</style>