import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'A'
})
export default class Home extends Vue {
  private created() {
    // console.log(this.$router.redirect('/B'))
    // console.log(this.$form)
  }

  private inputArr = []
}
