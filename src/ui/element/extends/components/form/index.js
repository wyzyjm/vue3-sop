import Params, { addRule } from '../../utils/params-util'
import { Base64 } from 'js-base64'

export const COMPONENT_NAME = 'F'

addRule(COMPONENT_NAME, {
	parse(params) {
		return JSON.parse(Base64.decode(params))
	},
	componentization(params) {
		return Base64.encode(JSON.stringify(params))
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
		const props = { ...this.$attrs }
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
			params: new Params(COMPONENT_NAME, this),
			initialData: {},
		}
	},
	methods: {
		async getParams() {
			const valid = await this.$refs.form.validate()
			return valid ? Promise.resolve(this.$attrs.model) : Promise.reject(this.$attrs.model)
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
			this.$emit('clear', this.$attrs.model)
		}
	},
	created() {
		if (!this.$attrs.model) {
			throw new Error('表单的（model）参数不能为空')
		}
		this.$initialData = JSON.parse(JSON.stringify(this.$attrs.model))
		const query = this.params.get()
		if (query) {
			this.$emit('formInit', query)
			// 如果挂载到table下面，触发table下面相应的处理事件
			if (this.TABLE_PROVIDE) {
				this.TABLE_PROVIDE.formInit(query)
			}
		}
	},
}