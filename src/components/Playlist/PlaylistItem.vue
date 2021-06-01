<template>
   <div class="playlist-item" :id="playlist.id">
      <div class="ply-thumb">
            <img :src="playlist.snippet.thumbnails.high.url" alt="">
            <span class="count" v-if="playlist.contentDetails">{{playlist.contentDetails.itemCount}}</span>  
            <span class="count" v-else>0</span>  
        </div>
      <div class="ply-details">
        <div class="ply-tit">{{playlist.snippet.title}}</div>
        <div class="ply-channel">{{playlist.snippet.channelTitle}}</div>
        <div class="ply-desc">{{playlist.snippet.description}}</div>
      </div>
  </div>
  
</template>


<script>
export default {
  name: 'Playlist',
  props: {
    playlist: null,
  }
}
</script>
