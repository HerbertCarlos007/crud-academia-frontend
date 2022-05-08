import React from 'react'
import '../styles/RegisterStudent.css'

function RegisterStudent() {

    return (
        <div className='container-register-student'>

            <div className='container-form-register-student'>

                <div className='form-register-student-row-1'>
                    <form>
                        <label>Nome Completo</label>
                        <br />
                        <input type='text' className='name-register-student' />

                        <label className='label-email-register-student'>E-mail</label>
                        <br />
                        <input type='text' className='email-register-student' />
                    </form>
                </div>


                <div className='form-register-student-row-2'>
                    <form>
                        <label>CPF</label>
                        <br />
                        <input type='text' className='cpf-register-student' />

                        <label className='label-birth-date-register-student'>Data de Nascimento</label>
                        <br />
                        <input type='date' className='birth-date-register-student' />

                        <label className='label-genre-register-student'>Sexo</label>

                        <select className='type-genre-register-student'>
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
                        <input type='text' className='telphone-register-student' />

                        <label className='label-training-level-register-student'>Nivel de treino</label>
                        <br />
                        <select type='text' className='training-level-register-student'>
                            <option>Selecione</option>
                            <option>Iniciante</option>
                            <option>Intermediário</option>
                            <option>Avançado</option>
                        </select>

                    </form>
                </div>


            <button className='button-register-student'>Cadastrar Aluno</button>
            </div>

        </div>
    )
}

export default RegisterStudent