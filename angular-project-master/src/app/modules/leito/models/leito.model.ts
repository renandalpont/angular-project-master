export interface LeitoDetalhado extends LeitoSimples {
    statusLeito: string;
    tipoLeito: string;
}

export interface LeitoSimples {
    id?: number;
    numeroLeito: number;
}
