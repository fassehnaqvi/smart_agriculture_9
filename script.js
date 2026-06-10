function optimizeResources() {

    const area =
    parseFloat(document.getElementById("area").value);

    if (!area || area <= 0) {

        alert("Enter valid farm area");
        return;
    }

    const water = area * 1200;
    const fertilizer = area * 50;
    const pesticide = area * 10;

    document.getElementById("results").innerHTML = `

    <div class="card">
        <h2>💧 Water Required</h2>
        <h3>${water} Liters</h3>
    </div>

    <div class="card">
        <h2>🌱 Fertilizer Required</h2>
        <h3>${fertilizer} Kg</h3>
    </div>

    <div class="card">
        <h2>🧪 Pesticide Required</h2>
        <h3>${pesticide} Liters</h3>
    </div>

    `;
}

function sendMessage(event){

    event.preventDefault();

    alert(
    "Message Sent Successfully!"
    );
}
