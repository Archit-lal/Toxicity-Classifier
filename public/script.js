document.addEventListener('DOMContentLoaded', async () => {
    await tf.setBackend('webgl'); // Set the TensorFlow.js backend to webgl for better performance

    const model = await toxicity.load();

    window.classifyComment = async function () {
        const comment = document.getElementById('commentInput').value;
        const predictions = await model.classify([comment]);

        let isHateful = false;

        predictions.forEach((prediction) => {
            if (prediction.results[0].match) {
                isHateful = true;
            }
        });

        const resultElement = document.getElementById('result');
        resultElement.innerText = isHateful ? 'Hateful comment detected!' : 'Not hateful comment.';
    };
});
