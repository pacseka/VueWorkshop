<template>
    <div v-if="usermodule.selectedUser">
        <h1>
            <slot></slot>
        </h1>
        <div class="form-group">
            <label>
                Felhasználó neve:
                <input type="text" class="form-control" v-model="usermodule.selectedUser.name">
            </label>
        </div>
        <div class="form-group">
            <label>
                Felhasználó e-mail címe:
                <input type="text" class="form-control" v-model="usermodule.selectedUser.email">
            </label>
        </div>
        <div class="form-group">
            <label>
                Telefonszám:
                <input type="text" class="form-control" v-model="usermodule.selectedUser.phoneNumber">
            </label>
        </div>
        <button @click.prevent="deleteUser" v-if="enableDelete">Törlés</button>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue';
    import { State } from 'vuex-class';
    import Component from 'vue-class-component';
    import { Prop } from 'vue-property-decorator';
    import { IUserState } from 'src/types/user';
    import { eventHub } from '../../../utils/eventhub';

    const usernamespace: string = 'usermodule';

    @Component
    export default class UserData extends Vue {

        @State(usernamespace) usermodule!: IUserState;
        @Prop({ default: true }) enableDelete!: boolean;
        @Prop({ default: "macska" }) macskaCica!: string;

        deleteUser() {
            //user törlése
            eventHub.$emit('user-deleted-again');
            this.$emit("user-deleted", this.usermodule.selectedUser && this.usermodule.selectedUser.id);
        }
    }
</script>