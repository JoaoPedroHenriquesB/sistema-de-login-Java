# AppLogin - Aplicação de Login e Registro com Spring Boot

Este é um projeto de exemplo de uma aplicação web para registro e login de usuários, desenvolvida com Java e o framework Spring Boot. A aplicação demonstra a implementação de funcionalidades de autenticação e autorização utilizando Spring Security, com um frontend construído com Thymeleaf.

##  Screenshots

<table>
  <tr>
    <td align="center"><strong>Página de Login e Registro</strong></td>
    <td align="center"><strong>Página de Boas-Vindas</strong></td>
  </tr>
  <tr>
    <td><img src="https://i.imgur.com/gY9gXyW.png" alt="Página de Login e Registro" width="400"></td>
    <td><img src="https://i.imgur.com/s6t3f8a.png" alt="Página de Boas-Vindas" width="400"></td>
  </tr>
</table>

## ✨ Funcionalidades

- **Registro de Usuários:** Novos usuários podem se cadastrar com nome, email e senha.
- **Autenticação de Usuários:** Usuários cadastrados podem fazer login de forma segura.
- **Criptografia de Senhas:** As senhas são armazenadas de forma segura no banco de dados usando BCrypt.
- **Validação de Formulários:** Validação de dados no backend para garantir a integridade das informações e feedback para o usuário.
- **Interface Amigável:** Frontend desenvolvido com Thymeleaf, CSS moderno e JavaScript para uma melhor experiência do usuário.
- **Gerenciamento de Sessão:** Funcionalidades completas de login e logout.

## 🚀 Tecnologias Utilizadas

- **Backend:**
  - Java 17+
  - Spring Boot
  - Spring Security
  - Spring Data JPA / Hibernate
  - Maven
- **Frontend:**
  - Thymeleaf
  - HTML5
  - CSS3
  - JavaScript
- **Banco de Dados:**
  - MySQL

## ⚙️ Como Executar o Projeto

Siga os passos abaixo para configurar e executar o projeto em seu ambiente local.

### 1. Pré-requisitos

Antes de começar, certifique-se de que você tem os seguintes softwares instalados:
- [Java JDK 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html) ou superior
- [Apache Maven](https://maven.apache.org/download.cgi)
- [MySQL Server](https://dev.mysql.com/downloads/mysql/)

### 2. Clone o Repositório

```bash
git clone https://github.com/seu-usuario/appLogin.git
cd appLogin
```
> **Nota:** Substitua `https://github.com/seu-usuario/appLogin.git` pela URL do seu repositório no GitHub.

### 3. Configure o Banco de Dados

1. Crie um banco de dados no seu MySQL. Você pode usar o nome que preferir, por exemplo, `appLogin`:
   ```sql
   CREATE DATABASE appLogin;
   ```

2. Abra o arquivo de configuração `src/main/resources/application.properties`.

3. Altere as seguintes propriedades com as suas credenciais do MySQL:
   ```properties
   # Database Configuration
   spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
   spring.datasource.url=jdbc:mysql://localhost:3306/appLogin?useTimezone=true&serverTimezone=UTC
   spring.datasource.username=seu_usuario_mysql
   spring.datasource.password=sua_senha_mysql
   ```
   > A propriedade `spring.jpa.hibernate.ddl-auto=update` fará com que o Hibernate crie a tabela `user` automaticamente na primeira vez que a aplicação for executada.

### 4. Execute a Aplicação

Você pode executar o projeto de duas maneiras:

- **Pela sua IDE (IntelliJ, Eclipse, VS Code):**
  - Importe o projeto como um projeto Maven.
  - Encontre a classe `AppLoginApplication.java` e execute o método `main`.

- **Pelo terminal (usando Maven Wrapper):**
  - Navegue até a raiz do projeto e execute o comando:
    ```bash
    # Para Windows
    ./mvnw spring-boot:run

    # Para Linux/macOS
    ./mvnw spring-boot:run
    ```

### 5. Acesse a Aplicação

Após iniciar, a aplicação estará disponível no seu navegador. Acesse:

**`http://localhost:8080`**

Você será redirecionado para a página de login. Crie uma conta e faça o login para testar!

---