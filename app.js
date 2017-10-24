Vue.component('tab-item', {
    props: ['item', "setVisibleIndex"],
    template: `<li @click="setVisibleIndex(item.id)" class="tab-li"> {{ item.text }}</li>`
})

Vue.component('foo', {
    template: `<h1>foo</h1>`
})

Vue.component('bar', {
    template: `<h1>bar heuheue</h1>`
})

Vue.component('content-detail', {
    props:  ["details"],
    template:`<div v-bind:is="details.componentName"></div>`,
})

Vue.component('profile-header', {
    template: `
                <img class="img-profile" src="belly.jpg" >
             `
})

Vue.component('links',{
    template: ` <div class="links-container">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>
                `
})

var app = new Vue({
    el: "#app", 
    data: {
        tabviewitems: [
            {id: 0, text: "About"}, 
            {id: 1, text: "Projects"}, 
            {id: 2, text: "Archivements"}, 
            {id: 3, text: "Hobbies"}
        ], 
       detailsdata: [
            {
                id: 0,
                title: "About",
                description: "this is my about!",
                componentName: "foo"
            },
            {   
                id:1,
                title: "Projects",
                description: "these are my projects",
                componentName: "bar"
            },
            {
                id: 2,
                title: "Archivements",
                description: "these are my archivements!",
                componentName: "foo"
            },
            {
                id: 3,
                title: "Hobbies",
                description: "these are my hobbies!",
                componentName: "bar"
            }, 
        ], 
        index: 0
    },
    methods: {
        setDetails: function(index) {
            this.index = index   
        } 
    }

})