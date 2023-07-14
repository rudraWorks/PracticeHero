import RecordsContext from "./RecordsContext";
import { useEffect, useReducer } from "react";
import { fetchRecords, setRecords } from "../../utils/utils";

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOAD': {
            return fetchRecords()
        }
        case 'BOOKMARK': {
            const { checked, uuid } = action
            let r = fetchRecords()
            let newArr = r.map((record) => {
                if (record.uuid === uuid) {
                    record.bookmarked=checked  
                }
                return record 
            })
            setRecords(newArr)
            return fetchRecords()
        }
        case 'INSERT': {
            let r = fetchRecords()
            if (!r)
                r = []
            r.unshift(action.record)
            setRecords(r)
            return [action.record, ...state]
        }
        case 'DELETE': {
            const uuid = action.uuid
            let newArr = fetchRecords().filter((record) => {
                return record.uuid !== uuid
            })
            setRecords(newArr) 
            return fetchRecords()
        }
        case 'UPDATE': {  
            const uuid = action.uuid
            let r = fetchRecords()
            let newArr = r.map((record) => {
                if (record.uuid === uuid) {
                    return action.record
                }
                return record 
            })
            setRecords(newArr)
            return fetchRecords()
        }
        case 'date':{ 
            let records = fetchRecords() 
            records.sort((recordA,recordB)=>new Date(recordB.date)-new Date(recordA.date))
            setRecords(records) 
            return records
        }
        case 'bookmark':{ 
            let records = fetchRecords() 
            records.sort((recordA,recordB)=>recordA.bookmarked-recordB.bookmarked)
            setRecords(records) 
            return records
        }
        case 'done':{ 
            let records = fetchRecords() 
            records.sort((recordA,recordB)=>{
                const doneA = recordA.problemsSolved*100/recordA.problems 
                const doneB = recordB.problemsSolved*100/recordB.problems 
                return doneA-doneB
            }) 
            setRecords(records)  
            return records
        }
        case 'performance':{ 
            let records = fetchRecords() 
            records.sort((recordA,recordB)=>recordA.performance-recordB.performance)
            setRecords(records) 
            return records
        }
        case 'platform':{ 
            let records = fetchRecords() 
            records.sort((recordA,recordB)=>('' + recordA.platform).localeCompare(recordB.platform))
            setRecords(records) 
            return records
        }

        case 'contest':{ 
            let records = fetchRecords() 
            records.sort((recordA,recordB)=>('' + recordA.contestName).localeCompare(recordB.contestName))
            setRecords(records) 
            return records
        }

        default: return state
    }
}
function RecordsState({ children }) {

    const [records, recordsDispatch] = useReducer(reducer, [])
    useEffect(() => {
        recordsDispatch({ type: 'LOAD' })
    }, []) 


    return (
        <RecordsContext.Provider value={{ records, recordsDispatch }}>{children}</RecordsContext.Provider>
    )
}

export default RecordsState