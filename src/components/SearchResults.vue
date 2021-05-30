<template>
    <section id="search-results">
        <header class="search-esults-header">
            <h4>About {{totalResults}} Results</h4>
        </header>
        <div class="search-results-container">
            <Video v-for="video in videos" :key="video.id.videoId"  :title="video.snippet.title" :channelTitle="video.snippet.channelTitle" :description="video.snippet.description" :thumb="video.snippet.thumbnails.high.url" />
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
            // searchResults: [],
            totalResults: 0,
            videos: [],
        }
    },
    watch: {
        '$store.state.globalSearchResults': function() {
            // this.searchResults = this.$store.state.globalSearchResults;
            this.totalResults = this.$store.state.globalSearchResults.pageInfo.totalResults;
            this.videos = this.$store.state.globalSearchResults.items;
            console.log(this.videos);
        }
    },
}
</script>
