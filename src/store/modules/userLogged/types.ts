export interface IUserLogged {
  id: number,
  cpf: string,
  senha: string,
  psicologo: IPsicologo | null,
  paciente: IPaciente | null,
}

export interface IPaciente {
  id: number,
  nome: string,
  estado: string | null,
  cidade: string | null,
  numero: string | null,
  bairro: string | null,
  cep: string | null,
  tipo: string | null,
  imagem: string | null,
  valor: number | null,
  agendamentos: []
}

export interface IPsicologo {
  id: number,
  nome: string,
  crp: string | null,
  estado: string | null,
  cidade: string | null,
  numero: string | null,
  bairro: string | null,
  cep: string | null,
  sobreMim: string | null,
  tipo: string | null,
  imagem: string | null,
  valor: number,
  agendamentos: []
}
