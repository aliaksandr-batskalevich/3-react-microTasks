import React, {MouseEvent} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2';
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAllHandler = (event: MouseEvent<HTMLButtonElement>) => {
        props.setFilter('all')
    } // need to fix
    const setHighHandler = (event: MouseEvent<HTMLButtonElement>) => {
        props.setFilter('high')
    }
    const setMiddleHandler = (event: MouseEvent<HTMLButtonElement>) => {
        props.setFilter('middle')
    }
    const setLowHAndler = (event: MouseEvent<HTMLButtonElement>) => {
        props.setFilter('low')
    }

    return (
        <div className={s.affairsWrapper}>
            <table className={s.table}>
                <tr className={s.tableRowHead}>
                    <th>Tasks</th>
                    <th>Priority</th>
                    <th>Del</th>
                </tr>
                {mappedAffairs}
            </table>


            <div className={s.buttonsWrapper}>
                <button onClick={setAllHandler}>All</button>
                <button onClick={setHighHandler}>High</button>
                <button onClick={setMiddleHandler}>Middle</button>
                <button onClick={setLowHAndler}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
