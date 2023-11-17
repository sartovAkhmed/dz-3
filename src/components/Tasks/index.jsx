import { useState } from 'react';
import stylles from './Tasks.module.css'

export function Tasks() {
    const [tasks, setTask] = useState([])
    function onClickTaskAdd() {
        const text = prompt('plesse aded text')
        setTask([text, ...tasks])
    }
    function onClickTaskRemove(index) {
        setTask(tasks.filter((_, i) => i !== index))
    }
    function onClickTaskRemoveAll() {
        setTask([])
    }
    function onClickTaskEdit(index) {
        const upGreateText = prompt('up greate text')
        setTask(
        tasks.map((obj, i) => {
            if (index === i) {
                obj = upGreateText
            }
            return obj
        })
        )
    }

    return (
        <div className={stylles.tasks}>
            <h2>List tasks</h2>
            <div className={stylles.tasksContent}>
                <button onClick={onClickTaskAdd}>Добавить</button>
                <button onClick={onClickTaskRemoveAll}>delete all</button>
            </div>
            {tasks.map((task, index) => (
                <div className={stylles.task}>
                    <h3>{task}</h3>
                    <div className={stylles.taskContent}>
                        <button onClick={() => onClickTaskEdit(index)}>EDIT</button>
                        <button onClick={() => onClickTaskRemove(index)}>X</button>
                    </div>
                </div>
            ))}
        </div>
    )
}