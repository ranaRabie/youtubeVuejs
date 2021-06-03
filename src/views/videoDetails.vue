<template>
    <div class="app-container">
        <div v-if="isLoading" class="loader-container">
            <img src="@/assets/images/loader.gif" alt="" />
        </div>
        <video-single :videoEmbed="videoUrl" :videoData="videoDetails" v-show="!isLoading" />
        <related-videos v-show="!isLoading" />
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
            key: null,
            isLoading: false,
        }
    },
    methods:{
        getVideoContent(){
            this.isLoading = true;
            this.videoId = this.$route.params.id;
            this.key = this.$store.state.youtubeApiKey;
            this.videoUrl = `https://youtube.com/embed/${this.videoId}`;
            const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${this.videoId}&key=${this.key}`;
            this.axios.get(url).then((response) => {
                this.isLoading = false;
                this.videoDetails = response.data.items[0];
            })  
        }
    },
    created(){
        this.getVideoContent();
    },
    watch: { 
        '$store.state.loading': function() {
            this.isLoading = this.$store.state.loading;
        },
        $route(to, from) { 
            if(to !== from){ 
                this.getVideoContent();
            } 
        } 
    }
}
</script>
