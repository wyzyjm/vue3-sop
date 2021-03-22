import Params, { addRule } from '../../utils/params-util'
import { Base64 } from 'js-base64'

export const COMPONENT_NAME = 'F'

addRule(COMPONENT_NAME, {
	parse(params) {
		return JSON.parse(Base64.decode(params.replace(/@/g, '/')))
	},
	componentization(params) {
		const result = Base64.encode(JSON.stringify(params))
		return result.replace(/\//g, '@')
	}
})

const props = {
	uid: {
		default() {
			// 如果挂载到table下面，默认使用table的uid
			return this.TABLE_PROVIDE ? this.TABLE_PROVIDE.uid : 0
		}
	},
}

export default {
	render(h) {
		const props = { ...this.$attrs, model: this.model }
		const on = { ...this.$listeners }

		return h('el-form', {
			ref: 'form',
			props,
			on,
			nativeOn: {
				submit(e) {
					e.preventDefault()
				}
			}
		}, this.$slots.default)

	},
	props,
	provide() {
		return {
			FORM_PROVIDE: this
		}
	},
	inject: {
		TABLE_PROVIDE: {
			default: null
		}
	},
	data() {
		return {
			model: {},
			params: new Params(COMPONENT_NAME, this),
			initialData: {},
		}
	},
	methods: {
		async getParams() {
			const valid = await this.$refs.form.validate()
			return valid ? Promise.resolve(this.model) : Promise.reject(this.model)
		},
		async submit() {
			const res = await this.getParams()
			this.$emit('submit', res)
		},
		async search() {
			const res = await this.getParams()
			await this.params.set(res)
			this.$emit('search', res)
			// 如果挂载到table下面，触发table下面相应的处理事件
			if (this.TABLE_PROVIDE) {
				this.TABLE_PROVIDE.formSearch(res)
			}
		},
		reset() {
			this.params.clear()
			this.$refs.form.resetFields()
			this.$emit('reset', { ...this.initialData })
			// 如果挂载到table下面，触发table下面相应的处理事件
			if (this.TABLE_PROVIDE) {
				this.TABLE_PROVIDE.formReset({ ...this.initialData })
			}
		},
		clear() {
			this.params.clear()
			this.$refs.form.resetFields()
			this.$emit('clear', this.model)
		},
		setModel(key, value) {
			if (!Object.prototype.hasOwnProperty.call(this.model, key)) {
				this.$set(this.model, key, value)
			} else {
				this.model[key] = value
			}
		}
	},
	created() {
		this.initialData = JSON.parse(JSON.stringify(this.model))
		const query = this.params.get()
		if (this.$attrs.model) {
			this.model = this.$attrs.model
		}
		if (query) {
			this.$emit('formInit', query)
			// 如果挂载到table下面，触发table下面相应的处理事件
			if (this.TABLE_PROVIDE) {
				this.TABLE_PROVIDE.formInit(query)
				Object.keys(query).forEach(v => {
					this.setModel(v, query[v])
				})
			}
		}
	},
}