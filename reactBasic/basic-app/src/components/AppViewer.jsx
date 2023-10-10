import styles from './AppViewer.module.css'

const AppViewer = () => {
  const professor = [
    {
      id: 1,
      nome: "Vargas",
      idade: 18,
      formacao: "DSM",
      titulacao: "Mestre"
    },
    {
      id: 2,
      nome: "Rosa",
      idade: 23,
      formacao: "Engenharia",
      titulacao: "Bacharel"
    },
    {
      id: 3,
      nome: "Silva",
      idade: 30,
      formacao: "Psicologia",
      titulacao: "Doutor"
    },
    {
      id: 4,
      nome: "Machado",
      idade: 25,
      formacao: "Administração",
      titulacao: "Especialista"
    },
    {
      id: 5,
      nome: "Fernandes",
      idade: 21,
      formacao: "Arquitetura",
      titulacao: "Bacharel"
    },
    {
      id: 6,
      nome: "Pereira",
      idade: 29,
      formacao: "Direito",
      titulacao: "Mestre"
    },
    {
      id: 7,
      nome: "Martins",
      idade: 26,
      formacao: "Medicina",
      titulacao: "Doutor"
    },
    {
      id: 8,
      nome: "Lima",
      idade: 24,
      formacao: "Economia",
      titulacao: "Especialista"
    },
    {
      id: 9,
      nome: "Santos",
      idade: 22,
      formacao: "Engenharia de Computação",
      titulacao: "Bacharel"
    }
  ]
  return (
    <>
      <h2>Lista de Professores</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Formação</th>
            <th>Titulação</th>
          </tr>
        </thead>
        <tbody>
          {professor.map((professor) => (
            <tr className={professor.id % 2 == 1 ? styles.linhaCinza : null} key={professor.id}>
              <td>{professor.nome}</td>
              <td>{professor.idade}</td>
              <td>{professor.formacao}</td>
              <td className={professor.titulacao == 'Mestre' || professor.titulacao == 'Doutor' ? styles.superTitulo : styles.normalTitle} >{professor.titulacao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};


export default AppViewer