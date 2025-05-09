export type Role = "admin" | "editor" | null;

export type Tarefa = {
  id: string;
  title: string;
  description: string;
  status: "pendente" | "em_progresso" | "concluida";
  priority: "alta" | "media" | "baixa";
  dueDate: Date;
  assignedTo: string;
  comments: string[];
  attachments: string[];
  createdAt: Date;
  updatedAt: Date;
};

export type Setor =
  | "Saúde"
  | "Educação"
  | "Administrativo"
  | "Transporte"
  | "Assistência Social"
  | "Cultura"
  | "Meio Ambiente"
  | "Obras"
  | "Segurança Pública"
  | "Fazenda"
  | "Turismo"
  | "Esportes e Lazer"
  | "Planejamento"
  | "Comunicação"
  | "Ciência e Tecnologia"
  | "Gabinete"
  | "Prefeito";

export type PedidoStatus = 'Pendente' | 'Em Análise' | 'Aprovado' | 'Em Andamento' | 'Concluído' | 'Rejeitado';

export interface Item {
  id: string;
  nome: string;
  quantidade: number;
  valorUnitario: number;
  valorTotal?: number;
}

export interface PedidoCompra {
  id: string;
  descricao: string;
  dataCompra: Date;
  setor: Setor;
  itens: Item[];
  valorTotal: number;
  status: PedidoStatus;
  fundoMonetario: string;
  createdAt: Date;
  justificativa?: string;
  solicitante?: string;
  observacoes?: string;
  workflow?: Workflow;
  localEntrega?: string;
}

export type WorkflowStepStatus = 'Pendente' | 'Em Andamento' | 'Concluído';

export interface WorkflowStep {
  id: string;
  title: string;
  status: WorkflowStepStatus;
  date?: Date;
  dataConclusao?: Date;
  responsavel?: string;
}

export interface Workflow {
  currentStep: number;
  totalSteps: number;
  percentComplete: number;
  steps: WorkflowStep[];
}

export interface Municipio {
  id: string;
  nome: string;
  estado: string;
  populacao: number;
  logo?: string;
  orcamento: number;
  orcamentoAnual: number;
  prefeito: string;
}

export interface DadosDashboard {
  resumoFinanceiro: {
    estimativaDespesa: number;
    valorContratadoTotal: number;
    percentualUtilizado: number;
    totalPedidos: number;
    orcamentoAnual?: number;
  };
  cartoes: Array<{
    titulo: string;
    valor: string | number;
    percentualMudanca: number;
    icon: string;
    classeCor: string;
  }>;
  orcamentoPrevisto: Record<string, number>;
  gastosPorSetor: Record<string, number>;
  valorContratadoTotal: number;
  pedidosPorSetor: Record<string, number>;
  indicadoresDesempenho: {
    tempoMedioConclusao: number;
    percentualEconomia: number;
  };
}

export type UserRole = 'admin' | 'user' | 'manager' | 'prefeito';

export interface Funcionario {
  id: string;
  nome: string;
  cpf: string;
  dataNascimento: Date;
  email: string;
  cargo: string;
  setor: Setor;
  setoresAdicionais?: Setor[];
  dataContratacao: Date;
  ativo: boolean;
  senha?: string;
  permissaoEtapa?: string;
  username?: string;
  telefone?: string;
}

export interface LoginLog {
  userId: string;
  timestamp: string;
  success: boolean;
  ip: string;
}

export interface UsuarioLogin {
  id: string;
  username: string;
  senha: string;
  funcionarioId: string;
  role: UserRole;
  ativo: boolean;
  primeiroAcesso?: boolean;
}

export interface PrefeitoData {
  id: string;
  nome: string;
  municipio: string;
  mandatoInicio: Date;
  mandatoFim: Date;
  partido: string;
  email: string;
  telefone: string;
}

export interface Pedido {
  id: string;
  titulo: string;
  descricao: string;
  setor: string;
  status: string;
  dataCriacao: Date;
  dataAtualizacao: Date;
  valorTotal: number;
  itens: any[];
  etapaAtual?: string;
  responsavel?: string;
}
