<script>
const prop = 'value'
const event = 'input'
export default {
  name: 'Toggleable',
  model: { prop, event },
  props: {
    [prop]: { required: false }
  },
  data () {
    return {
      isActive: !!this[prop]
    }
  },
  watch: {
    [prop] (val) {
      this.isActive = !!val
    },
    isActive (val) {
      !!val !== this[prop] && this.$emit(event, val)
    }
  }
}
</script>
