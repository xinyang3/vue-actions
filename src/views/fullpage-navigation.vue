<template>
        <div>
            <button @click="toPageThree">topagethree</button>
            <full-page ref="fullpage" :options="options" id="fullpage">
                <div class="section " id="section0">
                    <div class="intro">
                        <h1>Navigation dots</h1>
                        <p>An easy and beautiful way to navigate throw the sections</p>
                    </div>
                </div>
                <div class="section" id="section1">
                    <div class="slide" id="slide1">
                        <div class="intro">
                            <h1>Clickable</h1>
                            <p>
                                You can even click on the navigation and jump directly to another section.
                            </p>
                        </div>
                    </div>
            
                    <div class="slide" id="slide2">
                        <h1>Slide 2</h1>
                    </div>
            
                </div>
                <div class="section" id="section2">
                    <div class="intro">
                        <h1>Enjoy it</h1>
                    </div>
                </div>
            </full-page>
            </div>
</template>
<script>
    import Vue from 'vue';
    import 'fullpage.js/dist/fullpage.css'
    import VueFullpage from 'vue-fullpage.js';
    Vue.use(VueFullpage);
    export default {
        name: 'fullpage-navigation',
        data() {
            return {
                options: {
                    anchors: ['page1', 'page2', 'page3'],
                    sectionsColor: ['#41b883', '#ff5f45', '#0798ec'],
                    navigation: true,
                    navigationPosition: 'right',
                    navigationTooltips: ['first page', 'second page', 'third page']
                }
            }
        },
        methods: {
            toPageThree() {
                this.$refs.fullpage.api.moveTo(2, 2);
            }
        },
        mounted() {}
    }
</script>
<style>
    h1 {
        font-size: 5em;
        font-family: arial, helvetica;
        color: #fff;
        margin: 0;
    }
    
    .intro p {
        color: #fff;
    }
    /* Centered texts in each section
	* --------------------------------------- */
    
    .section {
        text-align: center;
    }
    /* Overwriting styles for control arrows for slides
	* --------------------------------------- */
    
    .controlArrow.prev {
        left: 50px;
    }
    
    .controlArrow.next {
        right: 50px;
    }
    /* Bottom menu
	* --------------------------------------- */
    
    #infoMenu li a {
        color: #fff;
    }
</style>