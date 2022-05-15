import React from 'react'
import '../styles/RegisterStudent.css'
import api from '../services/api'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'



function RegisterStudent() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [birthDate, setBirhtDate] = useState('')
    const [genre, setGenre] = useState('')
    const [telephone, setTelephone] = useState('')
    const [trainingLevel, setTrainingLevel] = useState('')

    const navigate = useNavigate()

    function handleChangeName(e) {
        const textName = e.target.value
        setName(textName)
        
    }

    function handleChangeEmail(e) {
        const textEmail = e.target.value
        setEmail(textEmail)
    }

    function handleChangeCpf(e) {
        const textCpf = e.target.value
        setCpf(textCpf)
    }

    function handleBirthDate(e) {
        const textBirthDate = e.target.value
        setBirhtDate(textBirthDate)
    }

    function handleGenre(e) {
        const textGenre = e.target.value
        setGenre(textGenre)
    }

    function handleTelephone(e) {
        const textTelephone = e.target.value
        setTelephone(textTelephone)
    }

    function handleTrainingLevel(e) {
        const textTrainingLevel = e.target.value
        setTrainingLevel(textTrainingLevel)
    }

    async function registerStudent(e) {
        e.preventDefault()

        try {
            
           const response = await api.post('http://localhost:4000/registerStudents', 
                {name, email, cpf, birthDate, genre, telephone, trainingLevel}
            )

            if(response.status === 201) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Cadastro realizado com sucesso!',
                    showConfirmButton: false,
                    timer: 1500
                 })
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='container-register-student'>

            <div className='container-form-register-student'>

                <div className='form-register-student-row-1'>
                    <form>
                        <label>Nome Completo</label>
                        <br />
                        <input type='text' className='name-register-student' onChange={handleChangeName} />

                        <label className='label-email-register-student'>E-mail</label>
                        <br />
                        <input type='text' className='email-register-student' onChange={handleChangeEmail}/>
                    </form>
                </div>


                <div className='form-register-student-row-2'>
                    <form>
                        <label>CPF</label>
                        <br />
                        <input type='text' className='cpf-register-student' onChange={handleChangeCpf}/>

                        <label className='label-birth-date-register-student'>Data de Nascimento</label>
                        <br />
                        <input type='date' className='birth-date-register-student' onChange={handleBirthDate}/>

                        <label className='label-genre-register-student'>Sexo</label>

                        <select className='type-genre-register-student' onChange={handleGenre}>
                            <option>Selecione</option>
                            <option>Masculino</option>
                            <option>Feminino</option>
                            <option>Outro</option>
                        </select>

                    </form>
                </div>

                <div className='form-register-student-row-3'>
                    <form>
                        <label>Telefone</label>
                        <br />
                        <input type='text' className='telphone-register-student' onChange={handleTelephone}/>

                        <label className='label-training-level-register-student'>Nivel de treino</label>
                        <br />
                        <select type='text' className='training-level-register-student' onChange={handleTrainingLevel}>
                            <option>Selecione</option>
                            <option>Iniciante</option>
                            <option>Intermediário</option>
                            <option>Avançado</option>
                        </select>

                    </form>
                </div>


            <button className='button-register-student' onClick={registerStudent}>Cadastrar Aluno</button>
            </div>

        </div>
    )
}

export default RegisterStudent