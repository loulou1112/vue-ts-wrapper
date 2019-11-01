import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'A'
})
export default class Home extends Vue {
  private form: AType.AddForm = {
    username: '',
    password: ''
  }

  private value = ''

  private created() {
    // this.popAlert()
    this.value = JSON.stringify(process.env)
  }

  private inputArr = []
}
