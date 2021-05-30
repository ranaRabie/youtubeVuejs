<template>
    <div id="app-search">
        <div v-show="!isShowSearch" class="search-keyword">{{searchKeyword}}</div>
        <form action="">
            <input v-show="isShowSearch" type="search" v-model="searchKeyword">
            <button type="button" v-on:click="getSearchResults()">search</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'SearchForm',
    data(){
        return{
            searchKeyword:'',
            isShowSearch: false,
            screenSm: false,
        }
    },
    methods:{
        getSearchResults(){
            if(!this.isShowSearch && this.screenSm){
                this.isShowSearch = true;
            }else{
                this.$store.commit("changeLoadingStatus", true);
                this.axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${this.searchKeyword}&key=AIzaSyCPEn0whbNTdiIE92WTwdbiflXpwgmVBaw`).then((response) => {
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
        window.addEventListener("resize", this.setSmallWindow);
    }
}
</script>