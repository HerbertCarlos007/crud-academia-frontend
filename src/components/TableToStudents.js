
import { useEffect, useState } from 'react'
import api from './../services/api'
export default ({ rows, columns }) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const response = await api.get('/students')
    setUsers(response.data)
  }

  return (<table class="table table-bordered border-primary">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nome</th>
        <th scope="col">Data de Nascimento</th>
        <th scope="col">CPF</th>
        <th scope="col">Telefone</th>
        <th scope="col">Nivel de Treino</th>
        <th scope="col">Sexo</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user, index) =>
        <tr>
          <th scope="row">{index + 1}</th>
          <td>{user.name}</td>
          <td>{user.birthDate}</td>
          <td>{user.cpf}</td>
          <td>{user.telephone}</td>
          <td>{user.trainingLevel}</td>
          <td>{user.genre}</td>
        </tr>
      )
      }

    </tbody>
  </table>)
}