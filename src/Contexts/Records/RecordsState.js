import RecordsContext from "./RecordsContext";
import { useEffect, useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOAD': {
            return action.records
        }
        case 'BOOKMARK': {
            const { checked, uuid } = action
            console.log(checked, uuid)
            let r = JSON.parse(localStorage.getItem('records'))
            let newArr = r.map((record) => {
                record = JSON.parse(record)
                if (record.uuid === uuid) {
                    record.bookmarked=checked  
                }
                return JSON.stringify(record)
            })
            localStorage.setItem('records', JSON.stringify(newArr))

            r = JSON.parse(localStorage.getItem('records'))
            let arr = []
            for (let item of r) {
                arr.push(JSON.parse(item))
            }
            return arr
        }
        case 'INSERT': {
            let r = JSON.parse(localStorage.getItem('records'))
            if (!r)
                r = []
            r.unshift(JSON.stringify(action.record))
            localStorage.setItem('records', JSON.stringify(r))
            return [action.record, ...state]
        }
        case 'DELETE': {
            const uuid = action.uuid
            let r = JSON.parse(localStorage.getItem('records'))
            let newArr = r.filter((record) => {
                return JSON.parse(record).uuid !== uuid

            })
            localStorage.setItem('records', JSON.stringify(newArr))
            r = JSON.parse(localStorage.getItem('records'))
            let arr = []
            for (let item of r) {
                arr.push(JSON.parse(item))
            }
            return arr
        }
        case 'UPDATE': {
            const uuid = action.uuid
            const newRecord = JSON.stringify(action.record)
            let r = JSON.parse(localStorage.getItem('records'))
            let newArr = r.map((record) => {
                record = JSON.parse(record)
                if (record.uuid === uuid) {
                    return newRecord
                }
                return JSON.stringify(record)
            })
            localStorage.setItem('records', JSON.stringify(newArr))

            r = JSON.parse(localStorage.getItem('records'))
            let arr = []
            for (let item of r) {
                arr.push(JSON.parse(item))
            }
            return arr
        }
        default: return state
    }
}
function RecordsState({ children }) {

    const [records, recordsDispatch] = useReducer(reducer, [])
    useEffect(() => {
        let r = localStorage.getItem('records')
        if (!r) return undefined
        r = JSON.parse(r)
        let arr = []
        for (let item of r) {
            arr.push(JSON.parse(item))
        }
        recordsDispatch({ type: 'LOAD', records: arr })
    }, [])


    return (
        <RecordsContext.Provider value={{ records, recordsDispatch }}>{children}</RecordsContext.Provider>
    )
}

export default RecordsState