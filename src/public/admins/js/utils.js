function searchTable(data, searchSelector, columns, showAction) {
    const searchInput = document.querySelector(searchSelector);
    const table = document.querySelector('#table');

    // Lắng nghe sự kiện input
    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();

        // Lọc dữ liệu dựa trên kết quả tìm kiếm
        const filteredData = data.filter((item) =>
            Object.values(item).some(
                (value) =>
                    typeof value === 'string' &&
                    value.toLowerCase().includes(searchTerm)
            )
        );

        // Lấy danh sách các thẻ tr trong tbody của bảng
        const rows = table.querySelectorAll('tbody tr');

        // Duyệt qua từng hàng và ẩn/hiển thị dựa trên kết quả tìm kiếm
        rows.forEach((row, index) => {
            const rowData = data[index];
            if (filteredData.includes(rowData)) {
                // Nếu hàng trùng khớp, hiển thị
                row.style.display = '';
            } else {
                // Nếu không trùng khớp, ẩn
                row.style.display = 'none';
            }
        });
    });
}
