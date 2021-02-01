
const props = {
    tag: {
        default: 'el-input'
    },
    label: {
        type: String
    },
    prop: {
        type: String
    },
    rules: {
        type: Array
    },
    defaultValue: {
        default: ''
    }
}

export default {
    render(h) {
        const blurArr = ['el-input']
        const event = blurArr.includes(this.tag) ? 'blur' : 'change'
        const rules = Array.isArray(this.rules) ? this.rules.map(rule => {
            if (typeof rule === 'string' && rule === 'required') {
                return { required: true, message: `请${event==='blur' ? '输入' : '选择'}${this.label}`, tirgger: event }
            }
            return rule
        }) : []


        if (this.$slots.default) {
            return h('el-form-item', {
                props: {
                    rules,
                    label: this.label,
                    prop: this.prop,
                }
            }, this.$slots.default)
        }

        const props = { ...this.$attrs }
        const on = { ...this.$listeners }


        if (!this.$slots.default && this.FORM_PROVIDE && !Object.prototype.hasOwnProperty.call(this.FORM_PROVIDE.model, this.prop) && this.prop) {
            this.FORM_PROVIDE.setModel(this.prop, this.defaultValue)
        }

        props.value = this.FORM_PROVIDE.model[this.prop]
        on.input = (val) => {
            this.FORM_PROVIDE.setModel(this.prop, val)
            this.$emit('input', val)
        }

        return h('el-form-item', {
            props: {
                rules,
                label: this.label,
                prop: this.prop,
            }
        }, [h(this.tag, {
            props,
            on
        })])
    },
    inject: {
        FORM_PROVIDE: {
            default: null
        }
    },
    props
}