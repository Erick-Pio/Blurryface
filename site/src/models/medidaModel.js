var database = require("../database/config");

function votar(Idcover){
    instrucaoSql = `INSERT INTO 
                        votacao (FkCover) 
                            VALUES (${Idcover})`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas(Idcover) {

    instrucaoSql = `select nome, 
    ROUND((count(fkcover) / t.total * 100),1) as porcentagem,
   count(FkCover) as id 
        from cover
            join votacao
                on FkCover = idcover,
                    ( SELECT COUNT(FkCover) as total from votacao) t
 group by FkCover`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarMedidasEmTempoReal(Idcover) {
    instrucaoSql = `select nome, count(FkCover) as id from cover
    join votacao
    on FkCover = idcover
    group by FkCover
    order by FkCover`;
console.log("Executando a instrução SQL: \n" + instrucaoSql);
return database.executar(instrucaoSql);
}


module.exports = {
    votar,
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
