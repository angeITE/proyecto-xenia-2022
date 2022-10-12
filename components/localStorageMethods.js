class LocalStorage {
    getItem(key) {
        const item = global?.localStorage?.getItem(key)
        if (item === null) return undefined
        try {
            return JSON.parse(item)
        } catch { }
        return item
    }
    setItem(key, value) {
        if (value === undefined) {
            global?.localStorage?.removeItem(key)
        } else {
            global?.localStorage?.setItem(key, JSON.stringify(value))
        }
    }
}

export const localStorageMethods = new LocalStorage()