import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'A'
})
export default class A extends Vue {
  private form: AType.AddForm = {
    username: '',
    password: ''
  }

  private value = ''

  private created() {
    this.value = JSON.stringify(process.env)
    this.$api.getUserInfo()
  }

  private inputArr = []
}
