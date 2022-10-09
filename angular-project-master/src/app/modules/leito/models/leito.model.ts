export interface LeitoDetalhado extends LeitoSimples {
    leitoStatus: boolean;
    tipoLeito: string;
}

export interface LeitoSimples {
    id?: number;
    leitoNumero: string;
}
