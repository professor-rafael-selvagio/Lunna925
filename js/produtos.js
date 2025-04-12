const produtos = [
    {
      "tamanhos": ["14", "16", "20"],
      "nome": "Anel Aparador Corações",
      "valor_venda": "R$ 59,90",
      "foto": "an1.png",
      "categoria": "anel"
    },
    {
      "tamanhos": ["14", "18", "22"],
      "nome": "Anel Pedrinha",
      "valor_venda": "R$ 54,99",
      "foto": "an2.png",
      "categoria": "anel"
    },
    {
      "tamanhos": ["12", "16", "18"],
      "nome": "Anel Cristal",
      "valor_venda": "R$ 69,90",
      "foto": "an3.png",
      "categoria": "anel"
    },
    {
      "tamanhos": ["14", "16", "18", "20", "22"],
      "nome": "Anel Fino",
      "valor_venda": "R$ 62,90",
      "foto": "an4.png",
      "categoria": "anel"
    },
    {
      "tamanhos": ["14", "16", "18", "20"],
      "nome": "Anel Coração Cravejado",
      "valor_venda": "R$ 71,90",
      "foto": "an5.png",
      "categoria": "anel"
    },
    {
      "tamanhos": ["regulável"],
      "nome": "Anel Coração Regulável",
      "valor_venda": "R$ 62,90",
      "foto": "an6.png",
      "categoria": "anel"
    },
    {
      "tamanhos": ["12", "14", "16", "18", "20"],
      "nome": "Anel Flor",
      "valor_venda": "R$ 92,90",
      "foto": "an7.png",
      "categoria": "anel"
    },
    {
      "tamanhos": ["12", "14", "16", "18", "20", "22"],
      "nome": "Anel Patinha Cravejado",
      "valor_venda": "R$ 89,90",
      "foto": "an8.png",
      "categoria": "anel"
    },
    {
      "tamanhos": ["14", "16", "18", "20"],
      "nome": "Anel Solitário Cristais",
      "valor_venda": "R$ 69,90",
      "foto": "an9.png",
      "categoria": "anel"
    },
    {
      "tamanhos": ["14", "16", "18", "20"],
      "nome": "Anel Solitário Cristais",
      "valor_venda": "R$ 59,90",
      "foto": "an10.png",
      "categoria": "anel"
    },
    {
      "tamanhos": ["12", "14", "16", "18", "20"],
      "nome": "Anel Cruz Cravejado",
      "valor_venda": "R$ 65,00",
      "foto": "an11.png",
      "categoria": "anel"
    },
    {
      "tamanhos": ["14", "16"],
      "nome": "Anel Cadeado",
      "valor_venda": "R$ 30,00",
      "foto": "an12.png",
      "categoria": "anel"
    },
    {
      "tamanhos": ["16", "18", "20", "22"],
      "nome": "Anel Olho Grego Cravejado",
      "valor_venda": "R$ 51,20",
      "foto": "an13.png",
      "categoria": "anel"
    },
    {
      "tamanhos": ["18", "20", "22"],
      "nome": "Anel Solitário aro bolinhas",
      "valor_venda": "R$ 50,00",
      "foto": "an14.png",
      "categoria": "anel"
    },
    {
      "tamanhos": ["18", "20", "22"],
      "nome": "Anel Ponto de Luz Cristal",
      "valor_venda": "R$ 32,90",
      "foto": "an15.png",
      "categoria": "anel"
    },
    {
      "tamanhos": ["14", "16", "18", "20"],
      "nome": "Anel Espírito Santo",
      "valor_venda": "R$ 42,90",
      "foto": "an16.png",
      "categoria": "anel"
    },
    {
      "tamanhos": ["16", "18", "20", "22"],
      "nome": "Anel DUO Coração",
      "valor_venda": "R$ 62,90",
      "foto": "an17.png",
      "categoria": "anel"
    },
    {
      "tamanhos": ["regulável"],
      "nome": "Anel Bolinha Regulável",
      "valor_venda": "R$ 41,80",
      "foto": "an18.png",
      "categoria": "anel"
    },
    {
      "tamanhos": ["14", "16", "18", "20", "22"],
      "nome": "Anel Bolinhas Coloridas",
      "valor_venda": "R$ 69,99",
      "foto": "an19.png",
      "categoria": "anel"
    },
    {
      "tamanhos": ["regulável"],
      "nome": "Anel de falange flor",
      "valor_venda": "R$ 59,90",
      "foto": "an20.png",
      "categoria": "anel"
    },
    {
      "tamanhos": ["16"],
      "nome": "Anel Olho grego cravejado",
      "valor_venda": "R$ 75,99",
      "foto": "an21.png",
      "categoria": "anel"
    },
    {
      "tamanhos": ["16", "18", "20"],
      "nome": "Anel LUA cristais",
      "valor_venda": "R$ 61,90",
      "foto": "an22.png",
      "categoria": "anel"
    },
    {
      "tamanhos": ["16", "18"],
      "nome": "Anel Sol com Pedra Natural",
      "valor_venda": "R$ 92,90",
      "foto": "an23.png",
      "categoria": "anel"
    },
    {
      "tamanhos": ["14", "16", "18", "20", "22", "24"],
      "nome": "Anel Cobra",
      "valor_venda": "R$ 62,90",
      "foto": "an26.png",
      "categoria": "anel"
    },
    {
      "tamanhos": ["12", "14", "16", "18", "20", "22"],
      "nome": "Anel cobra cravejado",
      "valor_venda": "R$ 89,90",
      "foto": "an25.png",
      "categoria": "anel"
    },
    {
      "nome": "Brinco Corrente Ponto de Luz",
      "valor_venda": "R$ 59,60",
      "foto": "br1.png",
      "categoria": "brinco"
    },
    {
      "nome": "Argola Quadrada",
      "valor_venda": "R$ 25,00",
      "foto": "br2.png",
      "categoria": "brinco"
    },
    {
      "nome": "Trio Bolinhas",
      "valor_venda": "R$ 52,90",
      "foto": "br3.png",
      "categoria": "brinco"
    },
    {
      "nome": "Piercing Coração",
      "valor_venda": "R$ 35,60",
      "foto": "pier1.png",
      "categoria": "piercing"
    },
    {
      "nome": "Brinco Trevo Preto",
      "valor_venda": "R$ 63,50",
      "foto": "br4.png",
      "categoria": "brinco"
    },
    {
      "nome": "Argola Ponto de Luz",
      "valor_venda": "R$ 51,90",
      "foto": "br5.png",
      "categoria": "brinco"
    },
    {
      "nome": "Argola Coração 12 mm",
      "valor_venda": "R$ 32,60",
      "foto": "br6.png",
      "categoria": "brinco"
    },
    {
      "nome": "Argola Coração 18 mm",
      "valor_venda": "R$ 34,90",
      "foto": "br7.png",
      "categoria": "brinco"
    },
    {
      "nome": "Argola Coração 20 mm",
      "valor_venda": "R$ 37,50",
      "foto": "br8.png",
      "categoria": "brinco"
    },
    {
      "nome": "Brinco Corações",
      "valor_venda": "R$ 42,90",
      "foto": "br9.png",
      "categoria": "brinco"
    },
    {
      "nome": "Brinco Olho Grego Cravejado",
      "valor_venda": "R$ 45,60",
      "foto": "br10.png",
      "categoria": "brinco"
    },
    {
      "nome": "Trio de Argolas clicks",
      "valor_venda": "R$ 142,90",
      "foto": "br11.png",
      "categoria": "brinco"
    },
    {
      "nome": "Brinco Trevo Preto ou Madrepérola",
      "valor_venda": "R$ 110,30",
      "foto": "br12.png",
      "categoria": "brinco"
    },
    {
      "nome": "Trio Ponto de luz",
      "valor_venda": "R$ 52,40",
      "foto": "br13.png",
      "categoria": "brinco"
    },
    {
      "nome": "Brinco de Bolinha",
      "valor_venda": "R$ 35,90",
      "foto": "br14.png",
      "categoria": "brinco"
    },
    {
      "nome": "Brinco de Estrela",
      "valor_venda": "R$ 51,20",
      "foto": "br15.png",
      "categoria": "brinco"
    },
    {
      "nome": "Brinco Espirito Santo",
      "valor_venda": "R$ 57,40",
      "foto": "br16.png",
      "categoria": "brinco"
    },
    {
      "nome": "Brinco Fio",
      "valor_venda": "R$ 68,90",
      "foto": "br17.png",
      "categoria": "brinco"
    },
    {
      "nome": "Brinco Cruz Fio",
      "valor_venda": "R$ 71,20",
      "foto": "br18.png",
      "categoria": "brinco"
    },
    {
      "nome": "Brinco Cobra",
      "valor_venda": "R$ 94,30",
      "foto": "br19.png",
      "categoria": "brinco"
    },
    {
      "nome": "Brinco Olho Grego Premium",
      "valor_venda": "R$ 135,00",
      "foto": "br20.png",
      "categoria": "brinco"
    },
    {
      "nome": "Brinco Cruz Luz Premium",
      "valor_venda": "R$ 135,00",
      "foto": "br21.png",
      "categoria": "brinco"
    },
    {
      "nome": "Brinco Renda",
      "valor_venda": "R$ 94,20",
      "foto": "br22.png",
      "categoria": "brinco"
    },
      {
        "nome": "Jocker Trevo Preto",
        "valor_venda": "R$ 120,00",
        "foto": "col1.png",
        "categoria": "colar"
      },
      {
        "nome": "Jocker Trevo Preto ou Cristal",
        "valor_venda": "R$ 115,00",
        "foto": "col2.png",
        "categoria": "colar"
      },
      {
        "nome": "Correntes Venezianas",
        "valor_venda": "R$ 55,00",
        "foto": "col3.png",
        "categoria": "colar"
      },
      {
        "nome": "Jocker Bolinhas",
        "valor_venda": "R$ 92,30",
        "foto": "col4.png",
        "categoria": "colar"
      },
      {
        "nome": "Jocker Fita Laminada",
        "valor_venda": "R$ 220,00",
        "foto": "col5.png",
        "categoria": "colar"
      },
      {
        "nome": "Escapulário Espirito Santo",
        "valor_venda": "R$ 125,00",
        "foto": "col6.png",
        "categoria": "colar"
      },
      {
        "nome": "Colar Ponto de Luz Coração",
        "valor_venda": "R$ 110,20",
        "foto": "col7.png",
        "categoria": "colar"
      },
      {
        "nome": "Colar Coração e Ponto de Luz",
        "valor_venda": "R$ 110,60",
        "foto": "col8.png",
        "categoria": "colar"
      },
      {
        "nome": "Colar Corações Coloridos",
        "valor_venda": "R$ 109,65",
        "foto": "col9.png",
        "categoria": "colar"
      },
      {
        "nome": "Colar Cruz",
        "valor_venda": "R$ 54,20",
        "foto": "col10.png",
        "categoria": "colar"
      },
      {
        "nome": "Colar Duplo Bolinha",
        "valor_venda": "R$ 165,20",
        "foto": "col11.png",
        "categoria": "colar"
      },
      {
        "nome": "Jocker Cristais",
        "valor_venda": "R$ 96,30",
        "foto": "col12.png",
        "categoria": "colar"
      },
      {
        "nome": "Colar Signo Touro",
        "valor_venda": "R$ 79,60",
        "foto": "col13.png",
        "categoria": "colar"
      },
      {
        "nome": "Colar Signo Escorpião",
        "valor_venda": "R$ 79,60",
        "foto": "col14.png",
        "categoria": "colar"
      },
      {
        "nome": "Colar Signo Capricórnio",
        "valor_venda": "R$ 79,60",
        "foto": "col15.png",
        "categoria": "colar"
      },
      {
        "nome": "Colar Signo Libra",
        "valor_venda": "R$ 79,60",
        "foto": "col16.png",
        "categoria": "colar"
      },
      {
        "nome": "Colar Filhos",
        "valor_venda": "R$ 107,20",
        "foto": "col17.png",
        "categoria": "colar"
      },
      {
        "nome": "Colar Cruzado Premium",
        "valor_venda": "R$ 168,60",
        "foto": "col18.png",
        "categoria": "colar"
      },
      {
        "nome": "Escapulário São Bento",
        "valor_venda": "R$ 120,00",
        "foto": "col19.png",
        "categoria": "colar"
      },
      {
        "nome": "Escapulário A,mar",
        "valor_venda": "R$ 120,00",
        "foto": "col20.png",
        "categoria": "colar"
      },
      {
        "nome": "Colar Gatinho",
        "valor_venda": "R$ 67,20",
        "foto": "col21.png",
        "categoria": "colar"
      },
      {
        "nome": "Colar Signo Aries",
        "valor_venda": "R$ 79,60",
        "foto": "col22.png",
        "categoria": "colar"
      },
      {
        "nome": "Escapulário Estrela de DAVI",
        "valor_venda": "R$ 120,00",
        "foto": "col23.png",
        "categoria": "colar"
      },
      {
        "nome": "Colar Gravatinha Cruz",
        "valor_venda": "R$ 125,00",
        "foto": "col24.png",
        "categoria": "colar"
      },
      {
        "nome": "Escapulário Sol e Lua",
        "valor_venda": "R$ 120,00",
        "foto": "col25.png",
        "categoria": "colar"
      },
      {
        "nome": "Escapulário Sagrado Coração de Jesus",
        "valor_venda": "R$ 100,00",
        "foto": "col26.png",
        "categoria": "colar"
      },
      {
        "nome": "Escapulário Mãe de Menina",
        "valor_venda": "R$ 175,60",
        "foto": "col27.png",
        "categoria": "colar"
      },
      {
        "nome": "Colar Signo Aquário",
        "valor_venda": "R$ 79,60",
        "foto": "col28.png",
        "categoria": "colar"
      },
      {
        "nome": "Escapulário Mãe de Menino",
        "valor_venda": "R$ 175,60",
        "foto": "col29.png",
        "categoria": "colar"
      },
      {
        "nome": "Colar Coração Zincônia",
        "valor_venda": "R$ 85,30",
        "foto": "col30.png",
        "categoria": "colar"
      },
      {
        "nome": "Conjunto Coração Cravejado",
        "valor_venda": "R$ 85,99",
        "foto": "cj2.png",
        "categoria": "conjunto"
      },
      {
        "nome": "Conjunto Coração Cravejado Colorido",
        "valor_venda": "R$ 95,00",
        "foto": "cj1.png",
        "categoria": "conjunto"
      },
      {
        "nome": "Conjunto Borboleta Premium",
        "valor_venda": "R$ 95,00",
        "foto": "cj3.png",
        "categoria": "conjunto"
      },
      {
        "nome": "Pingente Personalizável Filha",
        "valor_venda": "R$ 58,62",
        "foto": "pin1.png",
        "categoria": "pingente"
      },
      {
        "nome": "Pingente Personalizável Filho",
        "valor_venda": "R$ 58,62",
        "foto": "pin2.png",
        "categoria": "pingente"
      },
      {
        "nome": "Pingente Personalizável Cachorro",
        "valor_venda": "R$ 58,62",
        "foto": "pin2.png",
        "categoria": "pingente"
      },
      {
        "nome": "Pingente Personalizável Gato",
        "valor_venda": "R$ 58,62",
        "foto": "pin2.png",
        "categoria": "pingente"
      },
      {
        "nome": "Colar Nome Personalizável",
        "valor_venda": "R$ 150,00",
        "foto": "col31.png",
        "categoria": "colar"
      },
      {
        "nome": "Colar Inicial personalizável",
        "valor_venda": "R$ 150,00",
        "foto": "col32.png",
        "categoria": "colar"
      },
      {
        "nome": "Colar Ano Personalizável",
        "valor_venda": "R$ 150,00",
        "foto": "col33.png",
        "categoria": "colar"
      },
      {
        "nome": "Pingente de Coleira",
        "valor_venda": "R$ 150,00",
        "foto": "pin4.png",
        "categoria": "pingente"
      },
      {
        "nome": "Colar Inicial personalizável",
        "valor_venda": "R$ 150,00",
        "foto": "col34.png",
        "categoria": "colar"
      },
      {
        "nome": "Pulseira Inicial",
        "valor_venda": "R$ 110,00",
        "foto": "pul1.png",
        "categoria": "pulseira"
      },
      {
        "nome": "Pingente com Nome Gravado e Coração Vazado",
        "valor_venda": "R$ 62,90",
        "foto": "pin5.png",
        "categoria": "pingente"
      },
      {
        "nome": "Colar Nome Duplo",
        "valor_venda": "R$ 162,90",
        "foto": "col35.png",
        "categoria": "colar"
      },
      {
        "nome": "Pulseira Infantil Zincônias Rosas",
        "valor_venda": "R$ 52,30",
        "foto": "inf1.png",
        "categoria": "infantil"
      },
      {
        "nome": "Pulseira Infantil Personalizada",
        "valor_venda": "R$ 85,00",
        "foto": "inf2.png",
        "categoria": "infantil"
      },
      {
        "nome": "Conjunto Infantil MICKEY",
        "valor_venda": "R$ 100,00",
        "foto": "inf3.png",
        "categoria": "infantil"
      },
      {
        "nome": "Conjunto Infantil Linguado",
        "valor_venda": "R$ 100,00",
        "foto": "inf4.png",
        "categoria": "infantil"
      },
      {
        "nome": "Conjunto Infantil Galinha Pintadinha",
        "valor_venda": "R$ 100,00",
        "foto": "inf5.png",
        "categoria": "infantil"
      },
      {
        "nome": "Conjunto Infantil Coelhinho",
        "valor_venda": "R$ 100,00",
        "foto": "inf6.png",
        "categoria": "infantil"
      },
      {
        "nome": "Conjunto Infantil Rosa",
        "valor_venda": "R$ 100,00",
        "foto": "inf7.png",
        "categoria": "infantil"
      },
      {
        "nome": "Conjunto Infantil Castelo",
        "valor_venda": "R$ 109,00",
        "foto": "inf8.png",
        "categoria": "infantil"
      },
      {
        "nome": "Anel Infantil Panda",
        "valor_venda": "R$ 45,20",
        "foto": "inf9.png",
        "categoria": "infantil"
      },
      {
        "nome": "Brinco Infantil Joaninha",
        "valor_venda": "R$ 42,00",
        "foto": "inf10.png",
        "categoria": "infantil"
      },
      {
        "nome": "Pingente Infantil Lacinho",
        "valor_venda": "R$ 15,00",
        "foto": "inf11.png",
        "categoria": "infantil"
      },
      {
        "nome": "Colar Infantil Florzinha",
        "valor_venda": "R$ 100,00",
        "foto": "inf12.png",
        "categoria": "infantil"
      },
      {
        "nome": "Corrente Masculina 70cm 3mm",
        "valor_venda": "R$ 200,00",
        "foto": "masc1.png",
        "categoria": "masculino"
      },
      {
        "nome": "Pulseira Masculina",
        "valor_venda": "R$ 81,00",
        "foto": "masc2.png",
        "categoria": "masculino"
      },
      {
        "nome": "Corrente Masculina 60cm",
        "valor_venda": "R$ 120,00",
        "foto": "masc3.png",
        "categoria": "masculino"
      },
      {
        "nome": "Pingente Cruz",
        "valor_venda": "R$ 41,00",
        "foto": "masc4.png",
        "categoria": "pingente"
      },
      {
        "nome": "Pulseira Masculina",
        "valor_venda": "R$ 81,20",
        "foto": "masc5.png",
        "categoria": "masculino"
      },
      {
        "nome": "Corrente Masculina 70cm",
        "valor_venda": "R$ 120,00",
        "foto": "masc6.png",
        "categoria": "masculino"
      },
      {
        "nome": "Pulseira Masculina Gourmet 2mm",
        "valor_venda": "R$ 89,90",
        "foto": "masc7.png",
        "categoria": "masculino"
      },
      {
        "nome": "Pulseira Masculina Cartier",
        "valor_venda": "R$ 89,90",
        "foto": "masc8.png",
        "categoria": "masculino"
      },
      {
        "nome": "Pulseira Terço 4mm",
        "valor_venda": "R$ 91,90",
        "foto": "pul2.png",
        "categoria": "pulseira"
      },
      {
        "nome": "Conjunto Patinhas",
        "valor_venda": "R$ 110,00",
        "foto": "cj4.png",
        "categoria": "conjunto"
      },
      {
        "nome": "Berloque Mãe de Menino",
        "valor_venda": "R$ 74,90",
        "foto": "ber1.png",
        "categoria": "berloque"
      },
      {
        "nome": "Colar Coração Duplo",
        "valor_venda": "R$ 60,00",
        "foto": "pin6.png",
        "categoria": "colar"
      },
      {
        "nome": "Pingente Ponto de Luz",
        "valor_venda": "R$ 35,90",
        "foto": "pin7.png",
        "categoria": "pingente"
      },
      {
        "nome": "Berloque Renda de Flor",
        "valor_venda": "R$ 65,00",
        "foto": "ber2.png",
        "categoria": "berloque"
      },
      {
        "nome": "Berloque Espelho Princesa",
        "valor_venda": "R$ 65,00",
        "foto": "ber6.png",
        "categoria": "berloque"
      },
      {
        "nome": "Berloque Cacto",
        "valor_venda": "R$ 65,00",
        "foto": "ber4.png",
        "categoria": "berloque"
      },
      {
        "nome": "Berloque Pizza",
        "valor_venda": "R$ 65,00",
        "foto": "ber5.png",
        "categoria": "berloque"
      },
      {
        "nome": "Berloque Signo",
        "valor_venda": "R$ 60,00",
        "foto": "ber3.png",
        "categoria": "berloque"
      },
      {
        "nome": "Colar 'Seja forte e corajosa'",
        "valor_venda": "R$ 100,00",
        "foto": "pin8.png",
        "categoria": "colar"
      },
      {
        "nome": "Colar Espirito Santo",
        "valor_venda": "R$ 95,00",
        "foto": "pin9.png",
        "categoria": "colar"
      },
      {
        "nome": "Colar Chapéu Country",
        "valor_venda": "R$ 87,50",
        "foto": "pin10.png",
        "categoria": "colar"
      },
      {
        "nome": "Colar Capela Nossa Senhora",
        "valor_venda": "R$ 70,00",
        "foto": "pin11.png",
        "categoria": "colar"
      },
      {
        "nome": "Colar Mandala",
        "valor_venda": "R$ 70,00",
        "foto": "pin13.png",
        "categoria": "colar"
      },
      {
        "nome": "Colar Cadeado Cravejado",
        "valor_venda": "R$ 90,00",
        "foto": "pin12.png",
        "categoria": "colar"
      },
      {
        "nome": "Pulseira Infinito",
        "valor_venda": "R$ 82,90",
        "foto": "pul3.png",
        "categoria": "pulseira"
      },
      {
        "nome": "Pulseira Trevo Preto",
        "valor_venda": "R$ 82,90",
        "foto": "pul4.png",
        "categoria": "pulseira"
      },
      {
        "nome": "Pulseira Trevo Preto",
        "valor_venda": "R$ 82,90",
        "foto": "pul5.png",
        "categoria": "pulseira"
      },
      {
        "nome": "Pulseira Voltinhas",
        "valor_venda": "R$ 51,00",
        "foto": "pul6.png",
        "categoria": "pulseira"
      },
      {
        "nome": "Pulseira Medalha Pai Nosso",
        "valor_venda": "R$ 82,90",
        "foto": "pul7.png",
        "categoria": "pulseira"
      },
      {
        "nome": "Pulseira Medalha Nossa Senhora",
        "valor_venda": "R$ 79,90",
        "foto": "pul8.png",
        "categoria": "pulseira"
      },
      {
        "nome": "Pulseira Laminada",
        "valor_venda": "R$ 82,90",
        "foto": "pul9.png",
        "categoria": "pulseira"
      },
      {
        "nome": "Pulseira Coração",
        "valor_venda": "R$ 65,90",
        "foto": "pul10.png",
        "categoria": "pulseira"
      },
      {
        "nome": "Pulseira Borboleta (Azul Claro e Rosa)",
        "valor_venda": "R$ 82,90",
        "foto": "pul11.png",
        "categoria": "pulseira"
      },
      {
        "nome": "Bracelete Espiral Antibraço",
        "valor_venda": "R$ 92,90",
        "foto": "pul12.png",
        "categoria": "pulseira"
      },
      {
        "nome": "Pulseira Coração Pandora 18cm",
        "valor_venda": "R$ 290,00",
        "foto": "pul13.png",
        "categoria": "pulseira"
      },
      {
        "nome": "Pulseira Pandora Gravado 18cm",
        "valor_venda": "R$ 250,00",
        "foto": "pul14.png",
        "categoria": "pulseira"
      },
      {
        "nome": "Pulseira Berloques Fecho Coração",
        "valor_venda": "Entre 220 e 260",
        "foto": "pul15.png",
        "categoria": "pulseira"
      },
      {
        "nome": "Pulseira Anjo Cravejado",
        "valor_venda": "R$ 82,90",
        "foto": "pul16.png",
        "categoria": "pulseira"
      },
      {
        "nome": "Pulseira Árvore da Vida",
        "valor_venda": "R$ 82,90",
        "foto": "pul18.png",
        "categoria": "pulseira"
      },
      {
        "nome": "Pulseira Olho Grego",
        "valor_venda": "R$ 150,00",
        "foto": "pul17.png",
        "categoria": "pulseira"
      },
      {
        "nome": "Bracelete Fio",
        "valor_venda": "R$ 45,90",
        "foto": "pul19.png",
        "categoria": "pulseira"
      },
      {
        "nome": "Tornozeleira Bolinhas",
        "valor_venda": "R$ 65,20",
        "foto": "tn1.png",
        "categoria": "tornozeleira"
      },
      {
        "nome": "Tornozeleira Coração",
        "valor_venda": "R$ 65,20",
        "foto": "tn2.png",
        "categoria": "tornozeleira"
      },
      {
        "nome": "Tornozeleira Olho Grego",
        "valor_venda": "R$ 65,20",
        "foto": "tn3.png",
        "categoria": "tornozeleira"
      },
      {
        "nome": "Tornozeleira Coração Liso",
        "valor_venda": "R$ 65,20",
        "foto": "tn4.png",
        "categoria": "tornozeleira"
      },
      {
        "nome": "Tornozeleira Elo Cadeado",
        "valor_venda": "R$ 52,00",
        "foto": "tn5.png",
        "categoria": "tornozeleira"
      },
      {
        "nome": "Tornozeleira Riviera COLORIDA",
        "valor_venda": "R$ 182,00",
        "foto": "tn6.png",
        "categoria": "tornozeleira"
      }
  ];