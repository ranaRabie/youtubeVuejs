import { shallowMount } from '@vue/test-utils'
import ChannelItem from '@/components/Channel/ChannelItem.vue'

const channel =    {
  "kind": "youtube#searchResult",
  "etag": "drtXR-jEGlzIhjaQNhVWDC6HMys",
  "id": {
    "kind": "youtube#channel",
    "channelId": "UCJasK7cAgRz1RGMJCoRLXXQ"
  },
  "snippet": {
    "publishedAt": "2010-02-13T19:36:09Z",
    "channelId": "UCJasK7cAgRz1RGMJCoRLXXQ",
    "title": "Vue Screencasts",
    "description": "For hands-on training with guaranteed results, check out my new course: https://www.vuetraining.net/ In just 8 short weeks you'll be writing VueJS apps with ...",
    "thumbnails": {
      "default": {
        "url": "https://yt3.ggpht.com/ytc/AAUvwngSzpzGxSPorGdCPyIOb2z7y-gZuT-TC5Z1XzDN=s88-c-k-c0xffffffff-no-rj-mo"
      },
      "medium": {
        "url": "https://yt3.ggpht.com/ytc/AAUvwngSzpzGxSPorGdCPyIOb2z7y-gZuT-TC5Z1XzDN=s240-c-k-c0xffffffff-no-rj-mo"
      },
      "high": {
        "url": "https://yt3.ggpht.com/ytc/AAUvwngSzpzGxSPorGdCPyIOb2z7y-gZuT-TC5Z1XzDN=s800-c-k-c0xffffffff-no-rj-mo"
      }
    },
    "channelTitle": "Vue Screencasts",
    "liveBroadcastContent": "none",
    "publishTime": "2010-02-13T19:36:09Z"
  }
};
const wrapper = shallowMount(ChannelItem, {
  props: { channel }
})
describe('ChannelItem.vue', () => {
  it('Channel renders Right Names', () => {  
    expect(wrapper.find('.ch-tit').text()).toMatch(channel.snippet.channelTitle)
  });
  it('Channel renders Right Thumbnail', () => {
    expect(wrapper.find('.ch-thumb img').attributes('src')).toMatch(channel.snippet.thumbnails.high.url)
  });
});
