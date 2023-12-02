# dixitApp

npx expo start
Isso irá iniciar o servidor de desenvolvimento Expo e abrir uma página da web onde você pode escolher como deseja executar seu aplicativo, seja em um emulador/simulador ou em um dispositivo físico. Certifique-se de estar no diretório raiz do seu projeto Expo ao executar este comando.

### Generating the APK

To build the APK:

1. **Build the Docker Image**:
   ```bash
   docker build -t expo-container .
   ```

2. **Run the Docker Container**:
   ```bash
   docker run -it --name expo-running-container expo-container
   ```

3. **Find the Container ID**:
   ```bash
   docker ps
   ```

4. **Copy the APK to Your Local System**:
   ```bash
   docker cp <container-id>:/app/android/app/build/outputs/apk/release/app-release.apk ~/Desktop/
   ```
Replace `<container-id>` with the ID of your running container.
