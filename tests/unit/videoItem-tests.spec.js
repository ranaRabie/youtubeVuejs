import { shallowMount } from '@vue/test-utils'
import VideoItem from '@/components/Video/VideoItem.vue'

const video =   {
  "kind": "youtube#searchResult",
  "etag": "ExitAC2wu896-2MuiZzEQ92YxL8",
  "id": {
    "kind": "youtube#video",
    "videoId": "71h8MZshGSs"
  },
  "snippet": {
    "publishedAt": "2019-04-12T07:00:00Z",
    "channelId": "UCbCmjCuTUZos6Inko4u57UQ",
    "title": "ABC Song + More Nursery Rhymes &amp; Kids Songs - CoComelon",
    "description": "Watch your favorite song by clicking a title below: 0:08 ABC Song 3:39 Head Shoulders Knees and Toes 6:30 The Car Color Song 10:46 Clean Up Song 13:31 ...",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/71h8MZshGSs/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/71h8MZshGSs/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/71h8MZshGSs/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "Cocomelon - Nursery Rhymes",
    "liveBroadcastContent": "none",
    "publishTime": "2019-04-12T07:00:00Z"
  }
};
const wrapper = shallowMount(VideoItem, {
  props: { video }
})
describe('VideoItem.vue', () => {
  it('Video renders Right Names', () => {  
    expect(wrapper.find('.vid-tit').text()).toMatch(video.snippet.title)
  });
  it('Video renders Right Description', () => {
    expect(wrapper.find('.vid-desc').text()).toMatch(video.snippet.description)
  });
  it('Video renders Right Channel Name', () => {
    expect(wrapper.find('.vid-channel').text()).toMatch(video.snippet.channelTitle)
  });
  it('Video renders Right Thumbnail', () => {
    expect(wrapper.find('.vid-thumb img').attributes('src')).toMatch(video.snippet.thumbnails.high.url)
  });
});
