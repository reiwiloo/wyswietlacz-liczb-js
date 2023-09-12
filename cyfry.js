let btn = document.querySelector('#action').addEventListener('click', funkcja);

function funkcja(){
    let liczba = document.querySelector('#liczba').value,
        cyfra = document.querySelectorAll('main p'),
        blok = document.querySelector('main');
    podmiana(liczba, cyfra, blok);
}

function podmiana(liczba, cyfra, blok){
        let string_liczba = String(liczba),
            ostatnia_liczba = '';

        // console.log('ost: '+ostatnia_liczba)
        // console.log('liczb z: '+string_liczba)
        // console.log('ost len: '+ostatnia_liczba.length);
        // console.log('liczb z  len: '+string_liczba.length);

        for(let i = 0; i < cyfra.length; i++){
            ostatnia_liczba += cyfra[i].innerHTML;
        }
        
        // console.log(ostatnia_liczba);

        if(ostatnia_liczba.length < string_liczba.length){
            for(let i = ostatnia_liczba.length; i < string_liczba.length; i++){
                blok.innerHTML += '<p></p>';
            }
        }
        else if(ostatnia_liczba.length > string_liczba.length) {
            for(let i = ostatnia_liczba.length - 1; i >= string_liczba.length; i--){
                cyfra[i].remove();
            }
        }

        cyfra = document.querySelectorAll('main p');

        for(let i = 0; i < string_liczba.length; i++){
            if(string_liczba[i] != ostatnia_liczba[i]){
                cyfra[i].innerHTML = string_liczba[i];
            }
        }
}