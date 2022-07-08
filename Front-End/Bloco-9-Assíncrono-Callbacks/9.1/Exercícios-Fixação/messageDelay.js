// 4 - Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra. O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio. Crie a função sendMarsTemperature, que imprime a temperatura em Marte.

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
    const maxTemperature = 58;
    return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

const sendMarsTemperature = () => {
    const currentTemperature = getMarsTemperature();
    setTimeout(() => {
        console.log(`Mars temperature is: ${currentTemperature} degree Celsius`);
    }, messageDelay());
};

sendMarsTemperature();

// 5 - Agora que você fez a função que envia a temperatura de Marte, suponha que você consiga enviar para o robô Curiosity o que você deseja fazer, uma vez obtida com sucesso a temperatura em Marte. Logo, adicione na função sendMarsTemperature um callback que contenha as ações a serem tomadas em cima da temperatura.

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9 / 5) + 32;

const temperatureInFahrenheit = (temperature) =>
    console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
    console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const sendMarsTemperatureWithCallback = (callback) => {
    const currentTemperature = getMarsTemperature();
    setTimeout(() => callback(currentTemperature), messageDelay());
};

sendMarsTemperatureWithCallback(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperatureWithCallback(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo

// 6 - Por fim, o robô Curiosity tem uma taxa de sucesso de envio de mensagem de 60% devido ao fato de o robô já estar muito ocupado com outras operações. Logo, adicione na função sendMarsTemperature uma outra callback que contenha as ações a serem tomadas em caso de falha.

const handleError = (errorReason) =>
    console.log(`Error getting temperature: ${errorReason}`);

const sendMarsTemperatureWithCallback2 = (callback, error) => {
    const currentTemperature = getMarsTemperature();
    const successfullSentMessage = Math.random() <= 0.6;

    setTimeout(() => {
        if (successfullSentMessage) callback(currentTemperature);
        else error('Robot is busy');
    }, messageDelay());
};

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperatureWithCallback2(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperatureWithCallback2(greet, handleError);