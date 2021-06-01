<template>
    <div class="app-container">
        <channel-single :channelData="channelDetails" />
        <related-playlists />
    </div>
</template>

<script>
import ChannelSingle from '@/components/Channel/ChannelSingle'
import RelatedPlaylists from '@/components/Channel/RelatedPlaylists'

export default {
    name: 'channelDetails',
    components:{
        ChannelSingle,
        RelatedPlaylists
    },
    data(){
        return{
            channelId: null,
            channelDetails: null,
            key: null
        }
    },
    created(){
        this.channelId = this.$route.params.id;
        this.key = this.$store.state.youtubeApiKey;
        const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${this.channelId}&key=${this.key}`;
        this.axios.get(url).then((response) => {
            this.channelDetails = response.data.items[0];
        })  
    }
}
</script>
