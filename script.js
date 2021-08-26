let selectedRow = null

function onFormSubmit() {
    if (validate()) {
        let formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}
function readFormData() {
    let formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["specialist"] = document.getElementById("specialist").value;
    formData["university"] = document.getElementById("university").value;

    if (formData["specialist"] === "non-specialist") {
        formData["salary"] = 'Rp. 10.000.000,00'
    }
    else {
        formData["salary"] = 'Rp. 25.000.000,00'
    }
    return formData;
}

function spesialis(data) {
    if (data.specialist == "non-specialist") {
        return 'Non Specialist';
    }
    else if (data.specialist == "Sp.A") {
        return 'Specialist Anak';
    }
    else if (data.specialist == "Sp.And") {
        return 'Specialist Andrologi';
    }
    else if (data.specialist == "Sp.An") {
        return 'Specialist Anestesiologi dan Terapi Intensif';
    }
    else if (data.specialist == "Sp.Ak") {
        return 'Specialist Akupunktur Medik';
    }
    else if (data.specialist == "Sp.B") {
        return 'Specialist Bedah';
    }
    else if (data.specialist == "Sp.BA") {
        return 'Specialist Bedah Anak';
    }
    else if (data.specialist == "Sp.BP-RE") {
        return 'Specialist Bedah Plastik, Rekonstruksi, dan Estetik';
    }
    else if (data.specialist == "Sp.BS") {
        return 'Specialist Saraf';
    }
    else if (data.specialist == "Sp.BTKV") {
        return 'Specialist Bedah Toraks, Kardiak, dan Vaskular';
    }
    else if (data.specialist == "Sp.DV") {
        return 'Specialist Bedah Dermatologi dan Venereologi';
    }
    else if (data.specialist == "Sp.MK") {
        return 'Specialist Mikrobiologi Klinik';
    }
}

function spesialisx(data) {
    if (data == "non-specialist") {
        return 'Non Specialist';
    }
    else if (data == "Sp.A") {
        return 'Specialist Anak';
    }
    else if (data == "Sp.And") {
        return 'Specialist Andrologi';
    }
    else if (data == "Sp.An") {
        return 'Specialist Anestesiologi dan Terapi Intensif';
    }
    else if (data == "Sp.Ak") {
        return 'Specialist Akupunktur Medik';
    }
    else if (data == "Sp.B") {
        return 'Specialist Bedah';
    }
    else if (data == "Sp.BA") {
        return 'Specialist Bedah Anak';
    }
    else if (data == "Sp.BP-RE") {
        return 'Specialist Bedah Plastik, Rekonstruksi, dan Estetik';
    }
    else if (data == "Sp.BS") {
        return 'Specialist Saraf';
    }
    else if (data == "Sp.BTKV") {
        return 'Specialist Bedah Toraks, Kardiak, dan Vaskular';
    }
    else if (data == "Sp.DV") {
        return 'Specialist Bedah Dermatologi dan Venereologi';
    }
    else if (data == "Sp.MK") {
        return 'Specialist Mikrobiologi Klinik';
    }
}

function insertNewRecord(data) {
    let table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    if (data.specialist === 'non-specialist') {
        cell1.innerHTML = 'dr. ' + data.fullName
    }else{
    cell1.innerHTML = 'dr. ' + data.fullName + ', ' + data.specialist;}
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = spesialis(data)
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;

    cell4 = newRow.insertCell(3);
    if (data.university == '') {
        cell4.innerHTML = `Belum memasukan Universitas`
    }
    else {
        cell4.innerHTML = data.university;
    }

    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}
function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("university").value = "";
    selectedRow = null;
}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    let temp = ''
    for (let i = 4; i < selectedRow.cells[0].innerHTML.length; i++) {
        if (selectedRow.cells[0].innerHTML[i] == ',') {
            break
        }
        temp = temp + selectedRow.cells[0].innerHTML[i]
    }
    document.getElementById("fullName").value = temp;
    document.getElementById("university").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    if(formData.specialist === 'non-specialist'){
        selectedRow.cells[0].innerHTML = 'dr. ' + formData.fullName
    }else{
        selectedRow.cells[0].innerHTML = 'dr. ' + formData.fullName + ', ' + formData.specialist;
    }
    selectedRow.cells[1].innerHTML = spesialisx(formData.specialist);
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.university;
}
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}