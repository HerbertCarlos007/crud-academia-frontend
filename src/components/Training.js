import React from 'react'
import { useState } from 'react'
import api from '../services/api'
 
function Training() {

    const [exerciseName, setExerciseName] = useState('')
    const [exerciseLevel, setExerciseLevel] = useState('')

    function handleExerciseName(e) {
        const textExerciseName = e.target.value
        setExerciseName(textExerciseName)
    }

    function handleExerciseLevel(e) {
        const textExerciseLevel = e.target.value
        setExerciseLevel(textExerciseLevel)
    }

    async function registerTraining(e) {
        e.preventDefault()

        try {
            
         await api.post('/registerTraining', 
        {name: exerciseName, levelTraining: exerciseLevel}
    )
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className='training-container'>
            <form >
                <input type='text' placeholder='Nome do exercicio' onChange={handleExerciseName}/>
                <select onChange={handleExerciseLevel}>
                    <option>Selecione</option>
                    <option>Iniciante</option>
                    <option>Intermediário</option>
                    <option>Avançado</option>
                </select>

                <button onClick={registerTraining}>Salvar</button>
            </form>
        </div>
    );
}

export default Training