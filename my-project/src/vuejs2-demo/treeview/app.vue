<template>
    <div>
        <p>(双点击可以将项目转成目录) Vue.JS2 官网 树 for vue-cli</p>
        <!-- the demo root element -->
        <ul id="demo">
            <item class="item" :model="treeData" >
            </item>
        </ul>
    </div>
</template>
<script>
// demo data
var data1 = {
    name: 'root',
    children: [{
        name: 'hello'
    }, {
        name: 'wat'
    }, {
        name: 'child folder',
        children: [{
            name: 'child folder',
            children: [{
                name: 'hello'
            }, {
                name: 'wat'
            }]
        }, {
            name: 'hello'
        }, {
            name: 'wat'
        }, {
            name: 'child folder',
            children: [{
                name: 'hello'
            }, {
                name: 'wat'
            }]
        }]
    }]
};

var data2 = {
    name: 'root',
    children: [{
        name: 'hello'
    }, {
        name: 'wat'
    }, {
        name: 'child folder',
    }]
};

import itemTemplate from './item-template.vue'

export default {
    components: {
        'item': itemTemplate
    },
    data() {
        return {
            treeData: data1
        }
    },
    computed: {},
    methods: {},
    filters: {}
}
</script>
<style>
body {
    font-family: Menlo, Consolas, monospace;
    color: #444;
}

.item {
    cursor: pointer;
}

.bold {
    font-weight: bold;
}

ul {
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: dot;
}
</style>
