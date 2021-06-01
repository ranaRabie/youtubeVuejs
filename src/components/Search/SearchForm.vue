<template>
    <div id="app-search">
        <div v-show="!isShowSearch" class="search-keyword">{{searchKeyword}}</div>
        <form action="">
            <input v-show="isShowSearch" type="search" v-model="searchKeyword">
            <button type="button" v-on:click="getSearchResults()">search</button>
            <!-- <router-link to='/'>search</router-link> -->
        </form>
    </div>
</template>

<script>
export default {
    name: 'SearchForm',
    data(){
        return{
            searchKeyword:null,
            isShowSearch: false,
            screenSm: false,
            key: null,
        }
    },
    methods:{
        getSearchResults(){
            if(this.$router.currentRoute._value.path != '/'){
                this.$router.push({ path: '/' });
            }
            if(!this.isShowSearch && this.screenSm){
                this.isShowSearch = true;
            }else{
                this.$store.commit("changeLoadingStatus", true);
                this.axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${this.searchKeyword}&key=${this.key}`).then((response) => {
                    this.$store.commit("changeSearchResults", response.data);
                    this.isShowSearch = false;
                    this.$store.commit("changeLoadingStatus", false);
                })
            }
            
        },
        setSmallWindow(){
            if(window.innerWidth < 992){
                this.screenSm = true;
            }else{
                this.screenSm = false;
            }
        }
    },
    created(){
        this.setSmallWindow();
        this.key = this.$store.state.youtubeApiKey;
        window.addEventListener("resize", this.setSmallWindow);
    },
    watch: {
        searchKeyword: function() {
            this.$store.commit("changeSearchKeyword", this.searchKeyword);
        },
    },
}
</script>