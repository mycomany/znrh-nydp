function creatSelect(data,id,shouValue,ma){
	 var str = '<select id = "select" class="selectpicker form-control"  style="background-color: rgba(23,32,45,0);width: 70px;height: 20px;text-align: center;border-radius:10px;border: 1px solid #37bff4;" onchange = "'+ma+'(this.value)">';
         for (var i = 0; i < data.length; i++) {
        	 if (data[i] == shouValue) {
        		 str = str+'<option value = "'+data[i]+'" selected = "selected">'+data[i]+'</option>';
			}
        	 str = str+'<option value = "'+data[i]+'">'+data[i]+'</option>';
		}
         str = str+'</select>';
         var tbody=window.document.getElementById(id);
         tbody.innerHTML = str;
}