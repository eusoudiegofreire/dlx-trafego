// Conteúdo das páginas de serviço e nicho.
//
// Regra de ouro (claude-seo / seo-local + seo-programmatic): cada página
// precisa passar no "teste da troca" — se der pra trocar o nome do serviço
// ou da cidade e o texto continuar fazendo sentido, é doorway page e o
// Google derruba. Por isso cada página tem dor, passos, bloco local e FAQ
// escritos do zero, não um template com palavra trocada.

export type Visual = "map" | "feed" | "search" | "agenda" | "funnel" | "chat" | "reel";

export type Service = {
  slug: string;
  /** Nome curto (menus, breadcrumbs, cards de relacionados) */
  name: string;
  /** <title> — até ~60 caracteres, o template adiciona " | DLX Digital" */
  metaTitle: string;
  /** meta description — até ~155 caracteres */
  metaDescription: string;
  keywords: string[];
  /** schema.org Service.serviceType */
  serviceType: string;
  eyebrow: string;
  h1: { text: string; accent: string };
  lead: string;
  visual: Visual;
  pain: { title: string; paragraphs: string[]; punch: string };
  steps: { title: string; text: string }[];
  includes: string[];
  local: { eyebrow: string; title: string; paragraphs: string[] };
  kinetic: string;
  faqs: { q: string; a: string }[];
  related: string[];
  ctaTitle: string;
  ctaText: string;
  /** mensagem que vai pré-preenchida no WhatsApp */
  ctaMessage: string;
};

export const SERVICES: Service[] = [
  // ───────────────────────────────────────────── 1. Tráfego pago Ariquemes
  {
    slug: "trafego-pago-ariquemes",
    name: "Tráfego pago em Ariquemes",
    metaTitle: "Tráfego Pago em Ariquemes (RO): Meta e Google Ads",
    metaDescription:
      "Gestão de tráfego pago em Ariquemes para negócio local: anúncios no Instagram, Facebook e Google que levam cliente da cidade até o seu WhatsApp.",
    keywords: [
      "tráfego pago Ariquemes",
      "gestor de tráfego Ariquemes",
      "agência de tráfego pago Ariquemes",
      "anúncios Ariquemes",
      "marketing digital Ariquemes",
    ],
    serviceType: "Gestão de tráfego pago",
    eyebrow: "Tráfego pago · Ariquemes, RO",
    h1: { text: "Tráfego pago em Ariquemes ", accent: "pra quem atende a cidade." },
    lead:
      "Anúncio no Instagram, no Facebook e no Google mirado em quem mora em Ariquemes e região. Feito por quem é daqui, conhece os setores da cidade e acompanha a campanha de perto.",
    visual: "map",
    pain: {
      title: "Anúncio pra Rondônia inteira não enche agenda em Ariquemes.",
      paragraphs: [
        "O erro mais comum que eu vejo por aqui é campanha aberta demais: o anúncio aparece pra gente de Porto Velho, de Ji-Paraná, de outro estado. Gera clique, gera curtida, mas quem está a 200 km não vai vir até a sua loja.",
        "O outro erro é o contrário: raio tão pequeno que o anúncio fica mostrando pras mesmas 3 mil pessoas toda semana, e o custo sobe. Tráfego local é achar o tamanho certo da cidade pro seu negócio.",
      ],
      punch: "O que importa é aparecer pra quem consegue chegar até você.",
    },
    steps: [
      {
        title: "Mapa do seu cliente",
        text: "A gente define de onde vem quem compra de você: setores, bairros, cidades vizinhas do Vale do Jamari ou o estado todo, se você entrega.",
      },
      {
        title: "Campanha por raio e intenção",
        text: "Meta Ads para quem ainda não te conhece, Google Ads para quem já está procurando. Cada um com a localização certa.",
      },
      {
        title: "Contato no canal certo",
        text: "WhatsApp, direct, ligação ou rota no Maps: o anúncio leva a pessoa direto pro lugar onde a venda acontece no seu negócio.",
      },
      {
        title: "Ajuste toda semana",
        text: "Corte do que só traz curiosos, reforço do que traz conversa boa e relatório que mostra quantos contatos chegaram e quanto custou cada um.",
      },
    ],
    includes: [
      "Diagnóstico do negócio e do público em Ariquemes",
      "Configuração de Meta Ads e Google Ads",
      "Segmentação por raio, setores e cidades vizinhas",
      "Copy dos anúncios e roteiro de vídeo pra você gravar",
      "Otimização contínua das campanhas",
      "Relatório com contatos e custo por contato",
    ],
    local: {
      eyebrow: "Por que um gestor local",
      title: "Quem conhece Ariquemes anuncia melhor em Ariquemes.",
      paragraphs: [
        "Ariquemes tem quase 100 mil habitantes e é polo do Vale do Jamari. Muita gente de Cacaulândia, Monte Negro, Alto Paraíso e Rio Crespo vem pra cá comprar, ir ao médico e resolver a vida. Dependendo do que você vende, essas cidades valem mais do que um bairro da própria Ariquemes.",
        "A cidade é organizada em setores, e o comportamento muda de um pra outro. Saber isso ajuda a decidir o raio, o horário e até a mensagem do anúncio. E quando precisa sentar pra conversar sobre a campanha, a gente está na mesma cidade.",
      ],
    },
    kinetic: "ARIQUEMES",
    faqs: [
      {
        q: "Vocês atendem só Ariquemes?",
        a: "A base é Ariquemes, mas atendemos negócios em toda Rondônia e no Amazonas. Para quem é de Ariquemes, a vantagem é poder conversar pessoalmente e ter um gestor que conhece a cidade.",
      },
      {
        q: "Qual o raio ideal para anunciar em Ariquemes?",
        a: "Depende do negócio. Uma clínica costuma funcionar bem com a cidade toda mais as cidades vizinhas do Vale do Jamari. Um delivery precisa respeitar a área de entrega. No diagnóstico a gente define isso com base em de onde vêm os seus clientes hoje.",
      },
      {
        q: "A verba do anúncio está inclusa na gestão?",
        a: "Não. A verba é paga direto para a Meta e para o Google, no seu cartão ou boleto, e você vê cada real gasto na plataforma. A gestão da DLX é cobrada à parte.",
      },
      {
        q: "Em quanto tempo os contatos começam a chegar?",
        a: "Os primeiros contatos costumam chegar nos primeiros dias de campanha. As primeiras semanas servem para ajustar público, criativo e raio até achar o custo por contato certo para o seu negócio.",
      },
      {
        q: "Preciso ter site para anunciar?",
        a: "Não é obrigatório. Muitas campanhas levam direto para o WhatsApp ou para o direct. Mas para Google Ads uma página boa ajuda muito, e a DLX também cria essa página se for o caso.",
      },
    ],
    related: ["meta-ads-ariquemes", "google-ads-ariquemes", "trafego-pago-para-clinicas"],
    ctaTitle: "Bora colocar seu negócio na frente de quem é de Ariquemes?",
    ctaText:
      "Me chama no WhatsApp. A gente olha seu negócio, define o raio certo e monta a primeira campanha com número que dá pra acompanhar.",
    ctaMessage: "quero tráfego pago para o meu negócio em Ariquemes",
  },

  // ───────────────────────────────────────────── 2. Meta Ads
  {
    slug: "meta-ads-ariquemes",
    name: "Meta Ads (Instagram e Facebook)",
    metaTitle: "Meta Ads em Ariquemes: Instagram e Facebook",
    metaDescription:
      "Anúncios no Instagram e no Facebook que viram conversa no WhatsApp. Gestão de Meta Ads em Ariquemes com criativo, público e otimização semanal.",
    keywords: [
      "Meta Ads Ariquemes",
      "anúncio no Instagram Ariquemes",
      "anúncio Facebook Ariquemes",
      "gestor de Meta Ads Rondônia",
      "impulsionar Instagram Ariquemes",
    ],
    serviceType: "Gestão de anúncios Meta Ads",
    eyebrow: "Meta Ads · Instagram e Facebook",
    h1: { text: "Meta Ads em Ariquemes: ", accent: "anúncio que vira conversa." },
    lead:
      "Campanha no Instagram e no Facebook montada para gerar mensagem no WhatsApp e no direct, não só alcance. Criativo, público e otimização feitos de perto.",
    visual: "feed",
    pain: {
      title: "O botão “Turbinar” é o jeito mais caro de anunciar.",
      paragraphs: [
        "Turbinar publicação pelo celular entrega o post pra quem tem mais chance de curtir, porque é isso que o botão otimiza. Curtida não paga boleto. Por isso tanta gente conclui que Instagram não vende.",
        "No Gerenciador de Anúncios dá pra pedir outra coisa para a Meta: conversa no WhatsApp, cadastro, visita ao site. Quando o objetivo muda, o algoritmo passa a procurar outro tipo de pessoa, quem costuma chamar e comprar.",
      ],
      punch: "O algoritmo entrega exatamente o que você pede. Pede conversa.",
    },
    steps: [
      {
        title: "Objetivo certo",
        text: "Campanha de mensagens, de cadastro ou de vendas, de acordo com onde o seu cliente fecha. Nada de objetivo de engajamento pra quem quer venda.",
      },
      {
        title: "Criativo que para o dedo",
        text: "Gancho forte nos primeiros segundos, oferta clara e chamada pra ação. Eu escrevo o roteiro e a copy, você grava com o celular.",
      },
      {
        title: "Público e posicionamento",
        text: "Localização, idade, interesses e públicos de quem já interagiu com você. Feed, Stories e Reels testados separadamente.",
      },
      {
        title: "Teste e escala",
        text: "Vários criativos rodando ao mesmo tempo. O que traz conversa mais barata recebe mais verba, o resto sai.",
      },
    ],
    includes: [
      "Configuração do Gerenciador de Anúncios e do Pixel",
      "Campanhas de mensagem para WhatsApp e Instagram Direct",
      "Roteiro de vídeo e copy dos anúncios",
      "Públicos personalizados e semelhantes",
      "Testes A/B de criativo toda semana",
      "Relatório de conversas, custo por conversa e próximos passos",
    ],
    local: {
      eyebrow: "Meta Ads para negócio local",
      title: "Em cidade média, o criativo importa mais que o público.",
      paragraphs: [
        "Numa cidade do tamanho de Ariquemes, o público de quem pode comprar de você é finito. Depois de algumas semanas, as mesmas pessoas já viram o anúncio várias vezes. O que mantém o custo baixo é trocar o criativo com frequência, não mexer no público toda hora.",
        "Por isso a gestão da DLX inclui roteiro de vídeo: rosto conhecido, lugar reconhecível e linguagem de quem é daqui costumam funcionar melhor que arte genérica de banco de imagem.",
      ],
    },
    kinetic: "CONVERSA",
    faqs: [
      {
        q: "Qual a diferença entre impulsionar e anunciar no Gerenciador?",
        a: "O impulsionamento pelo app tem poucas opções e geralmente otimiza para engajamento. No Gerenciador de Anúncios dá para escolher o objetivo (mensagens, cadastros, vendas), testar vários criativos, segmentar por localização e acompanhar o custo de cada resultado.",
      },
      {
        q: "Anúncio de Instagram funciona para negócio local?",
        a: "Funciona bem quando a campanha está segmentada pela cidade e o objetivo é conversa ou visita. Em negócio local, o mais comum é receber os contatos direto no WhatsApp ou no direct.",
      },
      {
        q: "Eu preciso gravar os vídeos?",
        a: "Sim, de preferência. Eu entrego o roteiro pronto, com o gancho e o que falar, e você grava com o celular. Vídeo com o rosto do dono ou da equipe costuma ter resultado melhor que arte estática.",
      },
      {
        q: "Quantos criativos preciso por mês?",
        a: "Para manter o custo estável em cidade média, o ideal é colocar criativos novos com frequência, alguns por mês. A gente planeja isso junto com você para não pesar na sua rotina.",
      },
      {
        q: "Vocês respondem as mensagens que chegam?",
        a: "O atendimento é seu, porque ninguém conhece seu negócio melhor. Mas a DLX pode montar uma automação no WhatsApp para responder na hora, qualificar o contato e passar para você só quem está pronto.",
      },
    ],
    related: ["google-ads-ariquemes", "automacao-whatsapp", "edicao-de-video-para-reels"],
    ctaTitle: "Quer que o Instagram traga conversa em vez de curtida?",
    ctaText:
      "Me manda uma mensagem. Eu olho o que você já anunciou e mostro o que mudaria na primeira campanha.",
    ctaMessage: "quero anunciar no Instagram e no Facebook (Meta Ads)",
  },

  // ───────────────────────────────────────────── 3. Google Ads
  {
    slug: "google-ads-ariquemes",
    name: "Google Ads",
    metaTitle: "Google Ads em Ariquemes: apareça no topo",
    metaDescription:
      "Gestão de Google Ads em Ariquemes: apareça no topo quando alguém pesquisar o seu serviço na cidade. Campanhas de pesquisa, Maps e palavras certas.",
    keywords: [
      "Google Ads Ariquemes",
      "anunciar no Google Ariquemes",
      "aparecer no Google Ariquemes",
      "gestor Google Ads Rondônia",
      "link patrocinado Ariquemes",
    ],
    serviceType: "Gestão de anúncios Google Ads",
    eyebrow: "Google Ads · Rede de Pesquisa e Maps",
    h1: { text: "Google Ads em Ariquemes: ", accent: "apareça quando te procuram." },
    lead:
      "Quem pesquisa “dentista em Ariquemes” ou “loja de ferramentas perto de mim” já quer comprar. O Google Ads coloca seu negócio no topo dessa pesquisa, e você paga pelo clique.",
    visual: "search",
    pain: {
      title: "Seu cliente está pesquisando agora. Quem aparece é o concorrente.",
      paragraphs: [
        "No Instagram, você interrompe a pessoa no meio do feed. No Google é o contrário: ela foi atrás. Essa é a pesquisa com mais intenção de compra que existe, e muitos negócios de Ariquemes ainda não aparecem nela.",
        "Mas Google Ads mal configurado queima dinheiro rápido: palavra-chave ampla demais, anúncio aparecendo para quem procura emprego, curso grátis ou outra cidade. A diferença entre lucro e prejuízo está na lista de palavras que você não quer.",
      ],
      punch: "No Google, quem pesquisa já decidiu que quer. Falta te achar.",
    },
    steps: [
      {
        title: "Pesquisa de palavras",
        text: "Levantamento do que o seu cliente digita de verdade, com volume e custo estimado, incluindo variações com o nome da cidade e “perto de mim”.",
      },
      {
        title: "Palavras negativas",
        text: "Lista do que bloquear desde o primeiro dia: “vaga”, “grátis”, “curso”, nomes de outras cidades. É aqui que se economiza mais.",
      },
      {
        title: "Anúncio e página",
        text: "Texto do anúncio com o serviço, a cidade e um motivo para clicar. E uma página de destino que responde rápido o que a pessoa procurava.",
      },
      {
        title: "Medição de contato",
        text: "Conversão configurada para cliques no WhatsApp, ligações e formulários. Assim dá para saber qual palavra traz cliente e qual só gasta.",
      },
    ],
    includes: [
      "Pesquisa de palavras-chave locais",
      "Campanhas de Pesquisa com segmentação por cidade",
      "Lista de palavras negativas e revisão de termos pesquisados",
      "Recursos de ligação, local e links extras no anúncio",
      "Acompanhamento de conversões (WhatsApp, ligação, formulário)",
      "Relatório de termos, custo por contato e ajustes",
    ],
    local: {
      eyebrow: "Google Ads em cidade média",
      title: "Em cidade média, o leilão tende a ser mais barato.",
      paragraphs: [
        "O preço do clique no Google é definido em leilão: quanto mais anunciantes disputando a mesma palavra na mesma região, mais caro fica. Em cidades como Ariquemes, muitas buscas têm menos anunciantes disputando do que em Porto Velho ou em capitais maiores, o que tende a deixar o clique mais barato.",
        "Isso não dura para sempre. Quem entra primeiro aprende antes quais palavras funcionam e constrói histórico na conta. E vale juntar o Google Ads com um Perfil da Empresa no Google bem cuidado, com fotos, horário e avaliações, porque os dois aparecem na mesma tela.",
      ],
    },
    kinetic: "PESQUISA",
    faqs: [
      {
        q: "Quanto custa um clique no Google Ads em Ariquemes?",
        a: "Varia muito por segmento e pela concorrência na palavra. Na pesquisa de palavras-chave, antes de começar, a gente estima o custo por clique das buscas do seu negócio e mostra o que dá para esperar com a verba que você tem.",
      },
      {
        q: "Google Ads ou Instagram: qual é melhor para mim?",
        a: "O Google funciona melhor quando as pessoas já pesquisam pelo seu serviço (dentista, advogado, conserto, peças). O Instagram funciona melhor para criar desejo em quem ainda não estava procurando (estética, moda, comida). Muitos negócios usam os dois.",
      },
      {
        q: "Preciso de site para anunciar no Google?",
        a: "Para campanhas de Pesquisa, sim, é preciso uma página de destino. Ela precisa ser rápida no celular e mostrar o serviço, a cidade e o botão de contato. A DLX cria essa página se você ainda não tiver.",
      },
      {
        q: "Google Ads ajuda a aparecer no Google Maps?",
        a: "Os anúncios podem mostrar o seu endereço e aparecer em buscas no Maps quando a conta está ligada ao seu Perfil da Empresa no Google. O resultado orgânico do Maps depende do perfil em si: categoria correta, fotos, avaliações e informações completas.",
      },
      {
        q: "Em quanto tempo dá para saber se está funcionando?",
        a: "Os cliques começam no primeiro dia. Com duas a quatro semanas de dados já dá para ver quais palavras trazem contato e cortar as que só gastam.",
      },
    ],
    related: ["meta-ads-ariquemes", "trafego-pago-ariquemes", "trafego-pago-para-lojas"],
    ctaTitle: "Bora colocar seu negócio no topo do Google em Ariquemes?",
    ctaText:
      "Me fala o que você vende. Eu levanto as palavras que o seu cliente pesquisa e te mostro uma estimativa antes de começar.",
    ctaMessage: "quero anunciar no Google (Google Ads)",
  },

  // ───────────────────────────────────────────── 4. Clínicas
  {
    slug: "trafego-pago-para-clinicas",
    name: "Tráfego pago para clínicas",
    metaTitle: "Tráfego Pago para Clínicas em Rondônia",
    metaDescription:
      "Anúncios para clínica odontológica, de estética e consultório em Ariquemes e Rondônia: mais pacientes chamando no WhatsApp pra agendar avaliação.",
    keywords: [
      "tráfego pago para clínicas",
      "marketing para clínica odontológica Ariquemes",
      "anúncio para dentista",
      "marketing para clínica de estética Rondônia",
      "captação de pacientes",
    ],
    serviceType: "Tráfego pago para clínicas e consultórios",
    eyebrow: "Nicho · Clínicas e consultórios",
    h1: { text: "Tráfego pago para clínicas: ", accent: "agenda cheia de avaliação." },
    lead:
      "Campanhas para clínica odontológica, de estética, harmonização e consultórios médicos. O objetivo é um só: paciente certo chamando no WhatsApp para agendar.",
    visual: "agenda",
    pain: {
      title: "Clínica não vende procedimento no anúncio. Vende a avaliação.",
      paragraphs: [
        "Ninguém fecha um implante ou uma harmonização pelo Instagram. A pessoa precisa confiar, tirar dúvida, conhecer o profissional. O anúncio que tenta vender o procedimento direto costuma atrair curioso perguntando preço e sumindo.",
        "O anúncio que funciona para clínica leva a pessoa a dar o primeiro passo: agendar uma avaliação. E aí entra a parte que muita clínica esquece: responder rápido. Paciente que manda mensagem e espera horas já está conversando com outra clínica.",
      ],
      punch: "O anúncio traz o paciente. A velocidade do atendimento fecha.",
    },
    steps: [
      {
        title: "Procedimento-âncora",
        text: "Escolha do procedimento com melhor margem e demanda na sua cidade para puxar a campanha: implante, lente, harmonização, botox, consulta.",
      },
      {
        title: "Anúncio dentro das regras",
        text: "Criativo que respeita as normas de publicidade do seu conselho profissional e as políticas de saúde da Meta e do Google.",
      },
      {
        title: "Paciente no WhatsApp",
        text: "Campanha de mensagem com perguntas que filtram o curioso antes de chegar na recepção.",
      },
      {
        title: "Recepção afinada",
        text: "Script de atendimento para a secretária e, se quiser, automação que responde na hora e marca a avaliação.",
      },
    ],
    includes: [
      "Estratégia por procedimento e por cidade",
      "Campanhas no Meta Ads e no Google Ads",
      "Roteiros de vídeo com o profissional",
      "Script de atendimento para a recepção",
      "Opção de automação de agendamento no WhatsApp",
      "Relatório de contatos, agendamentos e custo por paciente",
    ],
    local: {
      eyebrow: "Clínicas em Rondônia",
      title: "No interior, o paciente viaja para fazer procedimento.",
      paragraphs: [
        "Em Rondônia é comum o paciente sair de uma cidade menor para fazer implante, harmonização ou consulta com especialista em Ariquemes, Ji-Paraná ou Porto Velho. Uma clínica de Ariquemes pode anunciar para o Vale do Jamari inteiro, com uma mensagem que fala da viagem e facilita o agendamento.",
        "A DLX já trabalha com clínicas odontológicas, de estética e harmonização orofacial na região. Esse dia a dia mostra o que mais pesa no resultado: o profissional aparecendo no vídeo e a recepção respondendo rápido.",
      ],
    },
    kinetic: "PACIENTE",
    faqs: [
      {
        q: "Clínica pode fazer anúncio com antes e depois?",
        a: "Depende do conselho da sua profissão e das regras em vigor, que mudam com o tempo, e das políticas da Meta e do Google para saúde. Antes de subir qualquer criativo, a gente revisa com você o que é permitido para a sua área.",
      },
      {
        q: "Vale mais anunciar o preço ou a avaliação?",
        a: "Na maioria das clínicas, anunciar a avaliação traz contatos com mais intenção. Preço baixo no anúncio atrai quem só compara valor. A oferta certa depende do procedimento e do seu posicionamento.",
      },
      {
        q: "A DLX atende clínica fora de Ariquemes?",
        a: "Sim. A DLX atende clínicas em Rondônia e no Amazonas. As reuniões podem ser online, e para clínicas de Ariquemes também presenciais.",
      },
      {
        q: "Como sei quantos pacientes vieram do anúncio?",
        a: "A gente combina uma forma simples de a recepção marcar de onde veio cada paciente e cruza com os contatos da campanha. No relatório aparecem contatos, agendamentos e custo por paciente agendado.",
      },
      {
        q: "Minha recepção não dá conta de responder. E agora?",
        a: "Dá para montar uma automação no WhatsApp que responde na hora, tira as dúvidas mais comuns, faz as perguntas de triagem e já oferece horários. A recepção recebe o paciente pronto para confirmar.",
      },
    ],
    related: ["automacao-whatsapp", "meta-ads-ariquemes", "google-ads-ariquemes"],
    ctaTitle: "Bora encher a agenda de avaliação da sua clínica?",
    ctaText:
      "Me conta qual procedimento você mais quer vender. A gente monta a campanha e o roteiro do primeiro vídeo.",
    ctaMessage: "tenho uma clínica e quero mais pacientes com tráfego pago",
  },

  // ───────────────────────────────────────────── 5. Lojas e varejo
  {
    slug: "trafego-pago-para-lojas",
    name: "Tráfego pago para lojas",
    metaTitle: "Tráfego Pago para Lojas em Ariquemes e RO",
    metaDescription:
      "Anúncios para loja de roupa, ótica, calçados, ferramentas e varejo local: mais gente no direct, no WhatsApp e na porta da loja em Ariquemes e região.",
    keywords: [
      "tráfego pago para lojas",
      "anúncio para loja de roupa Ariquemes",
      "marketing para varejo Rondônia",
      "anúncio para loja física",
      "como atrair clientes para loja",
    ],
    serviceType: "Tráfego pago para lojas e varejo",
    eyebrow: "Nicho · Lojas e varejo local",
    h1: { text: "Tráfego pago para lojas: ", accent: "mais gente na porta." },
    lead:
      "Para loja de roupa, ótica, calçados, ferramentas, material de construção e todo varejo que vende no balcão. Anúncio que faz a pessoa chamar no direct ou atravessar a cidade até você.",
    visual: "funnel",
    pain: {
      title: "Postar todo dia não é a mesma coisa que vender todo dia.",
      paragraphs: [
        "Loja que só posta no feed fala sempre com as mesmas pessoas: quem já segue. O alcance orgânico de uma loja local é pequeno, e o cliente novo, aquele que nunca entrou, quase nunca vê o seu post.",
        "No varejo, o anúncio precisa de produto e motivo. Coleção nova, peça que chegou, condição de pagamento, data comemorativa. Anúncio genérico com a fachada da loja e “venha conferir” não dá razão nenhuma para sair de casa.",
      ],
      punch: "Produto certo, motivo claro e o caminho até a loja.",
    },
    steps: [
      {
        title: "Calendário de vendas",
        text: "Planejamento por mês: lançamentos, datas fortes do varejo (Dia das Mães, Black Friday, Natal, volta às aulas) e queima de estoque.",
      },
      {
        title: "Produto no anúncio",
        text: "Vídeo curto e carrossel mostrando a peça, o preço ou a condição. Quem vê já sabe o que vai encontrar.",
      },
      {
        title: "Direct, WhatsApp ou rota",
        text: "A campanha leva para a conversa com a vendedora ou abre a rota no Maps, dependendo de como a sua loja vende.",
      },
      {
        title: "Público de quem já comprou",
        text: "Remarketing para quem interagiu e públicos semelhantes aos seus melhores clientes, para não depender só de quem nunca ouviu falar de você.",
      },
    ],
    includes: [
      "Calendário de campanhas por data e coleção",
      "Anúncios de produto no Instagram e no Facebook",
      "Campanhas de rota e de conversa no direct/WhatsApp",
      "Google Ads para buscas de produto na cidade",
      "Roteiros de vídeo para a equipe gravar na loja",
      "Relatório de conversas, visitas e vendas atribuídas",
    ],
    local: {
      eyebrow: "Varejo no interior",
      title: "Em Ariquemes, a loja ainda vende muito pelo WhatsApp.",
      paragraphs: [
        "No varejo de cidade média, muita venda começa com uma foto mandada no WhatsApp: “tem esse no 38?”. Campanha que leva para a conversa com a vendedora costuma converter melhor do que mandar para um site de loja virtual que ninguém usa.",
        "E tem o movimento das cidades vizinhas. Em datas fortes, gente de Cacaulândia, Monte Negro e Alto Paraíso vem a Ariquemes para fazer compras. Uma campanha só para essas cidades, avisando o que tem na loja, chega antes do cliente sair de casa.",
      ],
    },
    kinetic: "VITRINE",
    faqs: [
      {
        q: "Loja pequena consegue resultado com anúncio?",
        a: "Consegue, desde que o anúncio tenha produto e motivo claro e a campanha esteja focada na cidade. Não é preciso uma verba grande para começar; é preciso constância e criativo bom.",
      },
      {
        q: "Vale a pena anunciar no Google para loja física?",
        a: "Vale para quem procura produto específico, como “ótica em Ariquemes” ou “loja de ferramentas perto de mim”. Junto com um Perfil da Empresa no Google bem cuidado, ajuda a levar gente até a porta.",
      },
      {
        q: "Como medir se o anúncio trouxe gente para a loja?",
        a: "Pelas conversas no WhatsApp e no direct que vêm da campanha, pelas rotas abertas no Maps e por um combinado simples com a equipe de perguntar como o cliente conheceu a loja.",
      },
      {
        q: "Vocês fazem as fotos e vídeos dos produtos?",
        a: "A DLX entrega o roteiro e a orientação do que gravar; a equipe da loja grava com o celular. A DLX também faz a edição dos vídeos para Reels quando você contrata esse serviço.",
      },
      {
        q: "Qual a melhor época para começar?",
        a: "O ideal é começar algumas semanas antes de uma data forte, para a campanha já estar ajustada quando o movimento chegar. Começar em cima da hora funciona, mas sai mais caro.",
      },
    ],
    related: ["meta-ads-ariquemes", "edicao-de-video-para-reels", "google-ads-ariquemes"],
    ctaTitle: "Bora colocar mais gente dentro da sua loja?",
    ctaText:
      "Me conta o que você vende e qual é a próxima data forte. A gente monta o calendário e a primeira campanha.",
    ctaMessage: "tenho uma loja e quero mais clientes com tráfego pago",
  },

  // ───────────────────────────────────────────── 6. Automação WhatsApp
  {
    slug: "automacao-whatsapp",
    name: "Automação de WhatsApp",
    metaTitle: "Automação de WhatsApp com IA em Ariquemes",
    metaDescription:
      "Automação de WhatsApp com IA e n8n: responde na hora, qualifica o cliente, agenda e manda pro CRM. Para clínicas, lojas e negócios locais de Rondônia.",
    keywords: [
      "automação de WhatsApp",
      "atendimento automático WhatsApp",
      "chatbot WhatsApp com IA",
      "automação n8n",
      "automação de atendimento Ariquemes",
    ],
    serviceType: "Automação de atendimento no WhatsApp",
    eyebrow: "Automação · WhatsApp, IA e n8n",
    h1: { text: "Automação de WhatsApp ", accent: "que responde em segundos." },
    lead:
      "Um atendente que não dorme: responde quem chama na hora, tira as dúvidas comuns, faz as perguntas certas e entrega o cliente pronto para você fechar. Feito com IA e n8n.",
    visual: "chat",
    pain: {
      title: "Você paga pelo contato e perde no “oi, tudo bem?”.",
      paragraphs: [
        "Quem chama pelo anúncio quer resposta agora. Se a mensagem chega às 21h, no domingo ou na hora do almoço e só é respondida horas depois, boa parte das pessoas já esfriou ou foi atrás de outro.",
        "E mesmo em horário comercial, a equipe gasta tempo respondendo as mesmas perguntas: preço, horário, endereço, se aceita cartão. É tempo que poderia ir para quem está pronto para comprar.",
      ],
      punch: "O contato mais caro é o que ninguém respondeu.",
    },
    steps: [
      {
        title: "Mapa da conversa",
        text: "A gente desenha o caminho do seu atendimento: primeiras perguntas, dúvidas frequentes, o que qualifica um cliente bom e quando passar para um humano.",
      },
      {
        title: "IA treinada no seu negócio",
        text: "O assistente aprende seus serviços, preços, horários e jeito de falar. Responde como a sua equipe responderia, sem inventar o que não sabe.",
      },
      {
        title: "Fluxo no n8n",
        text: "Integração com WhatsApp, Instagram, planilha, agenda e CRM. Cada contato é registrado com nome, interesse e origem.",
      },
      {
        title: "Passagem para o humano",
        text: "Quando o cliente está pronto, ou quando a pergunta foge do roteiro, a conversa vai para a sua equipe com o resumo do que já foi falado.",
      },
    ],
    includes: [
      "Mapeamento do atendimento atual",
      "Assistente com IA no WhatsApp",
      "Fluxos de automação no n8n",
      "Integração com planilha, agenda ou CRM",
      "Automação de comentário e direct no Instagram",
      "Ajustes mensais com base nas conversas reais",
    ],
    local: {
      eyebrow: "Tráfego + automação",
      title: "Anúncio sem atendimento rápido é dinheiro escorrendo.",
      paragraphs: [
        "Muitas vezes a necessidade de automação nasce de uma campanha de tráfego: o anúncio começa a trazer mais mensagens do que a equipe consegue responder, e o custo por cliente sobe porque o contato esfria esperando.",
        "Juntar as duas coisas na mesma mão facilita: quem cria o anúncio sabe exatamente o que a pessoa viu antes de chamar, e a automação continua a conversa de onde o anúncio parou. Funciona para clínica, loja, delivery e prestador de serviço, em Ariquemes ou em qualquer cidade.",
      ],
    },
    kinetic: "AUTOMÁTICO",
    faqs: [
      {
        q: "O cliente vai perceber que é um robô?",
        a: "A automação se apresenta como assistente do seu negócio. Com IA, as respostas soam naturais e seguem o seu jeito de falar. E sempre que a pessoa pedir para falar com alguém, ou a conversa sair do roteiro, ela vai para a sua equipe.",
      },
      {
        q: "Preciso trocar meu número de WhatsApp?",
        a: "Na maioria dos casos, não. A gente avalia a melhor forma de conectar o número que você já usa, considerando o volume de mensagens e as regras do WhatsApp.",
      },
      {
        q: "A IA pode inventar preço ou prometer o que não deve?",
        a: "Ela é configurada para responder só com as informações que você aprovou e para passar a conversa para um humano quando não souber. Nas primeiras semanas a gente revisa as conversas reais e ajusta.",
      },
      {
        q: "O que é n8n?",
        a: "É uma ferramenta de automação que conecta aplicativos: WhatsApp, Instagram, Google Planilhas, agenda, CRM e outros. É nela que a DLX monta os fluxos que fazem cada informação ir para o lugar certo sem ninguém copiar e colar.",
      },
      {
        q: "Dá para automatizar o Instagram também?",
        a: "Sim. Um fluxo comum é: a pessoa comenta uma palavra-chave no post, recebe uma mensagem no direct e é levada para o WhatsApp ou para um link. Isso transforma comentário em contato.",
      },
    ],
    related: ["trafego-pago-para-clinicas", "meta-ads-ariquemes", "trafego-pago-ariquemes"],
    ctaTitle: "Bora parar de perder cliente no WhatsApp?",
    ctaText:
      "Me conta como é o seu atendimento hoje. Eu te mostro o que dá para automatizar primeiro e o que deve continuar com a sua equipe.",
    ctaMessage: "quero automatizar o atendimento do meu WhatsApp",
  },

  // ───────────────────────────────────────────── 7. Edição de vídeo
  {
    slug: "edicao-de-video-para-reels",
    name: "Edição de vídeo para Reels",
    metaTitle: "Edição de Vídeo para Reels em Ariquemes",
    metaDescription:
      "Edição de vídeo para Reels, TikTok e anúncios: gancho nos 3 primeiros segundos, legenda, cortes e motion. Você grava no celular, a DLX entrega pronto.",
    keywords: [
      "edição de vídeo para Reels",
      "editor de vídeo Ariquemes",
      "edição de vídeo para anúncio",
      "vídeo para Instagram empresa",
      "edição de Reels Rondônia",
    ],
    serviceType: "Edição de vídeo para Reels e anúncios",
    eyebrow: "Vídeo · Reels, TikTok e anúncios",
    h1: { text: "Edição de vídeo para Reels ", accent: "que segura o dedo." },
    lead:
      "Você grava no celular, a DLX transforma em Reels e anúncio: gancho forte, legenda, cortes no ritmo certo e motion. Vídeo pensado para vender, não só para ficar bonito.",
    visual: "reel",
    pain: {
      title: "Vídeo bom que ninguém assiste até o fim não vende nada.",
      paragraphs: [
        "A decisão de continuar assistindo acontece nos primeiros segundos. Vídeo que começa com “oi, gente, tudo bem?” e uma pausa de dois segundos perde a maioria das pessoas antes de chegar no que importa.",
        "E muita gente assiste sem som: no trabalho, na fila, à noite do lado de alguém dormindo. Vídeo sem legenda grande e legível fala sozinho.",
      ],
      punch: "Os 3 primeiros segundos decidem se o resto existe.",
    },
    steps: [
      {
        title: "Roteiro com gancho",
        text: "Antes de gravar, um roteiro curto com a frase de abertura, o que mostrar e a chamada final. Cada vídeo testa um gancho diferente.",
      },
      {
        title: "Gravação no celular",
        text: "Orientação simples de luz, enquadramento e áudio. Não precisa de câmera nem de estúdio.",
      },
      {
        title: "Edição no ritmo",
        text: "Corte de pausas e erros, texto grande na abertura, legenda palavra por palavra, zoom e motion onde ajuda a entender.",
      },
      {
        title: "Versão para anúncio",
        text: "O mesmo vídeo sai em versões para feed, Stories, Reels e anúncio, com variações de gancho para descobrir qual performa melhor.",
      },
    ],
    includes: [
      "Roteiro com gancho e chamada para ação",
      "Edição vertical 9:16 para Reels, TikTok e Shorts",
      "Legenda animada e texto de abertura",
      "Motion graphics e efeitos sonoros",
      "Variações de gancho para teste em anúncio",
      "Entrega pronta para postar",
    ],
    local: {
      eyebrow: "Vídeo para negócio local",
      title: "O seu rosto vende mais que qualquer arte bonita.",
      paragraphs: [
        "Para negócio local, o vídeo com o dono, a dentista, o vendedor ou o cozinheiro cria confiança antes do primeiro contato. Quem vê já sabe com quem vai falar. A edição existe para deixar essa pessoa clara, rápida e natural, sem efeito que deforma o rosto ou distrai da mensagem.",
        "Como a DLX também faz o tráfego, cada vídeo é editado pensando em virar anúncio: o gancho é testado, o resultado volta para o próximo roteiro e o conteúdo melhora mês a mês. A edição é feita a distância, então atende negócios de Ariquemes, de Rondônia e de qualquer lugar do Brasil.",
      ],
    },
    kinetic: "GANCHO",
    faqs: [
      {
        q: "Preciso de câmera profissional?",
        a: "Não. Um celular recente, luz de janela e um microfone de lapela simples já resolvem. A DLX manda as orientações de gravação junto com o roteiro.",
      },
      {
        q: "Quanto tempo leva para receber o vídeo editado?",
        a: "O prazo é combinado no início, de acordo com a quantidade de vídeos por mês. A ideia é ter uma rotina fixa: você grava num dia e recebe os vídeos prontos para a semana.",
      },
      {
        q: "Vocês fazem o roteiro também?",
        a: "Sim. O roteiro com o gancho, o que falar e a chamada final faz parte do serviço. É ele que define se o vídeo vai segurar a atenção.",
      },
      {
        q: "Qual a duração ideal de um Reels para empresa?",
        a: "Não existe um número mágico: o vídeo deve ter o tamanho necessário para entregar a mensagem sem enrolar. Para anúncio, versões mais curtas costumam funcionar bem, e a gente testa durações diferentes.",
      },
      {
        q: "Vocês editam vídeos para outras cidades?",
        a: "Sim. Você manda os arquivos pelo Google Drive ou pelo WhatsApp e recebe o vídeo pronto. Funciona para qualquer cidade.",
      },
    ],
    related: ["meta-ads-ariquemes", "trafego-pago-para-lojas", "automacao-whatsapp"],
    ctaTitle: "Bora transformar o seu celular em máquina de Reels?",
    ctaText:
      "Me manda um vídeo que você já gravou. Eu te mostro o que mudaria no gancho e na edição.",
    ctaMessage: "quero edição de vídeo para Reels e anúncios",
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
