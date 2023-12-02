# Use Ubuntu as the base image
FROM ubuntu:latest

# Install essential tools and OpenJDK 17
RUN apt-get update && \
    apt-get install -y wget unzip curl git && \
    apt-get install -y openjdk-17-jdk --fix-missing && \
    apt-get clean

# Set JAVA_HOME environment variable
ENV JAVA_HOME /usr/lib/jvm/java-17-openjdk-arm64

# Add JAVA_HOME to PATH
ENV PATH ${PATH}:${JAVA_HOME}/bin

# Install Node.js (adjust version as needed)
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs

# Install Yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && \
    apt-get install -y yarn

# Set up Android SDK environment variables
ENV ANDROID_HOME /usr/lib/android-sdk
ENV PATH ${PATH}:${ANDROID_HOME}/cmdline-tools/latest/bin:${ANDROID_HOME}/platform-tools

# Download and unzip Android Command Line Tools
RUN mkdir -p /usr/lib/android-sdk/cmdline-tools && \
    cd /usr/lib/android-sdk/cmdline-tools && \
    wget -q https://dl.google.com/android/repository/commandlinetools-linux-10406996_latest.zip && \
    unzip commandlinetools-linux-10406996_latest.zip && \
    rm commandlinetools-linux-10406996_latest.zip && \
    mv cmdline-tools latest

# Accept all Android SDK licenses
RUN yes | sdkmanager --licenses

# RUN yes | sdkmanager --install "ndk;23.0.759985"

# ENV ANDROID_NDK_HOME ${ANDROID_HOME}/ndk/23.0.759985

# # Install specific Android SDK packages
# RUN sdkmanager "platform-tools" "platforms;android-30" "build-tools;30.0.3"

# Copy your project files into the Docker image
COPY . /app

# Set the working directory to your app
WORKDIR /app

# prebuild app
# RUN npx expo prebuild --platform android
 
# # prebuild app
# RUN cd android && ./gradlew assembleRelease
