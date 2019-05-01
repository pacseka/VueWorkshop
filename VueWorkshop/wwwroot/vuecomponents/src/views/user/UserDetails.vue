<template>
    <div>
        <UserData></UserData>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import UserData from './components/UserData.vue';

    @Component({
        components: {
            UserData
        }
    })
    export default class UserDetails extends Vue {

    }
</script>