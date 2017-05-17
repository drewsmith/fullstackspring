<template>
    <div>
        <div id="sidenav" class="sidenav">
            <a href="javascript:void(0)" class="close-nav-btn" v-on:click="toggle">&times;</a>
            <router-link to="introduction">Introduction</router-link>
            <router-link to="setup">Setup</router-link>
        </div>
        <div id="content">
            <div id="header">
                <div class="title">
                    <span class="open" id="open-grabber" v-on:click="toggle">&#9776;</span>
                    FullStackSpring
                    <span id="text-size">
                    <span v-on:click="fontSize" class="small">A</span>
                    <span v-on:click="fontSize" class="medium">A</span>
                    <span v-on:click="fontSize" class="large">A</span>
                    </span>
                </div>
            </div>
            <div id="passage">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    methods: {
        toggle: (e) => {
            e.preventDefault()
            e.stopPropagation()

            let sideNav = document.getElementById('sidenav')
            let content = document.getElementById('content')

            if(sideNav.classList.contains('open')) {
                sideNav.classList.remove('open')
                sideNav.style.width = 0
                content.style.marginLeft = 0
            } else {
                sideNav.classList.add('open')
                sideNav.style.width = "250px"
                content.style.marginLeft = "250px"
            }
        },

        fontSize: (e) => {
            let passage = document.getElementById('passage')
            passage.style.fontSize = window.getComputedStyle(e.target).fontSize;
        }
    }
}
</script>