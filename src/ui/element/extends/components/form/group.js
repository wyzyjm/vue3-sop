const isFunction = (v) => typeof v === 'function'
const isPromise = (v) => Object.prototype.toString.call(v) === '[object Promise]'
import tryGetOnlyArray from '../../utils/data-patch-v1/try-get-only-array'
import tryGetLableAndValue from '../../utils/data-patch-v1/try-get-label-and-value'

const props = {
    tag: {
        default: 'el-select'
    },
    data: {
        required: true
    },
    init: {
        default: true
    },
    props: {
        default() {
            return null
        }
    }
}

export default {
    data() {
        return {
            parsedData: [],
            status: '组件载入中...',
            label: 'label',
            value: 'value'
        }
    },
    watch: {
        data: {
            handler(newValue) {
                this.parseData(newValue)
            }
        }
    },
    methods: {
        setLabelAndValueKey(data) {
            const r = tryGetLableAndValue(data)
            if (r) {
                this.label = r.label
                this.value = r.value
            }
            if (this.props) {
                if (this.props.label) {
                    this.label = this.props.label
                }
                if (this.props.value) {
                    this.value = this.props.value
                }
            }

        },
        parseData(data) {
            this.status = '数据加载中...'
            if (isFunction(data)) {
                this.parseData(data())
            }
            else if (Array.isArray(data)) {
                this.parsedData = [...data]
                this.setLabelAndValueKey(this.parsedData)
                if (this.parsedData.length === 0) {
                    this.status = '暂无数据'
                }
            } else if (isPromise(data)) {
                data.then(response => {
                    this.parsedData = [...tryGetOnlyArray(response).data]
                    this.setLabelAndValueKey(this.parsedData)
                    if (this.parsedData.length === 0) {
                        this.status = '暂无数据'
                    }
                })
            } else {
                this.status = '暂无数据'
            }


        }
    },
    render(h) {
        const props = { ...this.$attrs }
        const on = { ...this.$listeners }
        let tag = this.tag
        let children = []


        if (!this.parsedData || this.parsedData.length === 0) {
            return h('div', this.status)
        }



        if (tag.includes('el-select')) {
            children = this.parsedData.map(v => {
                return h(tag.split('>')[1] || 'el-option', {
                    props: {
                        label: v[this.label],
                        value: v[this.value]
                    }
                })
            })
            tag = 'el-select'
        }

        if (tag.includes('el-radio-group')) {
            children = this.parsedData.map(v => {
                return h(tag.split('>')[1] || 'el-radio', {
                    props: {
                        label: v[this.value]
                    }
                }, v[this.label])
            })
            tag = 'el-radio-group'
        }


        if (tag.includes('el-checkbox-group')) {
            children = this.parsedData.map(v => {
                return h(tag.split('>')[1] || 'el-checkbox', {
                    props: {
                        label: v[this.value]
                    }
                }, v[this.label])
            })
            tag = 'el-checkbox-group'
        }

        return h(tag, {
            props,
            on
        }, children)
    },
    props,
    created() {
        if (this.init) {
            this.parseData(this.data)
        }
    }
}