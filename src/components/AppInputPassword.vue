<template>
  <div class="input-password" @mouseenter="onShowIcon" @mouseleave="onShowIcon">
    <input
      type="password"
      class="password"
      v-if="!showPassword"
      :key="hidePassword"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <input
      type="text"
      class="password"
      v-else
      :key="showPassword"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <div class="icon-show-password" v-if="showIcon">
      <img
        src="../assets/icon-show-password.png"
        class="icon"
        v-if="!showPassword"
        @click="onShowPassword"
      />
      <img src="../assets/icon-hide-password.png" class="icon" v-else @click="onShowPassword" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AppInputPassword",
  props: {
    value: String
  },
  data() {
    return {
      showIcon: false,
      showPassword: false
    };
  },
  methods: {
    onShowIcon() {
      this.showIcon = !this.showIcon;
    },
    onShowPassword() {
      this.showPassword = !this.showPassword;
    }
  }
};
</script>

<style lang="scss" scoped>
.input-password {
  display: flex;
  align-items: center;
  border: 1px solid #000000;
}
.password {
  border: none;
  outline: none;
  -webkit-appearance: none;
  flex-grow: 0.8;
  font-weight: 300;
  font-size: 24px;
  color: #000000;
}
.icon {
  &-show-password {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 0.2;
  }
  width: 24px;
  height: 24px;
  cursor: pointer;
}
</style>