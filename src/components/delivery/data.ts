// Números reais puxados das contas de anúncio (Meta Ads) em 19/10/2026.
// Período: últimos 30 dias. "Vendas registradas" = valor de conversão de
// compra que o pixel registrou (não é faturamento confirmado pelo cliente),
// por isso a página sempre fala em "vendas registradas no painel".
// Manaus ficou de fora de propósito (rastreio duplicado entre duas BMs).

export const PERIODO = "últimos 30 dias · dados de 19/10/2026";

export const TOTAL = {
  investido: 33301.94,
  pedidos: 10584,
  vendas: 786375,
  roas: 23.6,
  custoPedido: 3.15,
};

export const UNIDADES = [
  { nome: "Só Pizzas", cidade: "Ariquemes", investido: 9709.54, pedidos: 4937, vendas: 360319, roas: 37.1, custo: 1.97 },
  { nome: "Só Pizzas", cidade: "Porto Velho", investido: 13794.65, pedidos: 3906, vendas: 300373, roas: 21.8, custo: 3.53 },
  { nome: "Só Burger", cidade: "Ariquemes", investido: 5609.24, pedidos: 1090, vendas: 77113, roas: 13.7, custo: 5.15 },
  { nome: "Só Burger", cidade: "Porto Velho", investido: 4188.51, pedidos: 651, vendas: 48571, roas: 11.6, custo: 6.43 },
];

// Campanha "Combo Casal" (Só Pizzas Ariquemes), últimos 7 dias.
export const DESTAQUE = {
  campanha: "Combo Casal",
  periodo: "últimos 7 dias",
  investido: 688.11,
  pedidos: 386,
  roas: 40.5,
  custo: 1.78,
};

// Google Ads, rede de pesquisa, semana 10–16/ago/2026 (relatório semanal).
export const GOOGLE = {
  periodo: "semana de 10 a 16/ago",
  investido: 574.98,
  vendas: 34401.22,
  roas: 59.8,
};

// faixa real de custo por pedido usada na calculadora (melhor e pior conta)
export const CUSTO_MIN = 1.97;
export const CUSTO_MAX = 6.43;

export const brl = (v: number, dec = 0) =>
  v.toLocaleString("pt-BR", { minimumFractionDigits: dec, maximumFractionDigits: dec });
