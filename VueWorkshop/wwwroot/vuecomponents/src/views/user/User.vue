<template>
    <b-container>
        <layout-base>
            <template v-slot:header>
                <LayoutMenu></LayoutMenu>
            </template>
            <div>
                <b-tabs>
                    <b-tab active>
                        <template slot="title">
                            <router-link to="/">Felhasználók listája</router-link>
                        </template>
                    </b-tab>
                    <b-tab>
                        <template slot="title">
                            <router-link to="/user/1">Felhasználó</router-link>
                        </template>
                    </b-tab>
                </b-tabs>
            </div>
            <router-view />
        </layout-base>
    </b-container>
</template>
<script lang="ts">
    import Vue from 'vue';
    import 'bootstrap/dist/css/bootstrap.css';
    import 'bootstrap-vue/dist/bootstrap-vue.css';
    import BootstrapVue from 'bootstrap-vue';
    import Component from 'vue-class-component';
    import LayoutBase from '../../components/LayoutBase.vue';
    import LayoutMenu from '../../components/LayoutMenu.vue';

    Vue.use(BootstrapVue);

    @Component({
        components: {
            LayoutBase,
            LayoutMenu
        }
    })
    export default class User extends Vue {
    }

</script>