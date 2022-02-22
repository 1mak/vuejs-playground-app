<template>
  <div class="hello-container">
    <h1>{{ title }}</h1>
    <div class="message-container">
      <transition name="slide-fade" mode="out-in">
        <p :key="messageIndex"><span v-html="message"></span></p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    title: {
      type: String,
      default: "Hi",
    },
    messageIndex: {
      type: Number,
      required: true,
    },
    message: {
      type: String,
      default: "Here goes nothing",
    },
  },
};
</script>

<style lang="scss" scoped>
.hello-container {
  h1 {
    margin-top: 60px;
  }

  .message-container {
    background: rgba(0, 0, 0, 0.05);
    width: 500px;
    margin: 20px auto;
    padding: 10px 20px;
    p {
      font-size: 18px;
    }
  }

  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }

  .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-enter, .slide-fade-leave-to
      /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
}
</style>
