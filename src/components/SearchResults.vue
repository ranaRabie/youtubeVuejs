<template>
    <section id="search-results" v-if="items.length > 0">
        <header class="search-esults-header">
            <h4>About {{totalResults}} Results</h4>
        </header>
        <div class="search-results-container">
            <div class="video-wrapper" v-for="video in items" :key="video.id.videoId">
                <Video :title="video.snippet.title" :channelTitle="video.snippet.channelTitle" :description="video.snippet.description" :thumb="video.snippet.thumbnails.high.url" v-if="video.id.kind.split('#')[1] == 'video'"/>
                <!-- <PlayListCard :video="video" v-else-if="video.id.kind.split('#')[1] == 'playlist'"/>
                <ChannelCard :video="video" v-else/> -->

            </div>
            
        </div>
    </section>    
</template>

<script>
import Video from '@/components/Video'

export default {
    name: 'SearchResults',
    components:{
        Video,
    },
    data(){
        return{
            totalResults: 0,
            items: [],
        }
    },
    watch: {
        '$store.state.globalSearchResults': function() {
            this.totalResults = this.$store.state.globalSearchResults.pageInfo.totalResults;
            this.items = this.$store.state.globalSearchResults.items;
        },
    },
}
</script>
