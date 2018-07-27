<template>
    <div class="app app-header-fixed">
        <Header/>
        <Sidebar/>
        <div id="content" class="app-content" role="main">
            <router-view/>
        </div>
        <Footer/>
    </div>
</template>

<style lang="scss">
    @import './../../../../static/vendor/animate.css/animate.css';
    @import './../../../../static/vendor/font-awesome/css/font-awesome.min.css';
    @import './../../../../static/vendor/simple-line-icons/css/simple-line-icons.css';
    @import './../../../../static/vendor/jquery/bootstrap/dist/css/bootstrap.css';
    @import './../../../../static/css/app.min.css';
</style>

<script>
    import Header from './Header';
    import Footer from './Footer';
    import Sidebar from './Sidebar';

    export default {
        components: {
            Header,
            Footer,
            Sidebar
        }
    }
</script>
