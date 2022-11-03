 export interface TreinadorDetalhado extends TreinadorSimples {
    endTreinador: string;
    statusTreinador: string;
 }

export interface TreinadorSimples {
    id?: number;
    nomeTreinador: string;
    rgTreinador: string;
}