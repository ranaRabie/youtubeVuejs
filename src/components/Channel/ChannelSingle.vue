<template>
    <div class="channelDetails_wrapper">
        <div class="ch-thumb">
            <img :src="thumb" alt="">
        </div>
        <div class="ch-data">
            <img :src="thumb" alt="">
            <div class="ch-tit">{{title}}</div>
            <div class="ch-subs">{{subscriberCount}} Subscribers</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChannelSingle',
    props: {
        channelData: null,
    },
    computed:{
      title(){
          return this.channelData != null ? this.channelData.snippet.title : ''
      },
      thumb(){
          return this.channelData != null ? this.channelData.snippet.thumbnails.high.url : ''
      },
      subscriberCount(){
          return this.channelData != null ? this.channelData.statistics.subscriberCount : ''
      },
  }
}
</script>
