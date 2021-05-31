<template>
    <div id="related-videos">
        <article class="video-wrapper" v-for="video in items" :key="video.id.videoId" :id="video.id.videoId">
            <video-item :video="video" v-if="video.id.kind.split('#')[1] == 'video'"/>
        </article>
    </div>
</template>

<script>
import VideoItem from '@/components/Video/VideoItem'

export default {
    name: 'RelatedVideos',
    components:{
        VideoItem
    },
    data(){
        return{
            relatedVideoId: null,
            items: [],
            key: null,
        }
    },
    created(){
        this.relatedVideoId = this.$route.params.id;
        this.key = this.$store.state.youtubeApiKey;
        const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${this.relatedVideoId}&type=video&key=${this.key}`;
        this.axios.get(url).then((response) => {
            this.items = response.data.items;
        })  
    }
}
</script>
