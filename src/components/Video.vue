<template>
    <article class="video-item" id="">
      <div class="vid-thumb"><img :src="thumb" alt=""></div>
      <div class="vid-details">
        <div class="vid-tit">{{title}}</div>
        <div class="vid-channel">{{channelTitle}}</div>
        <div class="vid-desc">{{description}}</div>
      </div>
    </article>
</template>


<script>
export default {
  name: 'Video',
  props: {
    title: String,
    channelTitle: String,
    thumb: String,
    description: String,
  }
}
</script>
