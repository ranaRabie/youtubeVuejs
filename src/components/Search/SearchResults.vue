<template>
    <section id="search-results" v-if="items.length > 0">
        <header class="search-esults-header">
            <h4>About {{totalResults}} Results</h4>
        </header>
        <div class="search-results-container">
            <article class="video-wrapper" v-for="video in items" :key="video.id.videoId" :id="video.id.videoId">
                <video-item :video="video" v-if="video.id.kind.split('#')[1] == 'video'"/>
                <channel-item :channel="video" v-if="video.id.kind.split('#')[1] == 'channel'"/>
                <!-- <PlayListCard :video="video" v-else-if="video.id.kind.split('#')[1] == 'playlist'"/>
                <ChannelCard :video="video" v-else/> -->

            </article>
            
        </div>
        <a v-on:click="loadMore()" class="load-more-control" v-bind:class="isLoadingMore ? 'disabled' : ''">
            <span v-if="!isLoadingMore">more</span>
            <span v-if="isLoadingMore">
                <img src="@/assets/images/loader.gif" alt="" />
            </span>
        </a>
    </section>    
</template>

<script>
import VideoItem from '@/components/Video/VideoItem'
import ChannelItem from '@/components/Channel/ChannelItem'

export default {
    name: 'SearchResults',
    components:{
        VideoItem,
        ChannelItem
    },
    data(){
        return{
            totalResults: 0,
            items: [],
            nextPage: null,
            key: null,
            keyword: null,
            isLoadingMore: false,
        }
    },
    methods:{
        loadMore(){
            this.key = this.$store.state.youtubeApiKey;
            this.keyword = this.$store.state.searchKeyword;
            this.isLoadingMore = true;
            this.axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${this.keyword}&type=channel&pageToken=${this.nextPage}&key=${this.key}`).then((response) => {
                const data = response.data.items;
                data.forEach(element => {
                    this.items.push(element);
                });
                this.isLoadingMore = false;
            });
            console.log(this.items);
        },
    },
    watch: {
        '$store.state.globalSearchResults': function() {
            this.totalResults = this.$store.state.globalSearchResults.pageInfo.totalResults;
            this.items = this.$store.state.globalSearchResults.items;
            this.nextPage = this.$store.state.globalSearchResults.nextPageToken;
        },
    },
}
</script>
