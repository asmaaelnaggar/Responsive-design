let select=document.querySelectorAll("li[id='selected']")
let j;
for(let i=0;i <select .length;i++){
    select[i].addEventListener('click',function OnClick(event){
        this.classList.add('selected');
        let h=this.innerHTML;
        let l=document.getElementById(h);
        l.style.display='block';
        j=i;
        for(let m=0;m <select.length;m++){
            if(m !=j){
                select[m].classList.remove('selected');
                select[m].classList.remove('se');
                let r=select[m].innerHTML;
                let q=document.getElementById(r);
                q.style.display='none';
            }
        }
    });
}
