<template>
    <div class="app-container">
        <div v-if="isLoading" class="loader-container">
            <img src="@/assets/images/loader.gif" alt="" />
        </div>
        <SearchResults />
    </div>
</template>

<script>
import SearchResults from '@/components/SearchResults'

export default {
    name: 'Search',
    components: {
        SearchResults
    },
    data(){
        return{
            isLoading: false,
        }
    },
    watch: {
        '$store.state.loading': function() {
            this.isLoading = this.$store.state.loading;
        },
    },
}
</script>