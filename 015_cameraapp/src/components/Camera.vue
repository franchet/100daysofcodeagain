<template>
    <div class="camera">
        <video autoplay class="feed"></video>
        <button class="snap">SNAP</button>
    </div>
</template>


<script>
export default {
    name: "camera",
    method: {
        init () {
            if ('mediadevices' in navigator && 'getusermedia' in navigator.mediaDevices) {
                navigator.mediaDevices.getUserMedia((video: true)).then(stream => {
                    const videoPlayer = document.querySelector("video");
                    videoPlayer.srcObject = stream;
                    videoPlayer.play();
                    });
                    } else {
                        alert("Cannot get media devices");
                        }
        }
    }
}


</script>

<style lang="scss" scoped>

.camera {
    width: 80vw;
    height: 100vh;
    padding: 25px;
    box-sizing: border-box;

    margin: 0 auto;

    .feed {
        display: block;
        width: 100%;
        max-width: 1280px;

        

        background-color: #171717; 
        box-shadow: 4px 4px 12px 0px rgba(0, 0, 0, 0.35);
    }
 
    .snap {
        display: block;

        width: 75px;
        height: 75px;
        border-radius: 50%;

        margin: 25px auto;

        background-color: transparentize($color: #ffce00, $amount: 0.5);
        border: 1px solid #171717;
        outline: none;

        cursor: pointer;

        &:hover {
            background-color: rgb(145, 125, 13)
        }

        &:active {
            background-color: darken($color: #ffce00, $amount: 10);
        }
    }
}

</style>