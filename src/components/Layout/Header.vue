<template>
    <header id="main-header">
        <div class="app-container">
            <div class="brand-container">
                <img class="brand" src="@/assets/images/logo.png" alt="">
                <img class="brand-shape" src="@/assets/images/logo-shape.png" alt="">
            </div>
            <search-form />
        </div>
    </header>
</template>

<script>
import SearchForm from '@/components/Search/SearchForm'

export default {
    name: 'Header',
    components:{
        SearchForm
    }
}
</script>