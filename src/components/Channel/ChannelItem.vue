<template>
   <router-link :to="'/channelDetails/' + channel.id.channelId" class="channel-item" :id="channel.id.channelId">
      <div class="ch-thumb"><img :src="channel.snippet.thumbnails.high.url" alt=""></div>
      <div class="ch-details">
        <div class="ch-tit">{{channel.snippet.channelTitle}}</div>
      </div>
  </router-link>
  
</template>


<script>
export default {
  name: 'Channel',
  props: {
    channel: null,
  }
}
</script>
