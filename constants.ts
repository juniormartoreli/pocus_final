export const APP_NAME = "POCUS Elite Mentor";

export const PROTOCOL_STEPS = [
  "Realizar a higiene das mãos",
  "Realizar a desinfecção do ultrassom de forma adequada",
  "Orientar o paciente sobre como o procedimento será realizado",
  "Certificar que o ultrassom está conectado na tomada (caso haja necessidade) ficando contralateral ao local da punção",
  "Verificar se o paciente possui algum histórico de alergias",
  "Avaliar e questionar paciente e prontuário quanto a contra-indicação do acesso no membro escolhido (Fístulas Artério Venosas/Trombose Venosa Profunda/Mastectomias)",
  "Assegurar a privacidade do paciente e garantir iluminação adequada para a insonação",
  "Acomodar o braço do paciente estendido sobre uma superfície firme e estável",
  "Aplicar uma camada fina de aproximadamente 5mm de gel condutor para ultrassom na região dos Cristais piezoelétricos do seu transdutor linear",
  "Iniciar a insonação com a sua mão não dominante preferencialmente pela fossa antecubital",
  "Avaliar a anatomia local dando preferência para as veias basílica e cefálica",
  "Avaliar a compressibilidade do sistema venoso, profundidade e calibre da veia a ser puncionada garantindo que o catéter deve ocupar no máximo 1/3 do diâmetro da veia (Figuras 1 e 2)",
  "Guardar o transdutor em local adequado",
  "Realizar a limpeza antisséptica da pele no local escolhido: I. Com lenço estéril ou algodão embebido em álcool 70%: efetuar movimento único, espiralado e do centro para a periferia; II. Com gaze estéril impregnada com clorexidina alcoólica 0,5%: friccionar por 30 segundos com movimentos de vai-e-vem",
  "Abrir a embalagem do cateter parcialmente, mantendo-o protegido de contaminação",
  "Preparar parcialmente o curativo estéril para posterior fixação",
  "Retirar parcialmente a tampa protetora do cateter",
  "Utilizar os EPIs recomendados: máscara, óculos de proteção e luvas",
  "Posicionar o conector próximo à mão não dominante",
  "Aplicar uma camada fina de aproximadamente 2mm de gel condutor para ultrassom na região dos Cristais piezoelétricos do seu transdutor linear",
  "Colocar o curativo estéril sob o transdutor",
  "Pegar o transdutor com a mão não dominante e utilizar SF0,9% ou gel estéril para insonar sob o local da punção",
  "Informar ao paciente sobre a introdução do cateter",
  "Inserir o cateter com o bisel para cima observando o bisel para garantir que a ponta da agulha penetre adequadamente na pele",
  "Avançar de 1 a 3mm",
  "Realizar movimentos de vai-e-vem e tilt com o ultrassom até localizar a ponta da agulha",
  "Após a visualização da ponta da agulha avançar o catéter de 1 a 3 mm",
  "Realizar movimentos de vai-e-vem e tilt com o ultrassom até localizar a ponta da agulha",
  "Fazer os passos 26 e 27 até que a ponta da agulha seja visualizada no centro da veia",
  "Avançar de 1 a 2 mm",
  "Confirmar o posicionamento com o final da agulha no centro da veia utilizando movimentos de vai e vem com o transdutor do ultrassom",
  "Soltar o transdutor em local apropriado",
  "Finalizar a introdução do cateter com a mão não dominante",
  "Estabilizar o canhão do cateter usando a lateral do polegar da mão não dominante",
  "Soltar o torniquete com a mão dominante",
  "Comprimir a veia acima do ponto de inserção usando o dedo médio da mão não dominante",
  "Retirar a agulha metálica/fio guia",
  "Conectar o conector ao cateter",
  "Aplicar a primeira tira de fixação sobre o corpo do cateter",
  "Acoplar a seringa de 10ml e aspirar levemente para confirmar a perviedade venosa",
  "Injetar o SF 0,9% e verificar a perviedade",
  "Desconectar a seringa",
  "Finalizar a fixação do cateter",
  "Registrar a punção com etiqueta contendo data, hora, calibre do cateter e nome do profissional, mantendo visibilidade do local de inserção",
  "Guardar o transdutor linear no suporte do aparelho de ultrassom",
  "Ajustar a posição do paciente de maneira confortável",
  "Retirar a luva da mão não dominante e, com ela, remover óculos de proteção e máscara",
  "Reorganizar a estação de trabalho",
  "Descartar perfurocortantes em recipiente rígido e demais materiais em local apropriado, com a mão dominante ainda enluvada",
  "Retirar a luva da mão dominante e descartá-la",
  "Desinfetar os materiais reutilizáveis conforme protocolo institucional",
  "Limpar o ultrassom com solução adequada de acordo com o protocolo da instituição",
  "Higienizar as mãos",
  "Registrar a intervenção no prontuário do paciente"
];

export const SYSTEM_INSTRUCTION = `
Você é um Professor Premium, High Ticket e Mentor Sênior brasileiro. Seu público são médicos que exigem eficiência. O tempo deles é valioso.

Sua Missão: Ensinar POCUS e Acesso Vascular Guiado por Ultrassom com clareza absoluta e brevidade.

ESTRUTURA OBRIGATÓRIA DA RESPOSTA:

1. RESPOSTA DIRETA (O "Resumo de Elite"):
   - Responda à pergunta em 1 ou 2 parágrafos curtos. Vá direto ao ponto. Sem enrolação.
   - Use tópicos (bullets) se precisar listar passos.

2. PERGUNTA DE APROFUNDAMENTO:
   - Ao final do resumo, SEMPRE coloque uma frase em itálico perguntando:
   - *"Deseja que eu detalhe a técnica passo a passo ou a fisiopatologia envolvida?"*

3. REFERÊNCIAS CIENTÍFICAS REAIS:
   - Você deve citar apenas referências VERDADEIRAS. Não invente.
   - Formato: [Autor Principal et al. Nome do Artigo/Livro. Ano].
   - Priorize estas fontes confiáveis:
     * Sinskey T et al. "Point-of-care ultrasound to guide vascular access." J Ultrasound Med, 2019.
     * Lichtenstein D. "Whole Body Ultrasonography in the Critically Ill" (BLUE Protocol).
     * AIUM Practice Parameter for the Use of Ultrasound to Guide Vascular Access Procedures.
     * Lamperti M et al. "International evidence-based recommendations on ultrasound-guided vascular access." Intensive Care Med, 2012.
     * ACEP Policy Statement: "Ultrasound-Guided Vascular Access".
     * Ma & Mateer's Emergency Ultrasound.

TOM DE VOZ:
- Profissional, Culto, Seguro e Objetivo.
- Evite diagnósticos finais, foque no raciocínio e na técnica.

Exemplo de comportamento:
Usuário: "Como diferenciar artéria de veia?"
Você: "A diferenciação segura baseia-se em três pilares: compressibilidade (veias colabam, artérias pulsam), fluxo ao Doppler (veias têm fluxo contínuo/fásico, artérias têm fluxo pulsátil) e anatomia (artérias possuem parede muscular mais espessa). A regra de ouro é: na dúvida, não puncione.

*Deseja que eu explique como ajustar o PRF do Doppler para essa diferenciação?*

Refs:
[Sinskey T et al. Point-of-care ultrasound to guide vascular access. 2019]
[AIUM Practice Parameter for the Use of Ultrasound to Guide Vascular Access. 2019]"
`;
