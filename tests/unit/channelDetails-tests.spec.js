import { shallowMount } from '@vue/test-utils'
import ChannelSingle from '@/components/Channel/ChannelSingle.vue'

const channelData = {
  "kind": "youtube#channel",
  "etag": "aETlbfw8-pu0jDPb8WTL-c0xo-Y",
  "id": "UCJasK7cAgRz1RGMJCoRLXXQ",
  "snippet": {
    "title": "Vue Screencasts",
    "description": "For hands-on training with guaranteed results, check out my new course: \n\nhttps://www.vuetraining.net/\n\nIn just 8 short weeks you'll be writing VueJS apps with ease, and have several portfolio-worthy apps.  You'll learn Vue, Vue Router, Vuex, Vuetify, Nuxt, the new Composition API, and more.\n\n-----\n\nThis channel covers Vue core, VueX, Vue Router, Nuxt, Vuetify, and more, getting deep into the nitty-gritty of what's required to actually build production web apps.\n\nThe first series is building the VueScreencasts website.  It's massive.\n\nYou can start watching here: https://www.youtube.com/playlist?list=PLPwpWyfm6JADRf8x1Jc0Da8R71WJyt-Jn\n\nOr you can get more up-to-date versions (especially in the early videos) at https://www.vuescreencasts.com/\n\n-----\n\nWho am I?\n\nI'm Jeffrey Biles.  Before VueScreencasts, I created EmberScreencasts and EmberSchool.  \n\nTwitter: https://twitter.com/VueScreencasts",
    "publishedAt": "2010-02-13T19:36:09Z",
    "thumbnails": {
      "default": {
        "url": "https://yt3.ggpht.com/ytc/AAUvwngSzpzGxSPorGdCPyIOb2z7y-gZuT-TC5Z1XzDN=s88-c-k-c0x00ffffff-no-rj",
        "width": 88,
        "height": 88
      },
      "medium": {
        "url": "https://yt3.ggpht.com/ytc/AAUvwngSzpzGxSPorGdCPyIOb2z7y-gZuT-TC5Z1XzDN=s240-c-k-c0x00ffffff-no-rj",
        "width": 240,
        "height": 240
      },
      "high": {
        "url": "https://yt3.ggpht.com/ytc/AAUvwngSzpzGxSPorGdCPyIOb2z7y-gZuT-TC5Z1XzDN=s800-c-k-c0x00ffffff-no-rj",
        "width": 800,
        "height": 800
      }
    },
    "localized": {
      "title": "Vue Screencasts",
      "description": "For hands-on training with guaranteed results, check out my new course: \n\nhttps://www.vuetraining.net/\n\nIn just 8 short weeks you'll be writing VueJS apps with ease, and have several portfolio-worthy apps.  You'll learn Vue, Vue Router, Vuex, Vuetify, Nuxt, the new Composition API, and more.\n\n-----\n\nThis channel covers Vue core, VueX, Vue Router, Nuxt, Vuetify, and more, getting deep into the nitty-gritty of what's required to actually build production web apps.\n\nThe first series is building the VueScreencasts website.  It's massive.\n\nYou can start watching here: https://www.youtube.com/playlist?list=PLPwpWyfm6JADRf8x1Jc0Da8R71WJyt-Jn\n\nOr you can get more up-to-date versions (especially in the early videos) at https://www.vuescreencasts.com/\n\n-----\n\nWho am I?\n\nI'm Jeffrey Biles.  Before VueScreencasts, I created EmberScreencasts and EmberSchool.  \n\nTwitter: https://twitter.com/VueScreencasts"
    },
    "country": "US"
  },
  "contentDetails": {
    "relatedPlaylists": {
      "likes": "",
      "favorites": "",
      "uploads": "UUJasK7cAgRz1RGMJCoRLXXQ"
    }
  },
  "statistics": {
    "viewCount": "488879",
    "subscriberCount": "8090",
    "hiddenSubscriberCount": false,
    "videoCount": "119"
  }
};
const wrapper = shallowMount(ChannelSingle, {
  props: { channelData }
})
describe('ChannelSingle.vue', () => {
  it('Video renders Right Names', () => {  
    expect(wrapper.find('.ch-tit').text()).toMatch(channelData.snippet.title)
  });
  it('Video renders Right Subscribers Count', () => {
    expect(wrapper.find('.ch-subs span').text()).toMatch(channelData.statistics.subscriberCount)
  });
});
