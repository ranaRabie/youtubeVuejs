<template>
    <div class="videoDetails_wrapper">
        <iframe :src="videoEmbed" :title="videoData.snippet.title"></iframe>
        <div class="video-data">
            <div class="data-row">
                <div class="vid-tit">{{videoData.snippet.title}}</div>
                <div class="vid-views">{{videoData.statistics.viewCount}} views</div>
            </div>
            <div class="data-row">
                <div class="vid-likes">likes: {{videoData.statistics.likeCount}}</div>
                <div class="vid-disliks">dislikes: {{videoData.statistics.dislikeCount}} views</div>
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
}
</script>
