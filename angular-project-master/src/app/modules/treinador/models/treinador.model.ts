export interface TreinadorDetalhado extends TreinadorSimples {
    rgTreinador: string;
}

export interface TreinadorSimples {
    idTreinador?: number;
    nomeTreinador: string;
}