<template>
    <div>
        <h1>Felhasználó lista</h1>
        <div v-if="usermodule.users">
            <ul class="list-group">
                <li class="list-group-item" v-for="user in usermodule.users" :key="user.id">{{ user.name }}</li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue';
    import { State, Action } from 'vuex-class';
    import Component from 'vue-class-component';
    import { IUserState } from 'src/types/user';
    const usernamespace: string = 'usermodule';

    @Component
    export default class UserList extends Vue {

        @State(usernamespace) usermodule!: IUserState;
        @Action('fetchUsers',  { namespace: usernamespace }) fetchUsers: any;
  

        created() {
            this.fetchUsers();
        }

    }</script>