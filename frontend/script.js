async function uploadImage() {
    const file = document.getElementById("fileInput").files[0];
    if (!file) {
        document.getElementById("result").innerText = "Please upload an image first!";
        return;
    }

    document.getElementById("result").innerText = "Processing...";

    const form = new FormData();
    form.append("file", file);

    try {
        const res = await fetch("https://your-backend.onrender.com/predict", {
            method: "POST",
            body: form
        });

        const data = await res.json();

        document.getElementById("result").innerText =
            `Prediction: ${data.label}\nScore: ${data.score.toFixed(4)}`;

    } catch (err) {
        document.getElementById("result").innerText = 
            "Error: unable to connect to the server.";
    }
}
