let count = 0;

document.getElementById("tapBtn").addEventListener("click", () => {
    count++;
    document.getElementById("counter").innerText = count;

    if (window.Telegram) {
        Telegram.WebApp.HapticFeedback.impactOccurred("light");
    }
});

document.getElementById("withdraw").addEventListener("click", () => {
    alert("Выплаты пока недоступны (тестовый режим)");
});
