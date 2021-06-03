<template>
    <div class="videoDetails_wrapper">
        <iframe :src="videoEmbed" :title="title"></iframe>
        <div class="video-data">
            <div class="data-row">
                <div class="vid-tit">{{title}}</div>
                <div class="vid-views">{{viewCount}} views</div>
            </div>
            <div class="data-row">
                <div class="vid-likes">likes: {{likesCount}}</div>
                <div class="vid-disliks">dislikes: {{disLikesCount}}</div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  name: 'VideoSingle',
  props: {
      videoEmbed: String,
      videoData: null,
  },

  computed:{
      title(){
          return this.videoData != null ? this.videoData.snippet.title : ''
      },
      viewCount(){
          return this.videoData != null ? this.videoData.statistics.viewCount : ''
      },
      likesCount(){
          return this.videoData != null ? this.videoData.statistics.likeCount : ''
      },
      disLikesCount(){
          return this.videoData != null ? this.videoData.statistics.dislikeCount : ''
      },
  }
}
</script>
