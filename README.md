# Elcoma-Dashboard

 Passo a passo para execução do MVP 
 
O projeto teve como foco explorar o seguinte problema: O wi-fi fornecido pelo Elcoma apresenta ao público publicidades que geram relatórios de entregas do conteúdo ao anunciante. No entanto, o relatório está com poucas informações expressivas e  significativas, além de não ser esteticamente interessante. A partir disso desenvolvemos uma solução com foco no problema identificado que consiste na criação de um dashboard com maior detalhamento das informações sobre os dados coletados a partir do acesso do público a plataforma, bem como a otimização e segmentação desses anúncios de acordo com o perfil de usuários e geração de insights de dados.

O MVP da solução foi construído utilizando as seguintes ferramentas:

FRONT-END
Ferramentas de construção de prototipação e desenvolvimento
FIGMA 
VISUAL STUDIO CODE
Linguagens:
HTML como linguagem de marcação
CSS como linguagem de estilo 
JavaScript  como linguagem de programação
Ferramentas de framework
BootStrap e Materialize 
Biblioteca libchart 

BACK-END

Ferramentas de construção do back-end
API construída no PYTHONANYWHERE
Linguagens
Python
JavaScript
Ferramentas 
Postman (Validação serviços e métodos GET e POST)
Jmeter (Testes de serviços)
Django (framework web Python)


----------------------------------------------------------------------------------------------------------------

Descrição da construção do front-end:

1 - Instalação das ferramentas Figma e Visual Studio Code  para a construção da prototipação e do desenvolvimento do sistema Web.

2 - Definição das linguagens HTML, CSS e Javascript,  utilizadas para a construção da versão web do dashboard e do CRUD.

3 - Instalação das Frameworks que é opcional a utilização entre BootStrap e Materialize, que foram utilizadas para aperfeiçoar a responsividade do sistema e usar funcionalidades de codificações pré-prontas.

4 - Utilização da Biblioteca Libchart da Google para a atribuição de dados para os gráficos e criar gráficos estáticos para apresentação da proposta.


Desenvolvimento do Dashboard após prototipação no Figma e definição das tecnologias e ferramentas a serem utilizadas: 


Foi feito uma tela de login modelo alternativo com visual alinhado com o design da Vagalume onde o usuário irá por seu login e senha, na mesma tela é possível acessar a página que contém a opção de “esqueceu a senha” para poder alterar a senha via e-mail.
Depois de efetuar o login vem a tela inicial, onde foi feito um dashboard estático que foi gerado pela biblioteca chart da google. Após a tela inicial vem a tela referente às mídias, onde foi feito um CRUD para poder adicionar, visualizar, remover e editar novas mídias.



Descrição da construção do back-end:

1 - Criação dos contratos no API "Phytonanywhere".

2 - Dentro do Pythonanywhere, realizar a criação de um novo diretório "mysite", acessar a aba "WEB" e adicionar um novo web app a partir de um arquivo flash.apk

3 - Validar a criação de dois novos diretórios dentro do "mysite". Diretórios esses para receber os arquivos HTML e CSS.

4 - Instalação e configuração do Postman.

5 - Validação dos métodos "Contratos" criados (GET e POST) pela ferramenta Postman. Validar todos os serviços criados de acordo
com suas respectivas entradas e saídas, onde o código de retorno "ret_code" 200 é considerado sucesso.

6 - Configuração do Jmeter para realizar testes unitários nos métodos criados. Sempre que houver alguma alteração no código, será
necessário executar uma regressão dos serviços pelo Jmeter.

7- No código, utilizamos os métodos GET e POST, para capturar os dados e enviar os parâmetros no corpo da requisição, respectivamente. 

8- Por fim, utilizamos um return render_template, para chamar o arquivo html e renderiza-lo na API.





