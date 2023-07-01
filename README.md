# ∞ Proyecto final Devops

Este es mi proyecto final en el [bootcamp de Devops impartido por GeeksHubs](https://geekshubsacademy.com/producto/devops/).

## ⚛️ Aplicación

- React (con Vite)
- Typescript
- react-testing-library

## 🏗️ Infraestructura

- Docker
- k8s
- AWS (ECR, EKS, EC2)

## 🐳 Cluster en local

Pasos previos:
Buildear la imagen añadiéndole el tag `latest` y el nombre asociado al script `k8s/02-deployment.yml`.

```
docker build -t {{ name }}:latest .
```

Aplicar los siguientes manifests:
01-namespace.yml → Crea el namespace `frontend` para tener separación de contextos.

```
kubectl apply -f k8s/01-namespace.yml
```

02-deployment.yml → Usa la imagen de la aplicación previamente buildeada para crear 3 pods en el nodo, exponiendo el puerto 80 en cada uno de ellos.

> **_NOTA:_** Hay que cambiar el parámetro de `imagePullPolicy` a `Never` en local ya que es un parámetro asociado a la infraestructura en el cloud, en este caso, para el alojamiento de contenedores de AWS (ECR).

```
kubectl apply -n frontend -f k8s/02-deployment.yml
```

local-nodeport.yml → Crea el servicio `NodePort` para exponer el cluster en el puerto 30007. En mi caso, como estoy usando `Docker Desktop`, estará disponible bajo `localhost:30007`.

## 👌🏼 Estrategia de calidad

Para tener calidad en la aplicación, se aplican varias estrategias:

- Eslint y type checking
- [SonarCloud](https://sonarcloud.io/project/overview?id=ivsantos_devops-final-project) → Hay un lindar estricto para la calidad del código, conjuntamente con un mínimo de cobertura de código, por lo que los tests deben cubrir gran parte de la lógica.
- [StackBlitz Codeflow](https://stackblitz.com/codeflow). Es un bot instalado en el repositorio para crear entornos efímeros, con todos los cambios de la pull request asociada.
