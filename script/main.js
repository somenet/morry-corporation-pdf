const input = document.getElementById('input-date');
const output = document.getElementById('formatted-date');

input.addEventListener('change', () => {
    if (input.value) {
        const [year, month, day] = input.value.split('-');
        output.textContent = `${year}年${month}月${day}日`;
    } else {
        output.textContent = '';
    }
});

document.querySelectorAll('.content-file').forEach(input => {
    input.addEventListener('change', function () {
        const file = this.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = () => {
                // 親要素（.content-1や.content-2）からimgを探して設定
                const container = this.closest('div');
                const img = container.querySelector('.content-image');
                img.src = reader.result;
            };
            reader.readAsDataURL(file);
        }
    });
});

document.querySelectorAll('.content-image').forEach(img => {
    img.addEventListener('click', function () {
        const container = this.closest('div');
        const fileInput = container.querySelector('.content-file');
        fileInput.click();
    });
});