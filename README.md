# Node Package Installation

```
npm install
```

## Create SSL Certificates

https://www.digitalocean.com/community/tutorials/how-to-create-a-self-signed-ssl-certificate-for-nginx-in-ubuntu-16-04

```sh

COUNTRY="DE"
STATE="HH"
CITY="Hamburg"
ENTERPRISE="MondoEnt"
COMMON_NAME=$(hostname)

./nginx/setup.sh ${COUNTRY} ${STATE} ${CITY} ${ENTERPRISE} ${COMMON_NAME}

```


# Development

```
npm run dev
```

# Build for Production

```
npm run build
```

# Run Production with Docker

```
npm run build
export NGINX_HOST="$(hostname)"
docker-compose up -d
```

# THREE 

## Camera 

Look at a certain position 

```
camera.lookAt(new THREE.Vector3(0, 0, 0))
```

# Links

## Three JS Docs

https://threejs.org/docs/

## Three JS Tutorials

https://discoverthreejs.com/book/first-steps

## Three JS Geometry Viewer

http://threejsplaygnd.brangerbriz.net/gui/

## Three JS VR Examples

https://threejs.org/examples/?q=webxr

## Three JS GLTF Models

https://github.com/mrdoob/three.js/tree/master/examples/models/gltf

## Linear Algebra Lessons

https://www.khanacademy.org/math/linear-algebra

## Learn OpenGL

https://learnopengl.com/Getting-started/Coordinate-Systems

## Game Programming Patterns

https://gameprogrammingpatterns.com/game-loop.html