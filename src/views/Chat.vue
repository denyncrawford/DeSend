<template>
  <div class="w-full h-screen absolute text-center flex justify-center items-center">
    <div class="w-3/4 h-4/5 flex relative border rounded-lg border-indigo-600 overflow-hidden">
      <div class="border-r relative border-indigo-600 min-w-7xl flex flex-col">
        <div class="flex items-center px-8 py-3 border-b border-indigo-600">
          <div class="w-14 h-14 bg-center bg-no-repeat bg-cover" :style="{backgroundImage:`url(${user.avatar})`}"></div>
          <div class="flex-col text-left mx-5 text-white">
            <div class="text-md font-bold">{{ user.username }}</div>
            <div class="text-xs text-indigo-600">{{ user.id }}</div>
          </div>
          <div class="flex ml-5">
            <button class="text-white p-2 rounded-full" @click="setLocation('new')"><PlusIcon class="h-5 w-5 text-white"/></button>
            <button class="text-white p-2 ml-2 rounded-full" @click="setLocation('chats')"><ChatAlt2Icon class="h-5 w-5 text-white"/></button>
            <button class="text-white p-2 ml-2 rounded-full" @click="setLocation('config')"><CogIcon class="h-5 w-5 text-white"/></button>
          </div>
        </div>
        <div class="h-full overflow-hidden">
          <div class="h-full max-h-full relative">
            <transition-group :name="transitionName">
              <div class="absolute" key="chats" v-if="chats.length && location === 'chats'">

              </div>
              <div class="w-full h-full absolute" key="no-chats" v-if="!chats.length && location === 'chats'">
                <div class="text-center -mt-10 flex flex-col justify-center items-center h-full text-gray-600 text-sm">
                  <ExclamationCircleIcon class="w-14 h-14 mb-5 text-indigo-600" />
                  <div class="text-gray-600 text-sm">No chats yet</div>
                  <div class="text-gray-600 text-sm">Start chatting with your friends</div>
                  <button class="hover:border-indigo-600 border-transparent border mt-5 text-indigo-600 rounded-lg px-4 py-2" @click="setLocation('new')">Start Chatting</button>
                </div>
              </div>
              <div class="w-full h-full absolute" key="new" v-if="location === 'new'">
                <div class="text-center -mt-10 flex flex-col justify-center items-center h-full text-gray-600 text-sm">
                  <img class=" w-5/12" :src="qrCode" alt="" title="" />
                  <p class="mt-5 font-bold">Share this address to start a chat</p>
                  <div class="text-white font-bold text-xl mt-5">{{ user.id }}</div>
                  <input v-model="connectId" class="text-center bg-transparent font-bold border-none mt-5" type="text" placeholder="Type here an address">
                  <div>
                    <button class="hover:border-indigo-600 border-transparent border mt-5 text-indigo-600 rounded-lg px-4 py-2" @click="setLocation('chats')">Go Back</button>
                    <button class="border-indigo-600 hover:bg-transparent ml-5 hover:text-indigo-600 bg-indigo-600 border-transparent border mt-5 text-white rounded-lg px-4 py-2" @click="connect">Connect chat</button>
                  </div>
                </div>
              </div>
              <div class="w-full h-full absolute" key="config" v-if="location === 'config'">
                <div>config</div>
                <button @click="goBack()">Go back</button>
              </div>
            </transition-group>
          </div>
        </div>
      </div>
      <div class="w-full h-full">
        
        <!-- <button @click="getAllUsers" class="border border-transparent hover:border-indigo-600 hover:bg-transparent p-2 10 bg-indigo-600 text-white rounded-lg"> Click here to log all users </button> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { PlusIcon, CogIcon, ChatAlt2Icon, ExclamationCircleIcon } from "@heroicons/vue/outline"
export default {
  data() {
    return {
      location: "chats",
      transitionName: "fade",
      locationHistory: [],
      chats: [],
      chats: [],
      contacts: [],
      currentChat: {
        id: "",
        name: "",
        messages: []
      },
      connectId: "",
    }
  },
  computed: {
    ...mapState(['mainDB', 'user']),
    qrCode() {
      return `https://api.qrserver.com/v1/create-qr-code/?data=${this.user.id}&size=700x700&color=4f46e5&bgcolor=1f2937`
    }
  },
  methods: {
    async getAllUsers() {
      const users = await this.mainDB.get('')
      console.log(users)
    },
    setLocation(location) {
      if (this.location === location) return;
      if (this.locationHistory.slice(-1)[0] === location) return this.goBack();
      this.transitionName = "fade"
      this.locationHistory.push(this.location)
      this.location = location;
      if (location === 'chats') this.locationHistory = [];
    },
    goBack() {
      if (this.locationHistory.length === 0) return;
      this.transitionName = "fadeBack"
      this.location = this.locationHistory.pop()
    },
    async connect() {
      const peer = await this.mainDB.get(this.connectId)
      if (!peer.length) return this.$toasts.error("No peer found");
      if (peer[0]._id === this.user.id) return this.$toasts.error("You can't connect to yourself");
    }
  },
  components: {
    PlusIcon,
    CogIcon,
    ChatAlt2Icon,
    ExclamationCircleIcon
  }
}
</script>

<style scoped>
.fade-enter-active {
  animation: fadeInRight; /* referring directly to the animation's @keyframe declaration */
  animation-duration: .8s; /* don't forget to set a duration! */
}
.fade-leave-active {
  animation: fadeOutLeft;
  animation-duration: .8s;
}
.fadeBack-enter-active {
  animation: fadeInLeft; /* referring directly to the animation's @keyframe declaration */
  animation-duration: .8s; /* don't forget to set a duration! */
}
.fadeBack-leave-active {
  animation: fadeOutRight;
  animation-duration: .8s;
}
</style>
