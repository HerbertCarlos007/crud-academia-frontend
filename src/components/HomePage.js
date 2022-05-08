import React from 'react'
import '../styles/HomePage.css'
import { useNavigate } from 'react-router-dom'




function HomePage() {

    const navigate = useNavigate()

    function navigateToStudents() {
        navigate('/students')
    }

    function navigateToRegisterStudents() {
        navigate('/registerStudent')
    }

    function navigateToTraining() {
        navigate('/training')
    }

    return (
        <div className='container-home-page'>
            <header>
                <div className='navBar'>
                    <img className='image-home-page-navBar' src='https://apsd.com.br/wp-content/uploads/2021/11/12853-logo-academia-strong.webp'/>

                    <div className='links-navBar'>
                        <h4 onClick={navigateToStudents}>Alunos</h4>
                        <h4 onClick={navigateToRegisterStudents} >Cadastrar Alunos</h4>
                        <h4 onClick={navigateToTraining}>Treinos</h4>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default HomePage