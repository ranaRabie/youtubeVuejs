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
            isShowSearch: false
        }
    },
    methods:{
        getSearchResults(){
            if(this.isShowSearch === false){
                this.isShowSearch = true;
            }else{
                this.axios.get(`https://www.googleapis.com/youtube/v3/search?&q='${this.searchKeyword}'&maxResults=50&part=snippet&key=AIzaSyCPEn0whbNTdiIE92WTwdbiflXpwgmVBaw`).then((response) => {
                    this.$store.commit("changeSearchResults", response.data);
                    this.isShowSearch = false;
                })
            }
            
        },
    },
}
</script>