# The Wild Oasis Management 🇧🇷

## Visão Geral do Projeto:

O **The Wild Oasis Management** é um aplicativo desenvolvido especificamente para gerenciar operações de hospedagem em cabanas de um hotel. Este sistema foi projetado para atender às necessidades da equipe do hotel, oferecendo uma interface intuitiva para o gerenciamento de reservas, clientes e cabanas. O foco é garantir um fluxo eficiente de trabalho e centralizar todas as informações necessárias para um serviço de alta qualidade.

Você pode acessar o projeto [aqui](towildoasisdashboard.vercel.app).

## Tecnologias Utilizadas:

![React.js](https://img.shields.io/badge/React.js-61DAFB?style=flat-square&logo=react&logoColor=black)
![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=flat-square&logo=react-router&logoColor=white)
![React Query](https://img.shields.io/badge/React%20Query-FF4154?style=flat-square&logo=react-query&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-EC5990?style=flat-square&logo=react-hook-form&logoColor=white)
![Context API](https://img.shields.io/badge/Context%20API-61DAFB?style=flat-square&logo=react&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled%20Components-DB7093?style=flat-square&logo=styled-components&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat-square&logo=chartdotjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white)


### Funcionalidades Principais:

1. **Gestão de Usuários**
   - Apenas funcionários do hotel podem acessar o sistema.
   - Cadastro de novos usuários realizado exclusivamente dentro do aplicativo para garantir segurança.
   - Possibilidade de os usuários carregarem um avatar, alterarem seu nome e senha.

2. **Gestão de Cabanas**
   - Visualização de uma tabela com todas as cabanas, exibindo foto, nome, capacidade, preço e descontos.
   - Possibilidade de criar, atualizar e deletar cabanas (incluindo upload de fotos).

3. **Gestão de Reservas**
   - Exibição de uma tabela com informações de reservas, incluindo datas de chegada e saída, status, valor pago, e detalhes sobre cabanas e convidados.
   - Filtragem das reservas por status: "não confirmada", "check-in realizado" ou "check-out realizado".
   - Registro de informações adicionais como número de hóspedes, número de noites, observações, inclusão de café da manhã e preço do café.

4. **Operações de Check-in e Check-out**
   - Permite realizar check-in/check-out e deletar reservas diretamente na chegada ou saída do hóspede.
   - Gestão de pagamentos: aceita confirmação de pagamento durante o check-in (realizado fora do app).
   - Durante o check-in, é possível adicionar café da manhã para toda a estadia, caso ainda não tenha sido solicitado.

5. **Dashboard Inicial**
   - Exibição de informações importantes referentes aos últimos 7, 30 ou 90 dias:
     - Lista de hóspedes fazendo check-in ou check-out no dia atual, com opções de ação diretamente do painel.
     - Estatísticas de reservas, vendas, check-ins e taxas de ocupação.
     - Gráficos detalhando vendas diárias totais e vendas de extras (como café da manhã).
     - Métricas de duração das estadias, dado essencial para o hotel.

6. **Configurações**
   - Permite que os usuários configurem preços do café da manhã, número mínimo e máximo de noites por reserva, e quantidade máxima de hóspedes por reserva.

7. **Modo Noturno**
   - Possui uma opção de modo escuro para melhorar a experiência do usuário.

---

# The Wild Oasis Management 🇺🇸

## Project Overview:

**The Wild Oasis Management** is an application specifically developed to manage the hosting operations of hotel cabins. This system was designed to meet the needs of the hotel staff, offering an intuitive interface for managing reservations, guests, and cabins. The main focus is to ensure an efficient workflow and centralize all necessary information for high-quality service.

You can access the project [here](towildoasisdashboard.vercel.app).

## Technologies Used:

![React.js](https://img.shields.io/badge/React.js-61DAFB?style=flat-square&logo=react&logoColor=black)
![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=flat-square&logo=react-router&logoColor=white)
![React Query](https://img.shields.io/badge/React%20Query-FF4154?style=flat-square&logo=react-query&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-EC5990?style=flat-square&logo=react-hook-form&logoColor=white)
![Context API](https://img.shields.io/badge/Context%20API-61DAFB?style=flat-square&logo=react&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled%20Components-DB7093?style=flat-square&logo=styled-components&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat-square&logo=chartdotjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white)

### Key Features:

1. **User Management**  
   - Only hotel staff can access the system.  
   - New user registration is exclusively done within the app to ensure security.  
   - Users can upload an avatar, change their name, and update their password.  

2. **Cabin Management**  
   - View a table displaying all cabins, including photo, name, capacity, price, and discounts.  
   - Ability to create, update, and delete cabins (including photo uploads).  

3. **Reservation Management**  
   - View a table with reservation details, including check-in and check-out dates, status, amount paid, and details about cabins and guests.  
   - Filter reservations by status: "unconfirmed," "checked-in," or "checked-out."  
   - Record additional details such as the number of guests, number of nights, notes, breakfast inclusion, and breakfast price.  

4. **Check-in and Check-out Operations**  
   - Allows check-in/check-out and deletion of reservations directly upon guest arrival or departure.  
   - Payment management: accepts payment confirmation during check-in (performed outside the app).  
   - During check-in, users can add breakfast for the entire stay if not already requested.  

5. **Initial Dashboard**  
   - Displays important information for the last 7, 30, or 90 days:  
     - List of guests checking in or out on the current day, with action options directly from the panel.  
     - Statistics on reservations, sales, check-ins, and occupancy rates.  
     - Graphs showing daily total sales and extra sales (such as breakfast).  
     - Metrics for the duration of stays, an essential indicator for the hotel.  

6. **Settings**  
   - Allows users to configure breakfast prices, minimum and maximum number of nights per reservation, and maximum number of guests per reservation.  

7. **Night Mode**  
   - Includes a dark mode option to enhance user experience.  
