import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'A'
})
export default class A extends Vue {
  private form: any = {
    username: '',
    password: ''
  }

  private value = ''

  created() {
    this.value = JSON.stringify(process.env)
    this.$service.getUserInfo({ username: { name: 123 } })
  }

  private inputArr = []
}
