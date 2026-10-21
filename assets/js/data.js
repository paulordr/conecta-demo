/* Dados iniciais e persistência isolados do código de interface. */
(function(){
 const KEY='conectahub.v2.data';
 const seed={
  datasets:[
  {
    "id": "CN-001",
    "name": "API de Qualificação de Endereços",
    "org": "Ministério da Gestão e da Inovação em Serviços Públicos (MGI)",
    "period": "Não informada",
    "operations": [
      "Qualificação",
      "Consulta"
    ],
    "type": "Conectagov",
    "description": "Verificação de dados residenciais para fins de concessão e manutenção de benefícios sociais.",
    "contact": "Consultar catálogo oficial",
    "attributes": [
      "Dados de endereço",
      "Indicadores de qualificação"
    ],
    "source": "https://www.gov.br/conecta/catalogo/"
  },
  {
    "id": "CN-002",
    "name": "API Hub Cobrança",
    "org": "Procuradoria-Geral da Fazenda Nacional (PGFN/PGDAU)",
    "period": "Não informada",
    "operations": [
      "Consulta",
      "Integração"
    ],
    "type": "Conectagov",
    "description": "Integração dos sistemas dos credores públicos conveniados à solução da PGFN.",
    "contact": "Consultar catálogo oficial",
    "attributes": [
      "Dados de cobrança"
    ],
    "source": "https://www.gov.br/conecta/catalogo/"
  },
  {
    "id": "CN-003",
    "name": "CEP - Cadastro Base de Endereço",
    "org": "MGI / Secretaria de Governo Digital (SGD)",
    "period": "Não informada",
    "operations": [
      "Consulta",
      "Validação"
    ],
    "type": "Conectagov",
    "description": "Interoperabilidade e integração no uso do conjunto mínimo de dados de endereço vinculado ao CEP.",
    "contact": "Consultar catálogo oficial",
    "attributes": [
      "CEP",
      "Dados de endereço"
    ],
    "source": "https://www.gov.br/conecta/catalogo/"
  },
  {
    "id": "CN-004",
    "name": "CNPJ - Consulta de Empresas",
    "org": "Receita Federal do Brasil (RFB)",
    "period": "Não informada",
    "operations": [
      "Consulta",
      "Validação cadastral"
    ],
    "type": "Conectagov",
    "description": "Consulta de informações cadastrais de pessoas jurídicas e outros arranjos jurídicos sem personalidade jurídica.",
    "contact": "Consultar catálogo oficial",
    "attributes": [
      "CNPJ",
      "Dados cadastrais de pessoa jurídica"
    ],
    "source": "https://www.gov.br/conecta/catalogo/"
  },
  {
    "id": "CN-005",
    "name": "Consulta de Benefícios Previdenciários",
    "org": "Instituto Nacional do Seguro Social (INSS)",
    "period": "Não informada",
    "operations": [
      "Consulta"
    ],
    "type": "Conectagov",
    "description": "Retorna uma lista de benefícios com principais atributos para a pessoa pesquisada, usando o cadastro de benefícios do RGPS.",
    "contact": "Consultar catálogo oficial",
    "attributes": [
      "Benefícios previdenciários",
      "Atributos do benefício"
    ],
    "source": "https://www.gov.br/conecta/catalogo/"
  },
  {
    "id": "CN-006",
    "name": "CPF - Cadastro Base do Cidadão",
    "org": "Receita Federal do Brasil (RFB)",
    "period": "Não informada",
    "operations": [
      "Consulta",
      "Validação cadastral"
    ],
    "type": "Conectagov",
    "description": "Cadastro de referência de pessoas físicas para órgãos e entidades da administração pública federal direta, autárquica e fundacional.",
    "contact": "Consultar catálogo oficial",
    "attributes": [
      "CPF",
      "Dados cadastrais de cidadão"
    ],
    "source": "https://www.gov.br/conecta/catalogo/"
  },
  {
    "id": "CN-007",
    "name": "Responsável da Criança e do Adolescente",
    "org": "Ministério da Gestão e da Inovação em Serviços Públicos (MGI)",
    "period": "Não informada",
    "operations": [
      "Consulta"
    ],
    "type": "Conectagov",
    "description": "Identificação e definição de responsáveis ativos por crianças e adolescentes a partir da integração de bases governamentais.",
    "contact": "Consultar catálogo oficial",
    "attributes": [
      "Identificação de responsáveis",
      "Vínculo com criança ou adolescente"
    ],
    "source": "https://www.gov.br/conecta/catalogo/"
  },
  {
    "id": "CN-008",
    "name": "SINAPIR - Consulta de Dados de Adesão",
    "org": "Ministério da Igualdade Racial (SENAPIR)",
    "period": "Não informada",
    "operations": [
      "Consulta"
    ],
    "type": "Conectagov",
    "description": "Consulta de adesão de municípios, estados e consórcios públicos ao Sistema Nacional de Promoção da Igualdade Racial.",
    "contact": "Consultar catálogo oficial",
    "attributes": [
      "Ente federativo",
      "Situação de adesão"
    ],
    "source": "https://www.gov.br/conecta/catalogo/"
  },
  {
    "id": "CN-009",
    "name": "WALLET GOV.BR - Carteira de documentos",
    "org": "Ministério da Economia / Secretaria de Governo Digital",
    "period": "Não informada",
    "operations": [
      "Integração",
      "Envio de dados"
    ],
    "type": "Conectagov",
    "description": "Recepção dos dados necessários para criar documentos na carteira do aplicativo gov.br.",
    "contact": "Consultar catálogo oficial",
    "attributes": [
      "Dados necessários à emissão de documentos digitais"
    ],
    "source": "https://www.gov.br/conecta/catalogo/"
  },
  {
    "id": "CN-010",
    "name": "BPC - Benefício de Prestação Continuada",
    "org": "Instituto Nacional do Seguro Social (INSS)",
    "period": "Não informada",
    "operations": [
      "Consulta"
    ],
    "type": "Conectagov",
    "description": "Consulta se a pessoa física possui benefício ativo do tipo LOAS 87.",
    "contact": "Consultar catálogo oficial",
    "attributes": [
      "Situação do benefício BPC"
    ],
    "source": "https://www.gov.br/conecta/catalogo/"
  },
  {
    "id": "CN-011",
    "name": "CADPREV - Informações dos Regimes Públicos de Previdência Social",
    "org": "Subsecretaria dos Regimes Próprios de Previdência Social (ME)",
    "period": "Não informada",
    "operations": [
      "Consulta"
    ],
    "type": "API externa",
    "description": "Informações previdenciárias, atuariais, repasses, aplicações e investimentos dos recursos dos RPPS estaduais, distrital e municipais.",
    "contact": "Consultar catálogo oficial",
    "attributes": [
      "Informações previdenciárias",
      "Repasses",
      "Aplicações e investimentos"
    ],
    "source": "https://www.gov.br/conecta/catalogo/"
  },
  {
    "id": "CN-012",
    "name": "CADÚNICO - Dados Familiares",
    "org": "Ministério do Desenvolvimento e Assistência Social, Família e Combate à Fome (MDS)",
    "period": "Não informada",
    "operations": [
      "Consulta"
    ],
    "type": "Conectagov",
    "description": "Dados familiares do Cadastro Único para Programas Sociais do Governo Federal.",
    "contact": "Consultar catálogo oficial",
    "attributes": [
      "Dados familiares",
      "Caracterização socioeconômica"
    ],
    "source": "https://www.gov.br/conecta/catalogo/"
  },
  {
    "id": "CN-013",
    "name": "CADÚNICO - Indicadores Familiares",
    "org": "Ministério do Desenvolvimento e Assistência Social, Família e Combate à Fome (MDS)",
    "period": "Não informada",
    "operations": [
      "Consulta"
    ],
    "type": "Conectagov",
    "description": "Indicadores familiares relacionados ao Cadastro Único para Programas Sociais do Governo Federal.",
    "contact": "Consultar catálogo oficial",
    "attributes": [
      "Indicadores familiares"
    ],
    "source": "https://www.gov.br/conecta/catalogo/"
  },
  {
    "id": "CN-014",
    "name": "CADÚNICO - Serviços (Consulta Situação Cadastral)",
    "org": "Ministério do Desenvolvimento e Assistência Social, Família e Combate à Fome (MDS)",
    "period": "Não informada",
    "operations": [
      "Consulta cadastral"
    ],
    "type": "Conectagov",
    "description": "Consulta de situação cadastral no âmbito do Cadastro Único para Programas Sociais do Governo Federal.",
    "contact": "Consultar catálogo oficial",
    "attributes": [
      "Situação cadastral"
    ],
    "source": "https://www.gov.br/conecta/catalogo/"
  },
  {
    "id": "CN-015",
    "name": "Certidão de Antecedentes Criminais",
    "org": "Ministério da Justiça e Segurança Pública / Polícia Federal",
    "period": "Não informada",
    "operations": [
      "Consulta"
    ],
    "type": "Conectagov",
    "description": "Retorna informação de nada consta quando não há registro de decisão condenatória com trânsito em julgado, conforme descrição do catálogo.",
    "contact": "Consultar catálogo oficial",
    "attributes": [
      "Resultado de consulta de antecedentes"
    ],
    "source": "https://www.gov.br/conecta/catalogo/"
  },
  {
    "id": "CN-016",
    "name": "CNS - Cartão Nacional de Saúde",
    "org": "Ministério da Saúde (MS)",
    "period": "Não informada",
    "operations": [
      "Consulta",
      "Integração"
    ],
    "type": "API externa",
    "description": "Web service desenvolvido para operacionalizar a troca de informações cadastrais dos usuários do SUS.",
    "contact": "Consultar catálogo oficial",
    "attributes": [
      "Informações cadastrais de usuários do SUS"
    ],
    "source": "https://www.gov.br/conecta/catalogo/"
  },
  {
    "id": "CN-017",
    "name": "Consulta de Condutas Anticompetitivas",
    "org": "Conselho Administrativo de Defesa Econômica (CADE)",
    "period": "Não informada",
    "operations": [
      "Consulta"
    ],
    "type": "Conectagov",
    "description": "Consulta ao Tribunal Administrativo no âmbito do CADE.",
    "contact": "Consultar catálogo oficial",
    "attributes": [
      "Informações de consulta ao Tribunal Administrativo"
    ],
    "source": "https://www.gov.br/conecta/catalogo/"
  },
  {
    "id": "CN-018",
    "name": "Faixa de Renda de Grupo Familiar",
    "org": "Instituto Nacional do Seguro Social (INSS)",
    "period": "Não informada",
    "operations": [
      "Consulta"
    ],
    "type": "Conectagov",
    "description": "Classificação da renda média de um grupo familiar especificado por uma lista de, no mínimo, dois CPFs.",
    "contact": "Consultar catálogo oficial",
    "attributes": [
      "Lista de CPFs",
      "Faixa de renda familiar"
    ],
    "source": "https://www.gov.br/conecta/catalogo/"
  },
  {
    "id": "CN-019",
    "name": "IDJOVEM - Consulta de situação cadastral",
    "org": "Secretaria Nacional da Juventude (SNJ)",
    "period": "Não informada",
    "operations": [
      "Consulta",
      "Validação"
    ],
    "type": "Conectagov",
    "description": "Validação da condição de baixa renda de jovens de 15 a 29 anos para o documento gratuito virtual ID Jovem.",
    "contact": "Consultar catálogo oficial",
    "attributes": [
      "Situação cadastral ID Jovem"
    ],
    "source": "https://www.gov.br/conecta/catalogo/"
  },
  {
    "id": "CN-020",
    "name": "Pessoa com Deficiência",
    "org": "INSS / Ministério dos Direitos Humanos e da Cidadania (MDHC)",
    "period": "Não informada",
    "operations": [
      "Consulta"
    ],
    "type": "Conectagov",
    "description": "Identificação automática da condição de pessoa com deficiência de determinado cidadão pesquisado.",
    "contact": "Consultar catálogo oficial",
    "attributes": [
      "Resultado de identificação de pessoa com deficiência"
    ],
    "source": "https://www.gov.br/conecta/catalogo/"
  },
  {
    "id": "CN-021",
    "name": "Relação Trabalhista",
    "org": "Instituto Nacional do Seguro Social (INSS)",
    "period": "Não informada",
    "operations": [
      "Consulta"
    ],
    "type": "Conectagov",
    "description": "Retorna relações trabalhistas conforme a Tabela Oficial da Classificação Brasileira de Ocupações (CBO), para um CPF pesquisado.",
    "contact": "Consultar catálogo oficial",
    "attributes": [
      "Relações trabalhistas",
      "Classificação Brasileira de Ocupações"
    ],
    "source": "https://www.gov.br/conecta/catalogo/"
  },
  {
    "id": "CN-022",
    "name": "Situação Militar",
    "org": "Comando do Exército Brasileiro (MD)",
    "period": "Não informada",
    "operations": [
      "Consulta"
    ],
    "type": "Conectagov",
    "description": "Consulta a situação militar de cidadãos vinculados ao serviço militar obrigatório ou que tenham prestado serviço militar voluntário.",
    "contact": "Consultar catálogo oficial",
    "attributes": [
      "Situação militar"
    ],
    "source": "https://www.gov.br/conecta/catalogo/"
  },
  {
    "id": "CN-023",
    "name": "CADASTUR - Cadastro de Prestadores de Serviços Turísticos",
    "org": "Ministério do Turismo (MTUR)",
    "period": "Não informada",
    "operations": [
      "Consulta"
    ],
    "type": "Conectagov",
    "description": "Cadastro de pessoas físicas e jurídicas que atuam no turismo, para ordenamento, formalização e legalização do setor.",
    "contact": "Consultar catálogo oficial",
    "attributes": [
      "Dados cadastrais de prestadores turísticos"
    ],
    "source": "https://www.gov.br/conecta/catalogo/"
  },
  {
    "id": "CN-024",
    "name": "CND - Consulta Certidão Negativa de Débitos",
    "org": "Receita Federal do Brasil (RFB)",
    "period": "Não informada",
    "operations": [
      "Consulta",
      "Validação"
    ],
    "type": "Conectagov",
    "description": "Consulta relacionada à certidão que atesta regularidade de obrigações de CPF, CNPJ ou imóvel rural.",
    "contact": "Consultar catálogo oficial",
    "attributes": [
      "Resultado de consulta de certidão"
    ],
    "source": "https://www.gov.br/conecta/catalogo/"
  },
  {
    "id": "CN-025",
    "name": "Notificações de Síndrome Gripal",
    "org": "Ministério da Saúde (MS)",
    "period": "Não informada",
    "operations": [
      "Consulta"
    ],
    "type": "API externa",
    "description": "Dados epidemiológicos de síndrome gripal do sistema e-SUS VE Notifica, conforme descrição do catálogo.",
    "contact": "Consultar catálogo oficial",
    "attributes": [
      "Dados epidemiológicos de síndrome gripal"
    ],
    "source": "https://www.gov.br/conecta/catalogo/"
  },
  {
    "id": "CN-026",
    "name": "Registro de Ocupação Hospitalar COVID-19",
    "org": "Ministério da Saúde (MS)",
    "period": "Não informada",
    "operations": [
      "Consulta"
    ],
    "type": "API externa",
    "description": "Dados de ocupação de leitos do sistema e-SUS Notifica, conforme descrição do catálogo.",
    "contact": "Consultar catálogo oficial",
    "attributes": [
      "Dados de ocupação hospitalar"
    ],
    "source": "https://www.gov.br/conecta/catalogo/"
  },
  {
    "id": "CN-027",
    "name": "RNDS - Rede Nacional de Dados em Saúde",
    "org": "Ministério da Saúde (MS)",
    "period": "Não informada",
    "operations": [
      "Integração",
      "Consulta"
    ],
    "type": "API externa",
    "description": "Plataforma nacional de integração de dados em saúde e projeto estruturante do Conecte SUS.",
    "contact": "Consultar catálogo oficial",
    "attributes": [
      "Dados e serviços de integração em saúde"
    ],
    "source": "https://www.gov.br/conecta/catalogo/"
  },
  {
    "id": "CN-028",
    "name": "SICAR - Consulta CPF/CNPJ",
    "org": "Ministério da Gestão e da Inovação em Serviços Públicos (MGI)",
    "period": "Não informada",
    "operations": [
      "Consulta"
    ],
    "type": "Conectagov",
    "description": "Consulta à situação de informações declaradas no CAR, relacionadas a áreas de preservação permanente, uso restrito e reserva legal.",
    "contact": "Consultar catálogo oficial",
    "attributes": [
      "Situação das informações do CAR"
    ],
    "source": "https://www.gov.br/conecta/catalogo/"
  },
  {
    "id": "CN-029",
    "name": "SICAR - Demonstrativo",
    "org": "Ministério da Gestão e da Inovação em Serviços Públicos (MGI)",
    "period": "Não informada",
    "operations": [
      "Consulta"
    ],
    "type": "Conectagov",
    "description": "Demonstrativo de informações do Cadastro Ambiental Rural.",
    "contact": "Consultar catálogo oficial",
    "attributes": [
      "Informações declaradas no CAR"
    ],
    "source": "https://www.gov.br/conecta/catalogo/"
  },
  {
    "id": "CN-030",
    "name": "SICAR - Imóvel",
    "org": "Ministério da Gestão e da Inovação em Serviços Públicos (MGI)",
    "period": "Não informada",
    "operations": [
      "Consulta"
    ],
    "type": "Conectagov",
    "description": "Informações do sistema composto por módulos que mantém o CAR e viabiliza análise dos cadastros de imóveis.",
    "contact": "Consultar catálogo oficial",
    "attributes": [
      "Cadastro de imóvel rural"
    ],
    "source": "https://www.gov.br/conecta/catalogo/"
  },
  {
    "id": "CN-031",
    "name": "SICAR - Tema",
    "org": "Ministério da Gestão e da Inovação em Serviços Públicos (MGI)",
    "period": "Não informada",
    "operations": [
      "Consulta"
    ],
    "type": "Conectagov",
    "description": "Informações sobre temas do imóvel rural no processo de análise do Cadastro Ambiental Rural.",
    "contact": "Consultar catálogo oficial",
    "attributes": [
      "Temas do imóvel rural"
    ],
    "source": "https://www.gov.br/conecta/catalogo/"
  },
  {
    "id": "CN-032",
    "name": "SISFOGO - Registro de Ocorrência de Incêndio Florestal",
    "org": "IBAMA",
    "period": "Não informada",
    "operations": [
      "Consulta"
    ],
    "type": "API externa",
    "description": "Disponibiliza em formato aberto os Registros de Ocorrência de Incêndio (ROI) do Sistema Nacional de Informações sobre Fogo.",
    "contact": "Consultar catálogo oficial",
    "attributes": [
      "Registros de ocorrência de incêndio florestal"
    ],
    "source": "https://www.gov.br/conecta/catalogo/"
  },
  {
    "id": "CN-033",
    "name": "Acesso gov.br",
    "org": "MGI / Diretoria de Identidade Digital",
    "period": "Não informada",
    "operations": [
      "Autenticação",
      "Integração"
    ],
    "type": "Conectagov",
    "description": "Serviço de acesso digital para identificação de usuários em serviços públicos digitais, com controle de acesso unificado.",
    "contact": "Consultar catálogo oficial",
    "attributes": [
      "Dados necessários à autenticação"
    ],
    "source": "https://www.gov.br/conecta/catalogo/"
  },
  {
    "id": "CN-034",
    "name": "Assinatura Digital Avançada",
    "org": "Instituto Nacional de Tecnologia da Informação (ITI)",
    "period": "Não informada",
    "operations": [
      "Assinatura digital",
      "Integração"
    ],
    "type": "API externa",
    "description": "Assinatura eletrônica avançada para interações com o Poder Público por meio da conta gov.br.",
    "contact": "Consultar catálogo oficial",
    "attributes": [
      "Dados de assinatura eletrônica"
    ],
    "source": "https://www.gov.br/conecta/catalogo/"
  },
  {
    "id": "CN-035",
    "name": "API Portal de Dados Abertos",
    "org": "Controladoria-Geral da União (CGU)",
    "period": "Não informada",
    "operations": [
      "Busca",
      "Listagem",
      "Detalhamento"
    ],
    "type": "API externa",
    "description": "Endpoints para buscar, listar e detalhar conjuntos de dados públicos, organizações, grupos e tags no Portal Brasileiro de Dados Abertos.",
    "contact": "Consultar catálogo oficial",
    "attributes": [
      "Conjuntos de dados",
      "Organizações",
      "Grupos",
      "Tags"
    ],
    "source": "https://www.gov.br/conecta/catalogo/"
  },
  {
    "id": "CN-036",
    "name": "COFIEX - Comissão de Financiamentos Externos",
    "org": "Ministério da Economia (ME)",
    "period": "Não informada",
    "operations": [
      "Consulta"
    ],
    "type": "API externa",
    "description": "Disponibilização de dados sobre projetos e programas do setor público financiados por organismos multilaterais e bilaterais.",
    "contact": "Consultar catálogo oficial",
    "attributes": [
      "Projetos e programas com financiamento externo"
    ],
    "source": "https://www.gov.br/conecta/catalogo/"
  },
  {
    "id": "CN-037",
    "name": "CONCÓRDIA - Acervo de Atos Internacionais do Brasil",
    "org": "Ministério das Relações Exteriores",
    "period": "Não informada",
    "operations": [
      "Consulta"
    ],
    "type": "API externa",
    "description": "Consulta estruturada a acordos, tratados, convenções e outros instrumentos internacionais firmados pelo Estado brasileiro.",
    "contact": "Consultar catálogo oficial",
    "attributes": [
      "Atos internacionais",
      "Acordos e tratados"
    ],
    "source": "https://www.gov.br/conecta/catalogo/"
  }
],
  requests:[
  {
    "id": "SOL-2025-001",
    "dataset": "Cadastro de Pessoas Físicas",
    "cedente": "Receita Federal",
    "solicitante": "Ministério da Fazenda",
    "tipo": "Adesão",
    "volume": "100.000 a 1 milhão",
    "date": "12/06/2025",
    "final": "22/06/2025",
    "status": "Em análise",
    "datasetId": "",
    "type": "Adesão",
    "access": "API",
    "technical": "",
    "createdAt": "2025-06-12",
    "lgpd": "nao",
    "history": [
      {
        "status": "Em análise",
        "date": "2025-06-12",
        "note": "Registro migrado da versão anterior."
      }
    ]
  },
  {
    "id": "SOL-2025-002",
    "dataset": "Base de Beneficiários do INSS",
    "cedente": "Dataprev",
    "solicitante": "Ministério da Saúde",
    "tipo": "Adesão",
    "volume": "10.000 a 100.000",
    "date": "05/06/2025",
    "final": "18/06/2025",
    "approvalDate": "18/06/2025",
    "status": "Aprovada",
    "datasetId": "",
    "type": "Adesão",
    "access": "API",
    "technical": "",
    "createdAt": "2025-06-05",
    "lgpd": "nao",
    "history": [
      {
        "status": "Aprovada",
        "date": "2025-06-05",
        "note": "Registro migrado da versão anterior."
      }
    ]
  },
  {
    "id": "SOL-2025-003",
    "dataset": "Dados de Renda Familiar",
    "cedente": "IBGE",
    "solicitante": "Ministério do Desenvolvimento Social",
    "tipo": "Alteração de Volumetria",
    "volume": "1.000 a 10.000",
    "date": "28/05/2025",
    "final": "28/05/2025",
    "status": "Negada",
    "datasetId": "",
    "type": "Alteração de Volumetria",
    "access": "API",
    "technical": "",
    "createdAt": "2025-05-28",
    "lgpd": "nao",
    "history": [
      {
        "status": "Negada",
        "date": "2025-05-28",
        "note": "Registro migrado da versão anterior."
      }
    ]
  },
  {
    "id": "SOL-2025-004",
    "dataset": "Registros de Saúde Pública",
    "cedente": "Ministério da Saúde",
    "solicitante": "Ministério da Gestão",
    "tipo": "Adesão",
    "volume": "Acima de 1 milhão",
    "date": "20/05/2025",
    "final": "21/05/2025",
    "approvalDate": "21/05/2025",
    "status": "Aprovada",
    "datasetId": "",
    "type": "Adesão",
    "access": "API",
    "technical": "",
    "createdAt": "2025-05-20",
    "lgpd": "nao",
    "history": [
      {
        "status": "Aprovada",
        "date": "2025-05-20",
        "note": "Registro migrado da versão anterior."
      }
    ]
  },
  {
    "id": "SOL-2024-0456",
    "dataset": "Cadastro de Pessoas Físicas",
    "cedente": "INSS",
    "solicitante": "Ministério da Saúde",
    "tipo": "Adesão",
    "volume": "100.000 a 1 milhão",
    "date": "12/05/2024",
    "final": "22/05/2024",
    "status": "Em análise",
    "datasetId": "",
    "type": "Adesão",
    "access": "API",
    "technical": "",
    "createdAt": "2024-05-12",
    "lgpd": "nao",
    "history": [
      {
        "status": "Em análise",
        "date": "2024-05-12",
        "note": "Registro migrado da versão anterior."
      }
    ]
  },
  {
    "id": "SOL-2024-0455",
    "dataset": "Base de Beneficiários do INSS",
    "cedente": "Receita Federal",
    "solicitante": "Controladoria Geral da União",
    "tipo": "Adesão",
    "volume": "10.000 a 100.000",
    "date": "05/05/2024",
    "final": "18/05/2024",
    "approvalDate": "18/05/2024",
    "status": "Aprovada",
    "datasetId": "",
    "type": "Adesão",
    "access": "API",
    "technical": "",
    "createdAt": "2024-05-05",
    "lgpd": "nao",
    "history": [
      {
        "status": "Aprovada",
        "date": "2024-05-05",
        "note": "Registro migrado da versão anterior."
      }
    ]
  },
  {
    "id": "SOL-2024-0454",
    "dataset": "Dados de Renda Familiar",
    "cedente": "INEP",
    "solicitante": "Ministério da Educação",
    "tipo": "Adesão",
    "volume": "1.000 a 10.000",
    "date": "24/04/2024",
    "final": "24/05/2024",
    "status": "Em análise",
    "datasetId": "",
    "type": "Adesão",
    "access": "API",
    "technical": "",
    "createdAt": "2024-04-24",
    "lgpd": "nao",
    "history": [
      {
        "status": "Em análise",
        "date": "2024-04-24",
        "note": "Registro migrado da versão anterior."
      }
    ]
  },
  {
    "id": "SOL-2024-0453",
    "dataset": "Registros de Saúde Pública",
    "cedente": "Polícia Federal",
    "solicitante": "Ministério da Justiça",
    "tipo": "Adesão",
    "volume": "Acima de 1 milhão",
    "date": "21/04/2024",
    "final": "21/05/2024",
    "status": "Em análise",
    "datasetId": "",
    "type": "Adesão",
    "access": "API",
    "technical": "",
    "createdAt": "2024-04-21",
    "lgpd": "nao",
    "history": [
      {
        "status": "Em análise",
        "date": "2024-04-21",
        "note": "Registro migrado da versão anterior."
      }
    ]
  },
  {
    "id": "SOL-2024-0452",
    "dataset": "Base de Dados Geoespaciais",
    "cedente": "Caixa Econômica Federal",
    "solicitante": "IBGE",
    "tipo": "Adesão",
    "volume": "10.000 a 100.000",
    "date": "17/04/2024",
    "final": "17/05/2024",
    "approvalDate": "17/05/2024",
    "status": "Aprovada",
    "datasetId": "",
    "type": "Adesão",
    "access": "API",
    "technical": "",
    "createdAt": "2024-04-17",
    "lgpd": "nao",
    "history": [
      {
        "status": "Aprovada",
        "date": "2024-04-17",
        "note": "Registro migrado da versão anterior."
      }
    ]
  }
],
  users:[
  {
    "name": "João da Silva",
    "email": "joao.silva@orgao.gov.br",
    "cpf": "123.456.789-01",
    "profiles": [
      "Cedente de dados",
      "Administrador"
    ],
    "status": "Ativo",
    "id": "USR-001",
    "org": "Secretaria de Governo Digital"
  },
  {
    "name": "Maria Oliveira",
    "email": "maria.oliveira@orgao.gov.br",
    "cpf": "987.654.321-00",
    "profiles": [
      "Recebedor de dados"
    ],
    "status": "Ativo",
    "id": "USR-002",
    "org": "Secretaria de Governo Digital"
  },
  {
    "name": "Carlos Santos",
    "email": "carlos.santos@orgao.gov.br",
    "cpf": "111.222.333-44",
    "profiles": [
      "Recebedor de dados"
    ],
    "status": "Inativo",
    "id": "USR-003",
    "org": "Secretaria de Governo Digital"
  },
  {
    "name": "Ana Pereira",
    "email": "ana.pereira@orgao.gov.br",
    "cpf": "555.666.777-88",
    "profiles": [
      "Cedente de dados",
      "Recebedor de dados",
      "Administrador"
    ],
    "status": "Ativo",
    "id": "USR-004",
    "org": "Secretaria de Governo Digital"
  }
],
  profiles:[
  {
    "name": "Cedente de dados",
    "desc": "Acesso total a todos os módulos",
    "modules": "Todos",
    "status": "Ativo",
    "perms": {
      "Conjuntos": [
        1,
        1
      ],
      "Solicitações": [
        1,
        0
      ],
      "Órgãos": [
        1,
        0
      ],
      "Relatórios": [
        1,
        1
      ],
      "Usuários": [
        1,
        0
      ]
    },
    "id": "PRF-001"
  },
  {
    "name": "Recebedor de dados",
    "desc": "Acesso aos módulos de recebimento",
    "modules": "3",
    "status": "Ativo",
    "perms": {
      "Conjuntos": [
        1,
        0
      ],
      "Solicitações": [
        1,
        1
      ],
      "Órgãos": [
        1,
        0
      ],
      "Relatórios": [
        1,
        0
      ],
      "Usuários": [
        0,
        0
      ]
    },
    "id": "PRF-002"
  },
  {
    "name": "Administrador",
    "desc": "Acesso total e administração do sistema",
    "modules": "Todos",
    "status": "Ativo",
    "perms": {
      "Conjuntos": [
        1,
        1
      ],
      "Solicitações": [
        1,
        1
      ],
      "Órgãos": [
        1,
        1
      ],
      "Relatórios": [
        1,
        1
      ],
      "Usuários": [
        1,
        1
      ]
    },
    "id": "PRF-003"
  }
],
  orgs:[
  {
    "name": "Ministério da Saúde",
    "sigla": "MS",
    "cnpj": "00.394.544/0001-85",
    "esfera": "Federal",
    "uf": "DF",
    "natureza": "Órgão Público do Poder Executivo",
    "municipio": "Brasília",
    "ibge": "5300108",
    "parent": "",
    "superior": "Não se aplica",
    "links": 0,
    "id": "ORG-001",
    "acronym": "MS",
    "kind": "Federal",
    "status": "Ativo"
  },
  {
    "name": "Ministério da Educação",
    "sigla": "MEC",
    "cnpj": "00.394.445/0001-83",
    "esfera": "Federal",
    "uf": "DF",
    "natureza": "Órgão Público do Poder Executivo",
    "municipio": "Brasília",
    "ibge": "5300108",
    "parent": "",
    "superior": "Não se aplica",
    "links": 2,
    "id": "ORG-002",
    "acronym": "MEC",
    "kind": "Federal",
    "status": "Ativo"
  },
  {
    "name": "Prefeitura do Rio de Janeiro",
    "sigla": "PCRJ",
    "cnpj": "42.498.733/0001-48",
    "esfera": "Municipal",
    "uf": "RJ",
    "natureza": "Órgão Público do Poder Executivo",
    "municipio": "Rio de Janeiro",
    "ibge": "3304557",
    "parent": "Município do Rio de Janeiro (vínculo institucional)",
    "superior": "Não se aplica",
    "links": 7,
    "id": "ORG-003",
    "acronym": "PCRJ",
    "kind": "Federal",
    "status": "Ativo"
  },
  {
    "name": "Secretaria de Estado da Fazenda do Rio de Janeiro",
    "sigla": "SEFAZ-RJ",
    "cnpj": "42.698.673/0001-52",
    "esfera": "Estadual",
    "uf": "RJ",
    "natureza": "Órgão Público do Poder Executivo",
    "municipio": "Rio de Janeiro",
    "ibge": "3304557",
    "parent": "Governo do Estado do Rio de Janeiro",
    "superior": "Não se aplica",
    "links": 1,
    "id": "ORG-004",
    "acronym": "SEFAZ-RJ",
    "kind": "Federal",
    "status": "Ativo"
  },
  {
    "name": "Instituto Brasileiro de Geografia e Estatística",
    "sigla": "IBGE",
    "cnpj": "33.304.555/0001-43",
    "esfera": "Federal",
    "uf": "RJ",
    "natureza": "Autarquia",
    "municipio": "Rio de Janeiro",
    "ibge": "3304557",
    "parent": "Ministério do Planejamento",
    "superior": "Não se aplica",
    "links": 0,
    "id": "ORG-005",
    "acronym": "IBGE",
    "kind": "Federal",
    "status": "Ativo"
  }
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