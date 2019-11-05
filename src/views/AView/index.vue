<template>
  <div class="a-container">
    <h1 class="a-title">AView 页面</h1>
    <van-cell-group>
      <van-field
        v-model="userForm.username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('question')"
      />

      <van-field v-model="userForm.password" type="password" label="密码" placeholder="请输入密码" required />

      <van-field v-model="userForm.remark" label="备注" placeholder="非必填"></van-field>
    </van-cell-group>
    <div style="display: flex; flex-direction: column;">
      <router-link to="/AView">跳到A</router-link>
      <router-link to="/BView">跳到B</router-link>
      <router-link to="/CView">跳到C</router-link>
      <router-link to="/DView">跳到D</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Inject } from 'vue-property-decorator'
import { UserForm } from './index'

@Component({
  name: 'AView'
})
export default class AView extends Vue {
  private userForm: UserForm = {
    username: '',
    password: '',
    remark: ''
  }

  onPullDownRefresh() {
    setTimeout(() => {
      gc.stopPullDownRefresh()
    }, 1000)
  }

  private inputArr = []
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
