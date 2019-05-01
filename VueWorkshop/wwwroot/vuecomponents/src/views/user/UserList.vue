<template>
    <b-container>
        <b-row class="mb-3">
            <b-col md="4">
                <div v-if="usermodule.users">
                    <ul class="list-group">
                        <li class="list-group-item" v-for="user in usermodule.users" :key="user.id" @click="selectUser(user)">{{ user.name }}</li>
                    </ul>
                </div>
            </b-col>
            <b-col md="4">
                <UserData ref="userData1"
                          :enable-delete="false"
                          v-on:user-deleted="deletedUser"
                          v-bind="{ enableDelete: false, macskaCica: 'kutya' }">
                    {{usermodule.selectedUser && usermodule.selectedUser.name}}
                </UserData>
            </b-col>

        </b-row>
    </b-container>
</template>
<script lang="ts">
    import Vue from 'vue';
    import { State, Action, Mutation } from 'vuex-class';
    import Component from 'vue-class-component';
    import { IUserState, IUser } from 'src/types/user';
    import UserData from './components/UserData.vue';
    import { eventHub } from '../../utils/eventhub';
    const usernamespace: string = 'usermodule';


    @Component({
        components: {
            UserData
        }
    })
    export default class UserList extends Vue {

        @State(usernamespace) usermodule!: IUserState;
        @Action('fetchUsers', { namespace: usernamespace }) fetchUsers: any;
        @Mutation('loadSelectUser', { namespace: usernamespace }) loadSelectUser: any;

        created() {
            if (this.usermodule && this.usermodule.users) {
                return;
            }
            this.fetchUsers();

            eventHub.$on('user-deleted-again', this.userDeletedAgain);
        }

        selectUser(user: IUser) {
            this.loadSelectUser(user);
        }

        deletedUser(data: any) {
            this.loadSelectUser(undefined);
            console.log(data);

        }

        userDeletedAgain() {
            console.log('Mégegyszer törölve');
        }

    }
</script>