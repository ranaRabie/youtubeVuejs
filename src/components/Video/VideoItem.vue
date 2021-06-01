<template>
   <!-- <router-link :to="'/videoDetails/' + video.id.videoId" class="video-item" id=""> -->
   <router-link :to="`/videoDetails/${video.id.videoId}`" class="video-item" :id="video.id.videoId">
      <div class="vid-thumb"><img :src="video.snippet.thumbnails.high.url" alt=""></div>
      <div class="vid-details">
        <div class="vid-tit">{{video.snippet.title}}</div>
        <div class="vid-channel">{{video.snippet.channelTitle}}</div>
        <div class="vid-desc">{{video.snippet.description}}</div>
      </div>
  </router-link>
  
</template>


<script>
export default {
  name: 'Video',
  props: {
    video: null,
  }
}
</script>
