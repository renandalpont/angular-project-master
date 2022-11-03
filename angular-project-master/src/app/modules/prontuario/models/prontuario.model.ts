export interface ProntuarioDetalhado extends ProntuarioSimples {
    descricaoProntuario: string;
}

export interface ProntuarioSimples {
    id?: number;
    nomeMedico: string;
}
