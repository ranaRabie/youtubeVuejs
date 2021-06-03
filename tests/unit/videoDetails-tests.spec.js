import { shallowMount } from '@vue/test-utils'
import VideoSingle from '@/components/Video/VideoSingle.vue'

const videoData = {
  "kind": "youtube#video",
  "etag": "BuUOTZBT8VaCZ5PoasPR8d66cHc",
  "id": "qZXt1Aom3Cs",
  "snippet": {
    "publishedAt": "2021-02-24T16:36:53Z",
    "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
    "title": "Vue JS Crash Course 2021",
    "description": "Learn the fundamentals of Vue JS (v3) in this project-based crash course\n\nTask Tracker:\nhttps://github.com/bradtraversy/vue-crash-2021\n\nRandom User Generator:\nhttps://codepen.io/bradtraversy/pen/LYbzJjK\n\nLatest Udemy Courses:\nhttps://traversymedia.com​\n\n💖  Support The Channel!\nhttp://www.patreon.com/traversymedia\n\nTimestamps:\n0:00 - Intro & Slides\n7:17 - User Generator Mini Project (CDN)\n21:35 - Vue CLI Setup\n24:30 - Files, Dev Server & Cleanup\n28:22 - Global Styles\n29:06 - Header Component\n30:44 - Component Props\n32:06 - Button Component\n35:25 - Events\n36:09 - Task Data & created() Method\n38:22 - Tasks Component & v-for Loop\n41:09 - Single Task Component\n44:34 - Dynamic Classes\n45:53 - Emit Events (Delete Task)\n52:14 - Toggle Reminder\n56:20 - AddTask Component & v-model\n1:04:57 - Toggle Form & Template Conditionals\n1:11:20 - Building For Production\n1:13:33 - JSON-Server Setup\n1:17:18 - Refactoring to Use The Backend\n1:30:48 - Implementing the Router\n1:48:23 - Restrict a Component to a Route",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/qZXt1Aom3Cs/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/qZXt1Aom3Cs/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/qZXt1Aom3Cs/hqdefault.jpg",
        "width": 480,
        "height": 360
      },
      "standard": {
        "url": "https://i.ytimg.com/vi/qZXt1Aom3Cs/sddefault.jpg",
        "width": 640,
        "height": 480
      },
      "maxres": {
        "url": "https://i.ytimg.com/vi/qZXt1Aom3Cs/maxresdefault.jpg",
        "width": 1280,
        "height": 720
      }
    },
    "channelTitle": "Traversy Media",
    "tags": [
      "vue",
      "vuejs",
      "vue.js",
      "vuejs tutorial",
      "javascript",
      "vuejs crash course",
      "traversy media",
      "vue 2021",
      "vue3",
      "vue js 3"
    ],
    "categoryId": "28",
    "liveBroadcastContent": "none",
    "localized": {
      "title": "Vue JS Crash Course 2021",
      "description": "Learn the fundamentals of Vue JS (v3) in this project-based crash course\n\nTask Tracker:\nhttps://github.com/bradtraversy/vue-crash-2021\n\nRandom User Generator:\nhttps://codepen.io/bradtraversy/pen/LYbzJjK\n\nLatest Udemy Courses:\nhttps://traversymedia.com​\n\n💖  Support The Channel!\nhttp://www.patreon.com/traversymedia\n\nTimestamps:\n0:00 - Intro & Slides\n7:17 - User Generator Mini Project (CDN)\n21:35 - Vue CLI Setup\n24:30 - Files, Dev Server & Cleanup\n28:22 - Global Styles\n29:06 - Header Component\n30:44 - Component Props\n32:06 - Button Component\n35:25 - Events\n36:09 - Task Data & created() Method\n38:22 - Tasks Component & v-for Loop\n41:09 - Single Task Component\n44:34 - Dynamic Classes\n45:53 - Emit Events (Delete Task)\n52:14 - Toggle Reminder\n56:20 - AddTask Component & v-model\n1:04:57 - Toggle Form & Template Conditionals\n1:11:20 - Building For Production\n1:13:33 - JSON-Server Setup\n1:17:18 - Refactoring to Use The Backend\n1:30:48 - Implementing the Router\n1:48:23 - Restrict a Component to a Route"
    },
    "defaultAudioLanguage": "en"
  },
  "contentDetails": {
    "duration": "PT1H50M52S",
    "dimension": "2d",
    "definition": "hd",
    "caption": "false",
    "licensedContent": true,
    "contentRating": {},
    "projection": "rectangular"
  },
  "statistics": {
    "viewCount": "229843",
    "likeCount": "6293",
    "dislikeCount": "57",
    "favoriteCount": "0",
    "commentCount": "555"
  }
};
const wrapper = shallowMount(VideoSingle, {
  props: { videoData }
})
describe('VideoSingle.vue', () => {
  it('Video renders Right Names', () => {  
    expect(wrapper.find('.vid-tit').text()).toMatch(videoData.snippet.title)
  });
  it('Video renders Right View Count', () => {
    expect(wrapper.find('.vid-views span').text()).toMatch(videoData.statistics.viewCount)
  });
  it('Video renders Right Like Counts', () => {
    expect(wrapper.find('.vid-likes').text()).toMatch(videoData.statistics.likeCount)
  });
  it('Video renders Right Dislike Counts', () => {
    expect(wrapper.find('.vid-disliks').text()).toMatch(videoData.statistics.dislikeCount)
  });
});
