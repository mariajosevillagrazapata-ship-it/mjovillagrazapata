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

Ejercicio final parte 2

mariajosevillagrazapata@Marias-MacBook-Pro Mi proyecto % git init
hint: Using 'master' as the name for the initial branch. This default branch name
hint: will change to "main" in Git 3.0. To configure the initial branch name
hint: to use in all of your new repositories, which will suppress this warning,
hint: call:
hint:
hint:   git config --global init.defaultBranch <name>
hint:
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint:
hint:   git branch -m <name>
hint:
hint: Disable this message with "git config set advice.defaultBranchName false"
Initialized empty Git repository in /Users/mariajosevillagrazapata/Documents/ejercicio 04/Mi proyecto/.git/
mariajosevillagrazapata@Marias-MacBook-Pro Mi proyecto % git add .
mariajosevillagrazapata@Marias-MacBook-Pro Mi proyecto % git commit -m
 "primer commit del proyecto"
[master (root-commit) 29c9601] primer commit del proyecto
 Committer: María José Villagra Zapata <mariajosevillagrazapata@Marias-MacBook-Pro.local>
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly. Run the
following command and follow the instructions in your editor to edit
your configuration file:

    git config --global --edit

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author

 10 files changed, 25 insertions(+)
 create mode 100644 assets/.DS_Store
 create mode 100644 assets/css/style.css
 create mode 100644 assets/img/.DS_Store
 create mode 100644 assets/img/bandolera.jpg
 create mode 100644 assets/img/cardigan.jpeg
 create mode 100644 assets/img/cosmetiquero.webp
 create mode 100644 assets/img/gafasdesol.jpg
 create mode 100644 assets/img/lampara.webp
 create mode 100644 assets/img/taza pusheen.jpeg
 create mode 100644 assets/js/script.js
mariajosevillagrazapata@Marias-MacBook-Pro Mi proyecto % 

