<template>
    <div id="related-playlists">
        <article class="playlist-wrapper" v-for="video in items" :key="video.id.videoId" :id="video.id.videoId">
            <playlist-item :playlist="video" v-if="video.kind.split('#')[1] == 'playlist'"/>
        </article>
    </div>
</template>

<script>
import PlaylistItem from '@/components/Playlist/PlaylistItem'

export default {
    name: 'RelatedPlaylists',
    components:{
        PlaylistItem
    },
    data(){
        return{
            relatedPlaylistsId: null,
            items: [],
            key: null,
        }
    },
    created(){
        this.relatedPlaylistsId = this.$route.params.id;
        this.key = this.$store.state.youtubeApiKey;
        const url = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${this.relatedPlaylistsId}&maxResults=25&key=${this.key}`;
        this.axios.get(url).then((response) => {
            this.items = response.data.items;
            console.log(this.items);
        })  
    }
}
</script>