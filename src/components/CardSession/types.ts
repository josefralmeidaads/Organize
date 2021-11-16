export interface ISession {
  id: number;
  data: string;
  hora: string;
  paciente: IPaciente;
  psicologo: IPsicologo;
}

export interface IPaciente {
  id: number | null,
  nome: string | null,
  estado: string | null,
  cidade: string | null,
  numero: string | null,
  bairro: string | null,
  cep: string | null,
  sobreMim: string | null,
  tipo: string | null,
  imagem: string | null,
  valor: number | null,
  agendamentos: []
}

export interface IPsicologo {
  id: number | null,
  nome: string | null,
  estado: string | null,
  cidade: string | null,
  numero: string | null,
  bairro: string | null,
  cep: string | null,
  sobreMim: string | null,
  tipo: string | null,
  imagem: string | null,
  valor: number | null,
  agendamentos: []
}