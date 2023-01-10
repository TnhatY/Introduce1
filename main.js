const imgb = document.querySelector(".chinh img");
      imgb.addEventListener("click", function () {
        this.classList.toggle("active");
      }); 


function tich({
         title = '',
         message = '',
         type = '',
         duration = 5000
     }) {
         const main = document.getElementById('tich');
         if (main) {
                             
            const tich = document.createElement('div');
             
            setTimeout(function(){
                main.removeChild(tich)
             },duration)
            tich.onclick = function(e) {
                if (e.target.closest('.tich__dong')) {
                   main.removeChild(tich)
                }
             }
            
             
             const icons = {
                ero: 'fa fa-exclamation-circle',
                suc: 'fa fa-check-circle',
             };
             const ons = {
                suc:'2',
                ero:'1'
             }
             const on = ons[type]
             const icon = icons[type]
             tich.classList.add('tich', `tich--${type}`);
             tich.innerHTML = `
                 
                 <div class="tich__icon${on}">
                    <i class="${icon}"></i>
                 </div>
                 <div class="tich__elemen">
                    <h3 class="tich__title">${title}</h3>
                    <p class="tich__chu">${message}</p>
                 </div>
                 <div class="tich__dong">
                    <i class="fas fa-times"></i>
                 
                 </div>
             `;
             main.appendChild(tich);
             
         }
     }
     
     
     
     function toasstSuccess() {
      tich({
         title: 'Success ',
         message: 'Kết bạn thành công.',
         type: 'suc',
         duration: 5000
     });
     }
     function toasstError() {
      tich({
         title: 'Error ',
         message: 'Đã xảy ra lỗi!',
         type: 'ero',
         duration: 5000
     });
     }