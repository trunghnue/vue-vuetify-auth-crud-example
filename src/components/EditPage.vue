<template>
  <div>
    <h2>Edit Account</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input
          type="text"
          v-model="user.firstName"
          v-validate="'required'"
          name="firstName"
          class="form-control"
          :class="{ 'is-invalid': submitted && errors.has('firstName') }"
          :placeholder="account.user.firstName"
        />
        <div
          v-if="submitted && errors.has('firstName')"
          class="invalid-feedback"
        >
          {{ errors.first("firstName") }}
        </div>
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input
          type="text"
          v-model="user.lastName"
          v-validate="'required'"
          name="lastName"
          class="form-control"
          :class="{ 'is-invalid': submitted && errors.has('lastName') }"
          :placeholder="account.user.lastName"
        />
        <div
          v-if="submitted && errors.has('lastName')"
          class="invalid-feedback"
        >
          {{ errors.first("lastName") }}
        </div>
      </div>
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          v-model="user.username"
          v-validate="'required'"
          name="username"
          class="form-control"
          :class="{ 'is-invalid': submitted && errors.has('username') }"
          :placeholder="account.user.username"
        />
        <div
          v-if="submitted && errors.has('username')"
          class="invalid-feedback"
        >
          {{ errors.first("username") }}
        </div>
      </div>
      <div class="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          v-model="user.password"
          v-validate="{ required: true, min: 6 }"
          name="password"
          class="form-control"
          :class="{ 'is-invalid': submitted && errors.has('password') }"
        />
        <div
          v-if="submitted && errors.has('password')"
          class="invalid-feedback"
        >
          {{ errors.first("password") }}
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" :disabled="status.registering">
          Edit
        </button>
        <img
          v-show="status.registering"
          src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
        />
        <router-link to="/login" class="btn btn-link">Cancel</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        id: this.$store.state.account.user.id,
      },
      submitted: false,
    };
  },
  computed: {
    ...mapState("account", ["status"]),
    ...mapState({
      account: (state) => state.account,
      users: (state) => state.users.all,
    }),
  },
  methods: {
    ...mapActions("account", ["update"]),
    handleSubmit() {
      this.submitted = true;
      this.$validator.validate().then((valid) => {
        if (valid) {
          console.log("this.user: ", this.user);
          console.log("this.$store.state: ", this.$store.state);
          this.update(this.user);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
