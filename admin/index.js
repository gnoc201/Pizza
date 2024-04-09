
function onBtnSaveClick() {
    var vMaNV = document.getElementById("ma-nv").value;
    var vHoTen = document.getElementById("ho-ten").value;
    var vAge = document.getElementById("age").value;
    var vChucVu = document.getElementById("position").value;
    if (vMaNV == "") {
        alert("Bạn chưa nhập mã nhân viên")
    } else if (vHoTen == "") {
        alert("bạn chưa nhập họ và tên")
    }
    else if (vHoTen == "") {
        alert("bạn chưa nhập họ và tên")
    }
    else if (vAge == "") {
        alert("bạn chưa nhập tuối")
    }
    else if (vChucVu == "") {
        alert("bạn chưa nhập chức vụ")
    }

    if (vMaNV && vAge && vHoTen && vChucVu) {
        // var staff = []
        var staff = localStorage.getItem("staff") ? JSON.parse(localStorage.getItem("staff")) : [];
        staff.push({
            vMaNV: vMaNV,
            vHoTen: vHoTen,
            vAge: vAge,
            vChucVu: vChucVu
        });
        
        localStorage.setItem("staff", JSON.stringify(staff))
        this.renderStaff();
    }
}
function renderStaff(){

    var staff = localStorage.getItem("staff") ? JSON.parse(localStorage.getItem("staff")) : [];
     if(staff.length === 0 ){
        document.getElementById("list").style.display = "none";
        return false; 
     }
     document.getElementById("list").style.display = "block";
     var tableContent = `<tr>
            <tb>Mã nv</tb>
            <tb>Họ tên</tb>
            <tb>Tuổi</tb>
            <tb>Chức vụ</tb>
            <tb>Hàng động</tb>
        </tr>`;
        staff.forEach((staff,index) =>{
            index ++;
            tableContent += `<tr>  
            <tb>${staff.vMaNV}</tb>
            <tb>${staff.vHoTen}</tb>
            <tb>${staff.vAge}</tb>
            <tb>${staff.vChucVu}</tb>
            <tb>
                 <a href="" onclick="deleteStaff(${index})">Delete</a>
            </tb>
        </tr>` 
        });
        document.getElementById("staff").innerHTML = tableContent; 
}
function deleteStaff(id){
    var staff = localStorage.getItem("staff") ? JSON.parse(localStorage.getItem("staff")) : [];
    staff.splice(id,1)
    localStorage.setItem('staff',JSON.stringify(staff));
    renderStaff();

}
