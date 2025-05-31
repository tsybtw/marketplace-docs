import{n as o,j as n}from"./entry.client-L5SQJEl7.js";const i="API використовує JWT Bearer токени для автентифікації користувачів.",c=[{depth:1,value:"Авторизація",id:"авторизація",children:[{depth:2,value:"Отримання токену",id:"отримання-токену",children:[{depth:3,value:"Приклад запиту на авторизацію",id:"приклад-запиту-на-авторизацію"}]}]}],a={title:"Авторизація",description:"Налаштування автентифікації та безпеки API"};function r(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"авторизація",children:"Авторизація"}),`
`,n.jsx(e.p,{children:"API використовує JWT Bearer токени для автентифікації користувачів."}),`
`,n.jsx(e.h2,{id:"отримання-токену",children:"Отримання токену"}),`
`,n.jsx(e.p,{children:"Токен отримується після успішної авторизації користувача через систему автентифікації."}),`
`,n.jsx(e.h3,{id:"приклад-запиту-на-авторизацію",children:"Приклад запиту на авторизацію"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-http",inline:"false",className:"",children:`POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
Відповідь
json{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 3600
}
Використання токену
В HTTP заголовках
Додайте токен до заголовку Authorization:
httpAuthorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
В SDK
typescriptimport { Configuration, ProductsApi } from 'marketplace-api-client';

const config = new Configuration({
  basePath: 'https://marketplace-api.com/v1',
  accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
});

const api = new ProductsApi(config);
Динамічне оновлення токену
typescript// Оновлення токену в існуючій конфігурації
config.accessToken = 'новий-jwt-токен';

// Або створення нової конфігурації
const newConfig = new Configuration({
  basePath: 'https://marketplace-api.com/v1',
  accessToken: 'новий-jwt-токен'
});
Безпека
Зберігання токенів

НЕ зберігайте токени в localStorage у веб-додатках
Використовуйте httpOnly cookies для веб-додатків
В мобільних додатках використовуйте безпечне сховище

Обробка expired токенів
typescriptimport axios from 'axios';

// Перехоплювач для обробки 401 помилок
axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Токен застарів, потрібно оновити
      const newToken = await refreshToken();
      // Повторити запит з новим токеном
      error.config.headers.Authorization = \`Bearer \${newToken}\`;
      return axios.request(error.config);
    }
    return Promise.reject(error);
  }
);
Права доступу
API підтримує різні рівні доступу:

USER - базові операції читання
MODERATOR - читання та модифікація контенту
ADMIN - повний доступ до всіх операцій

Перевіряйте права користувача перед викликом API методів.
`})})]})}function p(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{p as default,i as excerpt,a as frontmatter,c as tableOfContents};
//# sourceMappingURL=authorization-B_guZElA.js.map
