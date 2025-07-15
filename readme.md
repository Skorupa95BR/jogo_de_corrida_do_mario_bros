# 🏎️ Mario Kart Race Simulator 🎲

Este é um projeto simples em JavaScript que simula corridas entre personagens inspirados no universo do Mario Kart.  
A cada rodada, os personagens rolam dados, enfrentam diferentes tipos de blocos (reta, curva ou confronto) e acumulam ou perdem pontos.

## 📦 Sobre o projeto
- Feito em **JavaScript puro (Node.js)**
- Executado pelo terminal
- Usa sorteio aleatório para definir:
  - Bloco da vez (reta, curva ou confronto)
  - Resultado dos dados
  - Quais jogadores competem

## 🎮 Como funciona
- Cada corrida tem 5 rodadas
- Em cada rodada, ocorre:
  - Sorteio do tipo de bloco
  - Cada jogador rola um dado de 1 a 6
  - Soma-se o valor do dado com o atributo correspondente:
    - Reta → velocidade
    - Curva → manobrabilidade
    - Confronto → poder
- O jogador com maior pontuação na rodada ganha 1 ponto
- No confronto, o perdedor perde 1 ponto (se tiver)

## 👾 Personagens
- Mario
- DK
- Peach
- Yoshi
- Bowser
- DK (variante)

Cada um tem atributos diferentes de **velocidade**, **manobrabilidade** e **poder**.

## 🚀 Como rodar
1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
