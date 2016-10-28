<template>
    <li>
        <div :class="{bold: isFolder}" @click="toggle" @dblclick="changeType">
            {{model.name}}
            <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
        </div>
        <ul v-show="open" v-if="isFolder">
            <item class="item" v-for="model in model.children" :model="model" >
            </item>
            <li class="add" @click="addChild">+</li>
        </ul>
    </li>
</template>
<script>
import Vue from 'vue' // 递归组件, 每次都要产生 vue 的实例，这里要加上独立的 vue
export default {
    name: 'item', // 递归组件，要加上 name
    props: {
        model: Object
    },
    data: function() {
        return {
            open: false
        }
    },
    computed: {
        isFolder: function() {
            return this.model.children &&
                this.model.children.length
        }
    },
    methods: {
        toggle: function() {
            if (this.isFolder) {
                this.open = !this.open
            }
        },
        changeType: function() {
            if (!this.isFolder) {
                Vue.set(this.model, 'children', [])
                this.addChild()
                this.open = true
            }
        },
        addChild: function() {
            this.model.children.push({
                name: 'new stuff'
            })
        }
    }
}
</script>
<style>
.example {
    color: red;
}
</style>
