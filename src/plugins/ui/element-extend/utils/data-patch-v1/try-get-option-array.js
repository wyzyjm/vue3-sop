
import tryGetLabelAndValue from './try-get-label-and-value'
import tryGetOnlyArray from './try-get-only-array'

const format = {
    label: 'label',
    value: 'value'
}

export default (data) => {
    const onlyArray = tryGetOnlyArray(data)
    if (onlyArray.error) {
        return []
    }
    const labelAndValueKey = tryGetLabelAndValue(onlyArray.data)
    if (labelAndValueKey === null) return []
    return onlyArray.map(v => {
        return {
            [format.label]: v[labelAndValueKey.label],
            [format.value]: v[labelAndValueKey.value]
        }
    })
}