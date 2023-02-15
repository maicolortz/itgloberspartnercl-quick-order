#  QUICK ORDER
El componente quick-order permite ir al checkout directamente para completar la compra con solo ingresar el SKU ID.


- ![image](https://user-images.githubusercontent.com/107804493/219127650-7e1f0c6e-16c3-4ebf-ab11-c911c216f475.png)


## Configuración
 ### Paso 1 - Configuración Básica 
- verificar en el package.json en la carpeta raiz y en la carpeta react
- name: debe tener el nombre del componente a usar
- version: 0.01
![image](https://user-images.githubusercontent.com/107804493/219128059-75ba3aa5-22f5-4ba3-8f6c-c8cf8981f204.png)


### Paso 2 - Clonación del repositorio
- Clona el repositorio a tu maquina local
- ![image](https://user-images.githubusercontent.com/107804493/219094687-315319d2-86e4-4eb2-bd82-b0afe1f9930c.png)

### Paso 3 - Editar el Manifest.json 
- Deberas editar el campo vendor que se refiere al  cliente que se este trabajando y en name el nombre del componente  custom
- ![image](https://user-images.githubusercontent.com/107804493/219128153-f630742a-f072-4173-837d-2be540594b61.png)


### Paso 4 - Instalar apps necesarias
 Nos Ubicamos en la carpeta react
```bash
cd react
```
Se ejecuta yarn para que se instalen las dependencias necesarias para que react funcione correctamente
```bash
yarn
```



### Paso 5 - Desinstalar el store-theme predeterminado
Al entrar por primera vez a la tienda, se tendra un store-theme inicial que debera ser desinstalado
- Ejecutamos vtex list para ver las apps instaladas
- identificamos  vtex.store-theme@0.0.1 y copiamos
- Ejecutamos 
```bash
vtex unistall vtex.store-theme@0.0.1
 ```
### Paso 6 - Ejecute un preview de la tienda
- Una vez ya hayas hecho login y hayas creado tu workspace para ejecutar tu tienda, deberas ejecutar vtex link en el workspace donde quieras usar tu componente custom
```bash
vtex link
```
Este permitira sincronizar los archivos de tu computadora con una direccion web que te permitira visualizar la pagina en el navegador.
- Luego ejecutaras 
```bash
vtex browse
```
Este comando sirve para abrir el navegador en la url destinada para visualizar tu tienda


### Dependencies
- manifest.json
![image](https://user-images.githubusercontent.com/107804493/219128266-9ac32d7b-8f04-4695-b126-08ba08ebd55d.png)
- package.json en la carpeta raiz
```bash
"devDependencies": {
    "@vtex/intl-equalizer": "^2.5.0",
    "@vtex/prettier-config": "^0.3.5",
    "eslint": "^7.14.0",
    "eslint-config-vtex": "^12.8.11",
    "eslint-config-vtex-react": "^6.8.3",
    "husky": "^4.3.0",
    "lint-staged": "^10.5.1",
    "prettier": "^2.2.0",
    "typescript": "^3.9.6",
    "@vtex/danger": "^0.2.7"
  }
```
- package.json en la carpeta react
```bash
 "dependencies": {
    "apollo-client": "^2.6.8",
    "react": "^16.12.0",
    "react-apollo": "^3.1.3",
    "react-dom": "^16.12.0",
    "react-intl": "^3.12.0"
  },
  "devDependencies": {
    "@apollo/react-testing": "^3.1.3",
    "@types/jest": "^25.1.4",
    "@types/node": "^13.9.8",
    "@types/react": "^16.9.31",
    "@vtex/test-tools": "^3.3.2",
    "@vtex/tsconfig": "^0.4.4",
    "apollo-cache-inmemory": "^1.6.5",
    "graphql": "^14.6.0",
    "typescript": "3.9.7"
  }
  ```



### Contributors
1. MAICOL ALEXIZ ORITZ HERNANDEZ
2. Desde forma indirecta con sus consejos y recomendaciones, mis tutores Luis Felipe Cerero García, David Mosquera y Julio César Arroyave 
