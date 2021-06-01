<template>
    <div class="channelDetails_wrapper">
        <div class="ch-thumb">
            <img :src="channelData.snippet.thumbnails.high.url" alt="">
        </div>
        <div class="ch-data">
            <img :src="channelData.snippet.thumbnails.high.url" alt="">
            <div class="ch-tit">{{channelData.snippet.title}}</div>
            <div class="ch-subs">{{channelData.statistics.subscriberCount}} Subscribers</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChannelSingle',
    props: {
        channelData: null,
    },
}
</script>
