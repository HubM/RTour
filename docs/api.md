> Ce document expose les différentes endpoints qu'écoute l'api pour communiquer avec l'application



## API



#### API URL 

- Hébergée : rtour.onthewifi.com/api/v1
- Local: localhost:3000/api/v1



### Endpoints

#### Gestion d'un utilisateur 

##### /user

- **GET :** 

  **Définition** : récupérer un utilisateur en se basant sur son id.

  **Params** (query) :

  ```javascript
  {
  	id: string
  }
  ```

  **Retours** (user: object) : 

  ```javascript
  {
  	user: {
  		id: string,
  		firstname: string,
  		lastname: string,
  		age: string,
  		username: string,
  		city: string,
  		deviceToken: string
  	}
  }
  ```

  ​	

- **POST :** 

  **Définition** : enregrister un utilisateur

  **Params** (body) :

  ``` javascript
  {
  	user: {
  		firstname: string,
  		lastname: string,
  		age: string,
  		username: string,
  		city: string
  	}
  }
  ```

  **Retours :** (message: object)

  ```javascript
  {
   	status: string,
    text: string
  }
  ```



**/login**

- **POST :** 

  **Définition** : se connecter à l'application avec un utilisateur

  **Params** (body) :

  ```javascript
  {
  	user: {
  		firstname: string,
  		lastname: string,
  		age: string,
  		username: string,
  		city: string
  	}
  }
  ```

  **Retours :** (message: object)

  ```javascript
  {
   	status: string,
    text: string
  }
  ```



#### Gestion d'un rider

##### /rider

- **POST :** 

  **Définition** : accepter un rider dans un roadtrip

  **Params** (body) :

  ```javascript
  {
  	 userId: string
  	 roadtripId: string
  }
  ```

  **Retours** (message: object) :

  ```javascript
  {
   	status: string,
    text: string
  }
  ```

- **DELETE :** 

  **Définition** : refuser ou annuler un rider dans un roadtrip

  **Params** (body) :

  ```javascript
  {
  	 userId: string
  	 roadtripId: string
  }
  ```

  **Retours** (message: object) :

  ```javascript
  {
   	status: string,
    text: string
  }
  ```




#### Gestion des roadtrips

##### /roadtrips/byDate 

- **GET :** 

  **Définition** : récupérer des roadtrips en se basant sur une date précise

  **Params** (query) :

  ```javascript
  {
  	date: string
  }
  ```

  **Retours** (roadtrips: array<object>) :

  ```javascript
  [
  	{
      _id: string,
      address: string,
      calendar: {
        startingDate: string,
        duration: number
      },
      hour: string,
      owner: {
        name: string
      },
      roadtripType: string,
      seats: number,
      startCity: string,
      endCity: string
    },
    ...
  ]
  ```



**/roadtrips/byUser**

- **GET :** 

  **Définition** : récupérer des roadtrips crées par un utilisateur

  **Params** (query) :

  ```javascript
  {
  	id: string
  }
  ```

  **Retours** (roadtrips: array<object>) :

  ```javascript
  [
  	{
      _id: string,
      address: string,
      calendar: {
        startingDate: string,
        duration: number
      },
      hour: string,
      owner: {
        name: string
      },
      roadtripType: string,
      seats: number,
      startCity: string,
      endCity: string
    },
    ...
  ]
  ```





#### Gestion d'un roadtrip

**/roadtrip**

- **GET :**

  **Définition** : récupérer un roadtrip en se basant sur son identifiant

  **Params** (query) :

  ```javascript
  {
    roadtripId: string
  }
  ```

  **Retours** (roadtrips: object) :

  ```javascript
  {
      _id: string,
      address: string,
      calendar: {
        startingDate: string,
        duration: number
      },
      hour: string,
      owner: {
        name: string
      },
      roadtripType: string,
      seats: number,
      startCity: string,
      endCity: string
    }
  ```

- **POST :**

  **Définition** : enregistrer un nouveau roadtrip

  **Params** (body) :

  ```javascript
  {
    roadtrip: {
      address: string,
      calendar: {
        startingDate: string,
        duration: number
      },
      hour: string,
      owner: {
        name: string
      },
      roadtripType: string,
      seats: number,
      startCity: string,
      endCity: string
    }
  }
  ```

  **Retours** (message: object) :

  ```javascript
  {
   	status: string,
    text: string
  }
  ```

- **PUT** : 

  **Définition** : ajouter un rider à un roadtrip existant

  **Params** (body) :

  ```javascript
  {
    roadtripId: string,
    rider: {
    	_id: string,
      username: string,
      deviceToken: string
    }
  }
  ```

  **Retours** (message: object) :

  ```javascript
  {
   	status: string,
    text: string
  }
  ```

- **DELETE :**

  **Définition** : supprimer un roadtrip existant

  **Params** (body) :

  ```javascript
  {
    id: string
  }
  ```

  **Retours** (message: object) :

  ```javascript
  {
   	status: string,
    text: string
  }
  ```

  

#### Gestion des notifications

**/registerPushs**

- **POST :** 

  **Définition** : ajouter le device token à un utilisateur 

  **Params** (body) :

  ```javascript
  {
    token: string,
    user: {
      id: string,
      username: string
    }
  }
  ```

  **Retours** (message: object) :

  ```javascript
  {
   	status: string,
    text: string
  }
  ```