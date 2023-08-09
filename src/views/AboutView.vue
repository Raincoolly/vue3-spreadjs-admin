<template>
  <div class="about">
    <h1>
      This is an about page
      <icon-ep-alarm-clock class="" />
      <icon-iconamoon:3d class="" />
    </h1>

    <div class="flex">
      <el-button color="#626aef" :dark="isDark" @click="handleClickMini"
        >Default</el-button
      >
      <el-button color="#626aef" :dark="isDark" plain>Plain</el-button>

      <el-button color="#626aef" :dark="isDark" disabled>Disabled</el-button>
      <el-button color="#626aef" :dark="isDark" disabled plain
        >Disabled Plain</el-button
      >
    </div>

    <a-space>
      <a-button type="primary" @click="handleClickMini">Primary</a-button>
      <a-button>Secondary</a-button>
      <a-button type="dashed">Dashed</a-button>
      <a-button type="outline">Outline</a-button>
      <a-button type="text">Text</a-button>
    </a-space>

    <a-space wrap>
      <a-button type="primary">Primary Button</a-button>
      <a-button>Default Button</a-button>
      <a-button type="dashed">Dashed Button</a-button>
      <a-button type="text">Text Button</a-button>
      <a-button type="link">Link Button</a-button>
    </a-space>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
const handleClickMini = () => {
  AMessage.info('hello isboyjc, click mini AButton!')
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
