<template>
   <!-- <router-link :to="'/videoDetails/' + video.id.videoId" class="video-item" id=""> -->
   <router-link :to="`/videoDetails/${vidId}`" class="video-item" :id="vidId">
      <div class="vid-thumb"><img :src="thumb" alt=""></div>
      <div class="vid-details">
        <div class="vid-tit">{{title}}</div>
        <div class="vid-channel">{{channel}}</div>
        <div class="vid-desc">{{desc}}</div>
      </div>
  </router-link>
  
</template>


<script>
export default {
  name: 'Video',
  props: {
    video: null,
  },
  computed:{
      vidId(){
          return this.video != null ? this.video.id.videoId : ''
      },
      thumb(){
          return this.video != null ? this.video.snippet.thumbnails.high.url : ''
      },
      title(){
          return this.video != null ? this.video.snippet.title : ''
      },
      channel(){
          return this.video != null ? this.video.snippet.channelTitle : ''
      },
      desc(){
          return this.video != null ? this.video.snippet.description : ''
      },
  }
}
</script>
