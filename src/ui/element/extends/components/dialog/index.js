import { mapState } from 'vuex'
import { timestamp, uid, event, params } from '../../store/config'

const props = {
  uid: {
    default: 0
  },
  component: {
    required: true
  }
}

export default {
  watch: {
    sTimestamp() {
      if (
        this.sUID === this.uid || this.sUID === 'all'
      ) {
        this.visible = this.sEvent === 'open'
      }
    },
  },
  computed: {
    ...mapState({
      sTimestamp: state => state.dialog[timestamp],
      sUID: state => state.dialog[uid],
      sEvent: state => state.dialog[event],
      sParams: state => state.dialog[params]
    })
  },
  data() {
    return {
      visible: false
    }
  },
  props,
  render(h) {
    const props = { ...this.$attrs }
    const on = { ...this.$listeners }
    props['destroy-on-close'] = true
    props['close-on-click-modal'] = false
    props['visible'] = this.visible


    const component = (!this.component.render && this.component.default.render) ? this.component.default : this.component

    return h('el-dialog', {
      props,
      on: {
        'update:visible': (isOpen) => {
          this.$store.commit(`dialog/${isOpen ? 'open' : 'close'}`, { _uid: this.uid })
        }
      },
    }, [this.visible, this.visible && h(component, { on, props: this.sParams })])
  },

}


