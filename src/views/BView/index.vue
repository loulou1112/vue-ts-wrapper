<template>
  <div>
    <h1>B</h1>
    <button @click="inputArr.push(1)">增加input</button>
    <ul>
      <li v-for="(item, index) in inputArr" :key="index">
        <input type="text" />
      </li>
    </ul>
    <div>
      <router-link to="/A">A</router-link>
      <router-link to="/B">B</router-link>
      <router-link to="/C">C</router-link>
      <router-link to="/D">D</router-link>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
