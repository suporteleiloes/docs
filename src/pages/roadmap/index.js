import { React, useState } from 'react';
import Layout from '@theme/Layout';

export default function Roadmap() {

  const data = [
    {
      id: 1,
      titulo: "Revisar documento do projeto",
      descricao: "Revisar o documento para correções finais.",
      status: "aberto",
      dataConclusao: "15/06/2024",
    },
    {
      id: 2,
      titulo: "Implementar nova funcionalidade",
      descricao: "Adicionar nova funcionalidade ao sistema.",
      status: "pendente",
      dataConclusao: "22/06/2024",
    },
    {
      id: 3,
      titulo: "Testar integração com API",
      descricao: "Realizar testes de integração com a API externa.",
      status: "homolog",
      dataConclusao: "30/06/2024",
    },
    {
      id: 4,
      titulo: "Atualizar documentação técnica",
      descricao: "Atualizar a documentação técnica do projeto.",
      status: "aberto",
      dataConclusao: "05/07/2024",
    },
    {
      id: 5,
      titulo: "Corrigir bugs relatados",
      descricao: "Resolver os bugs relatados pelos usuários.",
      status: "pendente",
      dataConclusao: "12/07/2024",
    },
    {
      id: 6,
      titulo: "Refatorar código do módulo X",
      descricao: "Melhorar a estrutura do código do módulo X.",
      status: "aberto",
      dataConclusao: "18/07/2024",
    },
    {
      id: 7,
      titulo: "Realizar testes de carga",
      descricao: "Executar testes de carga no sistema.",
      status: "homolog",
      dataConclusao: "25/07/2024",
    },
    {
      id: 8,
      titulo: "Reunião com equipe de design",
      descricao: "Participar da reunião para discutir o design.",
      status: "aberto",
      dataConclusao: "01/08/2024",
    },
    {
      id: 9,
      titulo: "Ajustar layout da página inicial",
      descricao: "Fazer ajustes no layout da página inicial.",
      status: "pendente",
      dataConclusao: "08/08/2024",
    },
    {
      id: 10,
      titulo: "Configurar servidor de produção",
      descricao: "Configurar o novo servidor de produção.",
      status: "homolog",
      dataConclusao: "15/08/2024",
    },
    {
      id: 11,
      titulo: "Migrar banco de dados",
      descricao: "Realizar a migração do banco de dados.",
      status: "aberto",
      dataConclusao: "20/08/2024",
    },
    {
      id: 12,
      titulo: "Escrever testes unitários",
      descricao: "Criar testes unitários para o novo módulo.",
      status: "pendente",
      dataConclusao: "25/08/2024",
    },
    {
      id: 13,
      titulo: "Documentar APIs REST",
      descricao: "Escrever a documentação das APIs REST.",
      status: "homolog",
      dataConclusao: "30/08/2024",
    },
    {
      id: 14,
      titulo: "Configurar CI/CD",
      descricao: "Configurar o pipeline de CI/CD.",
      status: "aberto",
      dataConclusao: "05/09/2024",
    },
    {
      id: 15,
      titulo: "Treinamento de segurança",
      descricao: "Participar do treinamento sobre segurança.",
      status: "pendente",
      dataConclusao: "10/09/2024",
    },
    {
      id: 16,
      titulo: "Implementar cache",
      descricao: "Adicionar cache ao sistema para melhorar o desempenho.",
      status: "homolog",
      dataConclusao: "15/09/2024",
    },
    {
      id: 17,
      titulo: "Revisar contratos de fornecedores",
      descricao: "Analisar e revisar contratos existentes.",
      status: "aberto",
      dataConclusao: "20/09/2024",
    },
    {
      id: 18,
      titulo: "Otimizar consultas SQL",
      descricao: "Melhorar a performance das consultas SQL.",
      status: "pendente",
      dataConclusao: "25/09/2024",
    },
    {
      id: 19,
      titulo: "Integrar sistema de pagamentos",
      descricao: "Adicionar integração com o novo sistema de pagamentos.",
      status: "homolog",
      dataConclusao: "30/09/2024",
    },
    {
      id: 20,
      titulo: "Atualizar políticas de privacidade",
      descricao: "Revisar e atualizar as políticas de privacidade.",
      status: "aberto",
      dataConclusao: "05/10/2024",
    },
    {
      id: 21,
      titulo: "Melhorar desempenho do site",
      descricao: "Otimizar o desempenho geral do site.",
      status: "pendente",
      dataConclusao: "10/10/2024",
    },
    {
      id: 22,
      titulo: "Criar testes de integração",
      descricao: "Desenvolver testes de integração para o sistema.",
      status: "homolog",
      dataConclusao: "15/10/2024",
    },
    {
      id: 23,
      titulo: "Planejar sprint do próximo mês",
      descricao: "Definir o planejamento da próxima sprint.",
      status: "aberto",
      dataConclusao: "20/10/2024",
    },
    {
      id: 24,
      titulo: "Revisar código legado",
      descricao: "Analisar e melhorar o código legado.",
      status: "pendente",
      dataConclusao: "25/10/2024",
    },
    {
      id: 25,
      titulo: "Implementar autenticação multifator",
      descricao: "Adicionar autenticação multifator ao sistema.",
      status: "homolog",
      dataConclusao: "30/10/2024",
    },
    {
      id: 26,
      titulo: "Analisar feedback dos usuários",
      descricao: "Revisar e analisar o feedback recebido dos usuários.",
      status: "aberto",
      dataConclusao: "05/11/2024",
    },
    {
      id: 27,
      titulo: "Otimizar processo de build",
      descricao: "Melhorar a eficiência do processo de build.",
      status: "pendente",
      dataConclusao: "10/11/2024",
    },
    {
      id: 28,
      titulo: "Automatizar testes E2E",
      descricao: "Criar automações para testes end-to-end.",
      status: "homolog",
      dataConclusao: "15/11/2024",
    },
    {
      id: 29,
      titulo: "Refatorar componentes de UI",
      descricao: "Refatorar os componentes da interface de usuário.",
      status: "aberto",
      dataConclusao: "20/11/2024",
    },
    {
      id: 30,
      titulo: "Revisar performance do sistema",
      descricao: "Analisar e otimizar a performance do sistema.",
      status: "pendente",
      dataConclusao: "25/11/2024",
    },
  ];

  return (
    <Layout title="Releases" description="Chamados de desenvolvimento">
      <div>
        Olá mundo!
      </div>
    </Layout>
  );
}