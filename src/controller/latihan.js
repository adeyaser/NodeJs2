const kalkulator2=(req, res, next)=>{
    const  angka1  = req.body.angka1;
    const  angka2  = req.body.angka2;
    const  operator= req.body.operator;
    let   optr_ket ='';
    let   hasil ='';

    if(operator == '+'){
        optr_ket = " Penjumlahan";
        hasil = parseInt(angka1) + parseInt(angka2);
    }else if(operator == '-'){
        optr_ket ="Pengurangan";
        hasil = parseInt(angka1) - parseInt(angka2);
    }else if(operator == '/'){
        optr_ket ="Pembagian";
        hasil = parseInt(angka1) / parseInt(angka2);
    }else if(operator =='*'){
        optr_ket = "Pengalian";
        hasil = parseInt(angka1) * parseInt(angka2);
    }else{
        optr_ket =" Maaf Operator Yang Kamu Masukan Tidak Sesuai";
        res.json({
            message: optr_ket,
            data: null
        })
    }
    res.json({
            message: 'sukses',
            data: `Hasil ${optr_ket} Dari ${angka1} dan ${angka2} Adalah ${hasil}`
        })
   
};

const looping1 =(req, res, next)=>{

        let hasil ='';
        for(a=1; a<10;a++){
            if(a%2==0){
             hasil+=`No ${a} adalah bilangan genap,`;
            }else{
                hasil+=`No ${a} adalah bilangan ganjil,`;
            }
        }
        let  hasil_array = hasil.split(',');
        hasil_array.splice(-1);

        res.json({
            message: 'Sukses',
            data: hasil_array
        })
}

module.exports = {
    kalkulator2,
    looping1
}