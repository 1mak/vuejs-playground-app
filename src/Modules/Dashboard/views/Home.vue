<template>
  <div class="home">
    <img alt="Michael Hill Logo" :src="require('@/assets/img/mh_logo.png')" />

    <Teaser
      title="Hello Michael Hill!"
      :message-index="messageIndex"
      :message="randomMessage"
    />

    <button v-if="!editMessages" @click="toggleEditMessages">
      Edit Messages
    </button>

    <template v-if="editMessages">
      <transition name="fade">
        <EditMessages
          v-model="filteredMessages"
          :show-vuex-messages="showVuexMessages"
          @toggleMessagesFromVuex="toggleMessagesFromVuex"
          @toggleEditMessages="toggleEditMessages"
          @deleteMessage="deleteMessage"
        />
      </transition>
    </template>
  </div>
</template>

<script>
import Teaser from "@/Modules/Dashboard/components/Teaser.vue";
import EditMessages from "../components/EditMessages";
export default {
  name: "Home",
  components: {
    Teaser,
    EditMessages,
  },
  data() {
    return {
      messageInterval: null,
      editMessages: false,
      messageIndex: 0,
      showVuexMessages: false,
      customMessages: [
        "A tiny look into VueJS.",
        "Find out you can do with VueJS.",
        "Have you heard of me?",
        "Why is Evan You not called Evan Vue?",
        "Did you know that Vue is pronounced [vju]?",
        "Vue comes with a router and state management (vuex) by default :)",
      ],
    };
  },
  methods: {
    toggleMessagesFromVuex() {
      this.showVuexMessages = !this.showVuexMessages;
    },
    deleteMessage(messageIndex) {
      this.filteredMessages.splice(messageIndex, 1);
    },
    toggleEditMessages() {
      if (this.editMessages === false) {
        clearInterval(this.messageInterval);
        this.editMessages = true;
      } else {
        this.editMessages = false;
        this.startMessageInterval();
      }
    },
    startMessageInterval() {
      this.messageInterval = setInterval(() => {
        const totalMessages = this.customMessages.length - 1;
        this.messageIndex = Math.floor(Math.random() * totalMessages);
      }, 3000);
    },
  },
  mounted() {
    this.startMessageInterval();
  },
  computed: {
    filteredMessages() {
      if (this.showVuexMessages) {
        return this.$store.getters.getColoredMessages;
      }
      return this.customMessages;
    },
    randomMessage() {
      if (this.showVuexMessages) {
        return this.$store.getters.getColoredMessages[this.messageIndex];
      }

      return this.filteredMessages[this.messageIndex];
    },
  },
};
</script>

<style lang="scss">
button {
  background: #42b983;
  border: 0;
  padding: 15px 30px;
  color: white;
  text-align: center;
  box-shadow: var(--box-shadow-short);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<style lang="scss" scoped>
button {
  position: absolute;
  background: #42b983;
  border: 0;
  margin-left: -30px;
  color: white;
  text-align: center;
}
</style>
