import formatDate from '../../utils/format-date'
export default {
  props: {
    formatDate: String,
    content: {
      required: true
    },
    tag: {
      default: 'span'
    },
    props: {
      default() {
        return {
          label: 'label',
          value: 'value'
        }
      }
    },
    options: Array,
    tip: String | Boolean,
    emptyText: {
      default: '--'
    }
  },
  render(h) {
    let content = this.content
    // 日期
    if (this.formatDate) {
      content = formatDate(content, this.formatDate)
    }

    // 选项
    if (this.options && this.options.length && content !== undefined) {
      try {
        content = this.options.filter(v => v[this.props.value] === content)[0][this.props.label]
      } catch (error) {
        console.log(error)
      }
    }

    //空值
    if (!content) {
      content = this.emptyText
    } else {
      content = content + ''
    }


    return this.tip ? h('el-tooltip', {
      props: {
        openDelay: 800,
        effect: 'dark',
        content: 'string' === typeof this.tip ? this.tip : content
      }
    }, [h('div', {
      class: 'ell'
    }, content)]) : h(this.tag, {
      class: 'g9'
    }, content)
  },
}