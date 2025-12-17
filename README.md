git --version : Esta instrucción se utiliza en la terminal, para verificar la versión de Git, que se encuentra instalada en el computador, sirve para verificar la instalación, probar su compatibilidad y también a diagnosticar problemas si otros programas, como VS Code u otras herramientas del desarrolladorno logran sincronizarse con git. 

Por ejemplo: mariajosevillagrazapata@Marias-MacBook-Pro ejercicio 04 % git --version git version 2.52.0 mariajosevillagrazapata@Marias-MacBook-Pro ejercicio 04 %  *  Historial restaurado

git init : Se utiliza para crear un repositorio vacio o reiniciliar uno existente. 

Por ejemplo: mariajosevillagrazapata@Marias-MacBook-Pro ejercicio 04 % git init Reinitialized existing Git repository in /Users/mariajosevillagrazapata/Documents/ejercicio 04/.git/mariajosevillagrazapata@Marias-MacBook-Pro ejercicio 04 % 

git status: Su función consiste en mostrar el estado actual del repositorio, al ejecutarlo, se despliega un resumen detallado, sobre la rama actual, archivos modificados, archivos agregados, listos para confirmar, y por ultimo muestra si el repositorio, esta conectado a uno remoto (GitHub).

Por ejemplo: mariajosevillagrazapata@Marias-MacBook-Pro ejercicio 04 % git status On branch master
nothing to commit, working tree clean
mariajosevillagrazapata@Marias-MacBook-Pro ejercicio 04 % 

git add : Se utiliza para mover cambios en el repositorio, al area de preparación.

Por ejemplo: mariajosevillagrazapata@Marias-MacBook-Pro ejercicio 04 % git add .
mariajosevillagrazapata@Marias-MacBook-Pro ejercicio 04 %

git commit m- "primer commit" : Toma los cambios que se agregaron previamene en git add y los guarda permanentemente en el historial del repositorio. 

Por ejemplo: mariajosevillagrazapata@Marias-MacBook-Pro ejercicio 04 % git commit -m "actualizar"
On branch master
nothing to commit, working tree clean
