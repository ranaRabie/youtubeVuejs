<template>
    <div class="app-container">
        <video-single :videoEmbed="videoUrl" :videoData="videoDetails" />
        <related-videos />
    </div>
</template>

<script>
import VideoSingle from '@/components/Video/VideoSingle'
import RelatedVideos from '@/components/Video/RelatedVideos'

export default {
    name: 'videoDetails',
    components:{
        VideoSingle,
        RelatedVideos
    },
    data(){
        return{
            videoId: null,
            videoDetails: null,
            videoUrl: null,
            key: null
        }
    },
    created(){
        this.videoId = this.$route.params.id;
        this.key = this.$store.state.youtubeApiKey;
        this.videoUrl = `https://youtube.com/embed/${this.videoId}`;
        const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${this.videoId}&key=${this.key}`;
        this.axios.get(url).then((response) => {
            this.videoDetails = response.data.items[0];
        })  
    }
}
</script>
