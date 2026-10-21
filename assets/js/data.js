/* Dados iniciais e persistência isolados do código de interface. */
(function(){
 const KEY='conectahub.v2.data';
 const seed={
  datasets:[
   {id:'CN-001',name:'API de Qualificação de Endereços',org:'Secretaria de Governo Digital',type:'API',description:'Qualificação e validação de endereços para integração entre serviços públicos.',period:'Não informada',attributes:['Endereço','Indicadores de qualificação'],operations:['Consulta','Integração'],status:'Ativo'},
   {id:'CN-002',name:'API Hub Cobrança',org:'Procuradoria-Geral da Fazenda Nacional',type:'API',description:'Integração de sistemas públicos para consulta de cobranças.',period:'Não informada',attributes:['Dados de cobrança'],operations:['Consulta','Integração'],status:'Ativo'},
   {id:'CN-003',name:'Cadastro Base do Cidadão',org:'Secretaria de Governo Digital',type:'Arquivo',description:'Dados cadastrais para integração de serviços públicos.',period:'Mensal',attributes:['Dados cadastrais'],operations:['Arquivo seguro'],status:'Ativo'},
   {id:'CN-004',name:'Base de Benefícios Sociais',org:'Ministério do Desenvolvimento e Assistência Social',type:'Arquivo',description:'Informações para análise e execução de políticas sociais.',period:'Mensal',attributes:['Benefícios','Situação cadastral'],operations:['Arquivo seguro'],status:'Ativo'},
   {id:'CN-005',name:'Cadastro de Estabelecimentos de Saúde',org:'Ministério da Saúde',type:'API',description:'Informações de estabelecimentos e serviços de saúde.',period:'Semanal',attributes:['Estabelecimentos','Serviços'],operations:['Consulta'],status:'Ativo'},
   {id:'CN-006',name:'Cadastro Nacional de Pessoas Jurídicas',org:'Receita Federal do Brasil',type:'Arquivo',description:'Informações cadastrais de pessoas jurídicas.',period:'Mensal',attributes:['CNPJ','Situação cadastral'],operations:['Arquivo seguro'],status:'Ativo'}
  ],
  requests:[
   {id:'SOL-2026-001',dataset:'API de Qualificação de Endereços',datasetId:'CN-001',cedente:'Secretaria de Governo Digital',solicitante:'Secretaria de Governo Digital',type:'Adesão',access:'API',volume:'250.000 consultas/ano',technical:'Integração via API institucional',status:'Em análise',createdAt:'2026-10-15',services:'Qualificação de endereços',benefits:'Melhorar a qualidade dos cadastros públicos',policies:'Transformação digital',lgpd:'sim',purpose:'Execução de política pública',hypotheses:['Execução de Políticas Públicas'],sensitive:'Não',security:'Controle de acesso, autenticação e registro de auditoria',dirTi:'Marcia Cardador',respTech:'Roberto Almeida',history:[{status:'Enviada',date:'2026-10-15',note:'Solicitação registrada.'},{status:'Em análise',date:'2026-10-16',note:'Encaminhada ao órgão cedente.'}]},
   {id:'SOL-2026-002',dataset:'Base de Benefícios Sociais',datasetId:'CN-004',cedente:'Ministério do Desenvolvimento e Assistência Social',solicitante:'Secretaria de Governo Digital',type:'Adesão',access:'Arquivo',volume:'80.000 registros/ano',technical:'Entrega mensal por canal seguro',status:'Aguardando aprovação',createdAt:'2026-10-11',services:'Integração de serviços',benefits:'Reduzir retrabalho e melhorar a análise',policies:'Transformação digital',lgpd:'nao',history:[{status:'Enviada',date:'2026-10-11',note:'Solicitação registrada.'}]},
   {id:'SOL-2026-003',dataset:'Cadastro de Estabelecimentos de Saúde',datasetId:'CN-005',cedente:'Ministério da Saúde',solicitante:'Secretaria de Governo Digital',type:'Alteração de volumetria',access:'API',volume:'500.000 consultas/ano',technical:'Aumento de limite de consumo',status:'Aprovada',createdAt:'2026-10-04',services:'Consulta de rede de saúde',benefits:'Atualização dos dados de referência',policies:'Transformação digital',lgpd:'nao',history:[{status:'Enviada',date:'2026-10-04',note:'Solicitação registrada.'},{status:'Aprovada',date:'2026-10-08',note:'Aprovada pelo órgão cedente.'}]}
  ],
  users:[
   {id:'USR-001',name:'Marcia Cardador',email:'marcia.cardador@governo.gov.br',cpf:'000.000.000-01',org:'Secretaria de Governo Digital',status:'Ativo',profiles:['Solicitante']},
   {id:'USR-002',name:'Roberto Almeida',email:'roberto.almeida@governo.gov.br',cpf:'000.000.000-02',org:'Secretaria de Governo Digital',status:'Ativo',profiles:['Responsável Técnico']},
   {id:'USR-003',name:'Ana Souza',email:'ana.souza@governo.gov.br',cpf:'000.000.000-03',org:'Secretaria de Governo Digital',status:'Ativo',profiles:['Dirigente de TI']},
   {id:'USR-004',name:'Carlos Lima',email:'carlos.lima@governo.gov.br',cpf:'000.000.000-04',org:'Ministério da Saúde',status:'Ativo',profiles:['Responsável Técnico']}
  ],
  profiles:[{id:'PRF-001',name:'Solicitante',description:'Registra e acompanha solicitações.'},{id:'PRF-002',name:'Gestor cedente',description:'Analisa e decide solicitações recebidas.'},{id:'PRF-003',name:'Administrador',description:'Administra usuários e configurações.'}],
  orgs:[
   {id:'ORG-001',name:'Secretaria de Governo Digital',acronym:'SGD',kind:'Federal',status:'Ativo'},
   {id:'ORG-002',name:'Ministério da Saúde',acronym:'MS',kind:'Federal',status:'Ativo'},
   {id:'ORG-003',name:'Receita Federal do Brasil',acronym:'RFB',kind:'Federal',status:'Ativo'},
   {id:'ORG-004',name:'Ministério do Desenvolvimento e Assistência Social',acronym:'MDS',kind:'Federal',status:'Ativo'}
  ],
  missingDatasets:[]
 };
 function clone(v){return JSON.parse(JSON.stringify(v))}
 function load(){
  try{const saved=localStorage.getItem(KEY);if(saved){const parsed=JSON.parse(saved);return {...clone(seed),...parsed}}}catch(e){console.warn('Não foi possível ler dados locais.',e)}
  return clone(seed)
 }
 window.ConectaData={KEY,seed:clone(seed),load,save(data){try{localStorage.setItem(KEY,JSON.stringify(data));return true}catch(e){console.error(e);return false}},clone};
})();