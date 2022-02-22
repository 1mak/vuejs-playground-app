<template>
  <div class="edit-messages-container">
    <h3>Edit Messages</h3>

    <ul>
      <li v-for="(message, index) in value" :key="`message-${index}`">
        <div class="message">
          <!--          {{ message }}-->
          <template v-if="showVuexMessages">
            <span v-html="message"></span>
          </template>
          <template v-else>
            <input
              type="text"
              v-model="value[index]"
              @keyup.enter="toggleEditMessages"
            />
          </template>
        </div>
        <div class="action" v-if="!showVuexMessages">
          <a href="javascript:" @click="deleteMessage(index)">X</a>
        </div>
      </li>
    </ul>
    <button @click="toggleMessagesFromVuex">
      Load messages from
      <template v-if="showVuexMessages"> Component </template>
      <template v-else> Vuex store </template>
    </button>
    <button class="close" @click="toggleEditMessages">Close</button>
  </div>
</template>

<script>
export default {
  name: "EditMessages",
  props: {
    value: {
      type: Array,
      required: true,
    },
    showVuexMessages: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    toggleMessagesFromVuex() {
      this.$emit("toggleMessagesFromVuex");
    },
    toggleEditMessages() {
      this.$emit("toggleEditMessages");
    },
    deleteMessage(messageIndex) {
      this.$emit("deleteMessage", messageIndex);
    },
  },
};
</script>

<style lang="scss" scoped>
.edit-messages-container {
  background: rgba(0, 0, 0, 0.06);
  padding: 20px;
  border-right: 8px;
  margin: 60px auto 0 auto;
  width: 600px;
  overflow: hidden;
  box-shadow: var(--box-shadow-mid);

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      background: white;
      text-align: left;
      padding: 5px 10px;
      margin: 10px;
      display: flex;
      justify-content: space-between;

      .message {
        width: 400px;

        input {
          background: rgba(249, 255, 164, 0.4);
          padding: 4px 10px;
          width: 100%;
          min-width: 100%;
          border: 0;
        }
      }

      .action {
        a {
          text-decoration: none;
          color: red;
        }
      }
    }
  }
  button {
    position: relative;
    margin: 20px 10px;
    float: left;
  }
  button.close {
    background: black;
    float: right;
  }
}
</style>
