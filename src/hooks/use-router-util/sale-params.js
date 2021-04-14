import { Base64 } from 'js-base64'
import { reactive } from '@vue/composition-api'

// 解决部分JSON.stringify数据在地址栏中使用可能被截断的问题
// 仅支持JSON-String互转
export default (data) => {
	const isDecode = typeof data === 'string'
	let result = isDecode ? reactive({}) : ''
	if (isDecode) {
		try {
			result = reactive(JSON.parse(Base64.decode(data.replace(/@/g, '/'))))
		} catch (error) {
			console.warn(error);
		}
	} else {
		try {
			result = Base64.encode(JSON.stringify(data))
			result = result.replace(/\//g, '@')
			if (result.length > 65536) {
				throw '编码字符可能超过安全长度，请注意！'
			}
		} catch (error) {
			console.warn(error)
		}
	}
	return result
}

