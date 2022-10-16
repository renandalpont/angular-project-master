 export interface TreinadorDetalhado extends TreinadorSimples {
    endTreinador: string;
 }

export interface TreinadorSimples {
    idTreinador?: number;
    nomeTreinador: string;
    rgTreinador: string;
}