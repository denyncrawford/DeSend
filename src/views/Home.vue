<template>
  <div class="w-full h-screen absolute text-center flex justify-center items-center">
    <div>
      <div class="p-10 flex flex-col items-center justify-center text-center">
        <h1 class="text-6xl font-bold text-indigo-600">Welcome to DeChat</h1>
        <p class="mt-10 text-md max-w-lg text-gray-400">
          DeChat is a chat application built with Vue.js and TailwindCSS that
          runs over the ipfs protocol, so this is a free, real-time and
          descentralized chat app that never will be shutdown.
        </p>
      </div>
      <div class="grid grid-cols-3 gap-4 text-gray-400">
        <button class="hover:border-indigo-600 hover:text-indigo-600 p-2 col-span-3 10 border border-gray-700 border-dashed rounded-lg text-sm">How DeChat works?</button>
        <button class="hover:border-indigo-600 hover:text-indigo-600 p-2 col-end-3 col-start-1 10 border border-gray-700 border-dashed rounded-lg text-sm">Know our privacy policy</button>
        <router-link tag="button" to="/connect" class="border border-transparent hover:border-indigo-600 hover:bg-transparent p-2 10 bg-indigo-600 text-white rounded-lg">Start</router-link>
      </div>
    </div>
  </div>
</template>