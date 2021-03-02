import { ref } from '@vue/composition-api'

export const editId = ref('')

export const isEdit = (row) => {
    return editId.value === row.id
}
export const createEditRow = (row, key) => {
    return isEdit(row) ? (
        <s-input
            value={row[key]}
            onInput={(val) => {
                row[key] = val
            }}
        />
    ) : (
            row[key]
        )
}
export const saveEdit = (fn) => {
    fn()
    editId.value=''
}

export const resetEdit = () => {
    editId.value = ''
}

export const startEdit = (row) => {
    editId.value = row.id
}